import * as fs from 'fs';
import * as path from 'path';
import { Resource } from '../../types';

// Get the resources directory path
const RESOURCES_DIR = path.join(process.cwd(), 'resources');

interface ResourceObject {
  name: string;
  description?: string;
  categories: string[];
  url: string;
  keywords?: string[];
}

// Function to read a TypeScript resource file and extract the resources array
const extractResourcesFromFile = (filePath: string): ResourceObject[] => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the expected pattern
    if (!fileContent.includes('export const resources')) {
      console.warn(`⚠️ No resources array found in ${path.basename(filePath)}`);
      return [];
    }
    
    // Use regex to find all resource objects in the file
    const resourcePattern = /\{\s*name:\s*['"](.*?)['"]/g;
    const matches = Array.from(fileContent.matchAll(resourcePattern));
    
    if (matches.length === 0) {
      console.warn(`⚠️ No resources found in ${path.basename(filePath)}`);
      return [];
    }
    
    // Extract complete resource objects using regex
    const resources: ResourceObject[] = [];
    const objectPattern = /\{[\s\S]*?name:[\s\S]*?\}(?=\s*,|\s*\])/g;
    const objectMatches = Array.from(fileContent.matchAll(objectPattern));
    
    for (const match of objectMatches) {
      try {
        // Extract properties from the match
        const resourceText = match[0];
        const nameMatch = resourceText.match(/name:\s*['"](.*?)(?<!\\)['"]/);
        
        // Use a more sophisticated regex for description to handle escaped quotes
        let descriptionMatch = null;
        const descriptionRegex = /description:\s*['"]((?:(?!(?<!\\)['"]).|\n)*)['"]|description:\s*`((?:(?!`).)*)`/s;
        const descResult = resourceText.match(descriptionRegex);
        if (descResult) {
            descriptionMatch = [descResult[0], descResult[1] || descResult[2]];
        }
        
        const categoriesMatch = resourceText.match(/categories:\s*(\[\s\S]*?\])/);
        const urlMatch = resourceText.match(/url:\s*['"](.*?)(?<!\\)['"]/);
        const keywordsMatch = resourceText.match(/keywords:\s*(\[\s\S]*?\])/);
        
        if (nameMatch && urlMatch) {
          const resource: ResourceObject = {
            name: nameMatch[1],
            categories: [],
            url: urlMatch[1]
          };
          
          if (descriptionMatch) {
            resource.description = descriptionMatch[1];
          }
          
          if (categoriesMatch) {
            // Parse categories array
            const categoriesStr = categoriesMatch[1].replace(/\[|\]/g, '').trim();
            if (categoriesStr) {
              resource.categories = categoriesStr
                .split(',')
                .map(cat => cat.trim().replace(/['"]|(\[)|(\])/g, ''));
            }
          }
          
          if (keywordsMatch) {
            // Parse keywords array
            const keywordsStr = keywordsMatch[1].replace(/\[|\]/g, '').trim();
            if (keywordsStr) {
              resource.keywords = keywordsStr
                .split(',')
                .map(key => key.trim().replace(/['"]|(\[)|(\])/g, ''));
            }
          }
          
          resources.push(resource);
        }
      } catch (e) {
        console.error('Error parsing resource object:', e);
      }
    }
    
    console.log(`✅ Found ${resources.length} resources in ${path.basename(filePath)}`);
    return resources;
  } catch (error) {
    console.error(`Error reading file ${path.basename(filePath)}:`, error);
    return [];
  }
};

// Function to sort resources alphabetically by name
const sortResources = (resources: ResourceObject[]): ResourceObject[] => {
  return [...resources].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};

// Function to write resources back to file
const writeResourcesToFile = (filePath: string, resources: ResourceObject[]): void => {
  try {
    if (resources.length === 0) {
      return;
    }

    // Read the original file to keep its structure
    const originalContent = fs.readFileSync(filePath, 'utf8');
    
    // Format each resource as a string with proper indentation
    const resourcesAsString = resources.map(resource => {
      let result = '    {\n';
      
      // Add name (always present)
      result += `        name: '${resource.name}',\n`;
      
      // Add description if present
      if (resource.description) {
        result += `        description:\n`;
        // Preserve escaped quotes and apostrophes in the description
        const safeDescription = resource.description.replace(/'/g, "\\'").replace(/"/g, '\\"');
        result += `            '${safeDescription}',\n`;
      }
      
      // Add categories (always present)
      result += '        categories: [';
      result += resource.categories.map(cat => `'${cat}'`).join(', ');
      result += '],\n';
      
      // Add url (always present)
      result += `        url: '${resource.url}'`;
      
      // Add keywords if present
      if (resource.keywords && resource.keywords.length > 0) {
        result += ',\n        keywords: [';
        result += resource.keywords.map(key => `'${key}'`).join(', ');
        result += ']';
      }
      
      result += '\n    }';
      return result;
    }).join(',\n');
    
    // Replace the resources array in the original content
    // Find the area between export const resources: Resource[] = [ and the closing ]
    const pattern = /(export\s+const\s+resources\s*:\s*Resource\[\]\s*=\s*\[)[\s\S]*(\])\s*;?/;
    const replacement = `$1\n${resourcesAsString}\n$2`;
    
    const updatedContent = originalContent.replace(pattern, replacement);
    
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Updated ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error writing to file ${path.basename(filePath)}:`, error);
  }
};

// Main function to order all resources
const orderResources = (): void => {
  console.log('🔄 Ordering resources alphabetically...');
  
  // Get all resource files
  const files = fs.readdirSync(RESOURCES_DIR)
    .filter((file: string) => file.endsWith('.ts'));
  
  let totalResourcesProcessed = 0;
  
  // Process each file
  for (const file of files) {
    const filePath = path.join(RESOURCES_DIR, file);
    
    try {
      // Read and extract resources
      const resources = extractResourcesFromFile(filePath);
      
      if (resources.length === 0) {
        continue;
      }
      
      totalResourcesProcessed += resources.length;
      
      // Sort resources
      const sortedResources = sortResources(resources);
      
      // Write back sorted resources
      writeResourcesToFile(filePath, sortedResources);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log(`✨ Done! Processed ${totalResourcesProcessed} resources in ${files.length} files.`);
};

// Run the script
orderResources();
