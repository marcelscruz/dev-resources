# Contributing

---
> ❗️ The README file is auto-generated on every `push` and/or `merge`, so please **do not** edit it.
> Changes related to resources should happen within the `/resources` folder.
---

Everyone is welcome to collaborate to this project, but please take into consideration the following:

-   resources should align with the purpose of the project
-   resources shouldn't be a duplicate; a text search on the README file should be enough to find this answer
-   the list of resources is written in JavaScript; if you need assistance on this matter, please open an issue with the resource's information
-   make sure to check all items listed on the [pull request template](PULL_REQUEST_TEMPLATE.md) before submitting your contribution
-   currently, there is no fixed schedule for when the [website](https://devresourc.es/?ref=github-contributing) will be synchronized with this repository, though we strive to keep them as synchronized as possible

## Adding a resource

-   resources are organized alphabetically in separate files in the `resources` folder; use the resource `name` property to determine which file it belongs to
-   within the file, keep the alphabetical order, again based on the resource `name` property

### Resource format

Each resource belongs to an object, as such:

```javascript
// File: resources/f.js

{
    name: 'freeCodeCamp',
    description:
        'Learn to code at home. Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
    categories: [programming.learn, programming.codeChallenges],
    links: {
        [website]: 'https://www.freecodecamp.org',
        [youtube]: 'https://www.youtube.com/c/freecodecamp',
    },
    icon: 'https://www.freecodecamp.org/news/favicon.png', // Optional, but good for the README file
    keywords: ['html', 'css', 'javascript', 'development'], // Optional, but useful for the search feature on the website
},
```

Observe that:

-   `name`, `description` and `icon` are strings, where:
    -   `name` and `description` should not include line breaks `(\n)` nor the pipe symbol `(|)`
    -   `icon` should be a URL
-   `categories` is an array, meaning the resource can belong to multiple categories; its values (e.g. `programming.learn`) should be used from `constants/categories.js`, as this ensures organization and avoids misspellings
-   `links` is an object, where multiple platforms can be added; again, its key properties (e.g. `[youtube]`) should be used from `constants/links.js`
-   `keywords` is an array of strings, which also should not include line breaks `(\n)` nor the pipe symbol `(|)`
-   `icon` and `keywords` are the only optional properties, all others are required, with `categories` and `links` containing at least one value
-   the `description` property can be custom or grabbed from the resource's metadata included in the `<head>` tag of the website's HTML document
    -   you can use https://metatags.io to easily copy the description
-   the `icon` property can also be grabbed from the resource's metadata included in the `<head>` tag or by doing the following:
    -   you can use https://favicongrabber.com to easily copy the image's url; OBS: it often fails, so just try again until it works

## Editing a resource

If you find that an existing resource could benefit from some editing, feel free to make modifications.

## Choosing the category

Renaming a category or changing the tree structure should happen as infrequently as possible, although it is allowed if the current structure can be improved.

Opening a new category is fine, as long as there isn't another category that could serve the same purpose.

## External integrations

As of now, the "Public APIs" section is powered by the [Public APIs project](https://github.com/public-apis/public-apis), so any additions to this section should be done to their repository.

## Other contributions

Contributions not related to adding resources are also welcome, but please open an issue explaining the changes you have in mind before making a pull request.

## Code formatting and linting

This project relies on [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for code formatting and error/standards checking, so please ensure you have both installed globally or run `npm install` in order to install them in the project directory.

## Updating README and DB

This repository uses a GitHub action to automatically update `README.md` and `db` (which serves our API), so no action is required from you.

## Need assistance?

The resources lists are created in JavaScript, and if you're unable to make a contribution for this or any other reason, feel free to open an issue explaining your situation, so another developer can help you get your resource in the lists.

---

## Thank you for contributing
