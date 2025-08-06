const fs = require('fs');

const brokenLinks = JSON.parse(fs.readFileSync('./lychee/out.json', 'utf8'));

brokenLinks.problems.forEach(({ target, locations }) => {
  locations.forEach(({ file, line }) => {
    let content = fs.readFileSync(file, 'utf8').split('\n');
    const regex = new RegExp(`\\[.*?\\]\\(${target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g');
    content[line - 1] = content[line - 1].replace(regex, '~~[Broken Link Removed]~~');
    fs.writeFileSync(file, content.join('\n'));
  });
});
console.log('Broken links have been removed from the files.');