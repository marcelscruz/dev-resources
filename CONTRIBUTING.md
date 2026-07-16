# Contributing

---

> ❗️ Only resources **highly or exclusively** related to programming and development are accepted.

> ❗️ The `README.md` file and the `/db` folder are auto-generated, so please **do not** edit them.
> Changes related to resources should happen within the `/resources` folder.

---

Everyone is welcome to collaborate to this project, but please take into consideration the following:

-   resources should align with the purpose of the project
-   resources shouldn't be a duplicate; a text search on the README file should be enough to find this answer
-   the list of resources is written in TypeScript; if you need assistance on this matter, please open an issue with the resource's information
-   make sure to check all items listed on the [pull request template](PULL_REQUEST_TEMPLATE.md) before submitting your contribution

## What we accept

Before submitting, make sure your resource meets all of the following criteria:

-   **For developers** — the resource must be something developers would use to build software. Free or paid, both are fine. Products aimed at a non-developer audience are not accepted, however well made they are
-   **Main product only** — the resource must be the main product itself; internal tools or features of a larger product are not accepted
-   **Custom domain required** — projects hosted on shared subdomains (`vercel.app`, `netlify.app`, `herokuapp.com`, `github.io`, `pages.dev` and similar) are not accepted
-   **Clean URLs** — the URL must not contain query parameters (anything after `?`); link to the plain page instead
-   **Available now** — no waitlists, betas behind closed signups, or "coming soon" products
-   **Quality bar** — low-effort projects are not accepted

Having an API does **not** disqualify a resource — most developer tools have one. If your product also exposes a public API that others can connect to, it belongs in [public-apis](https://github.com/marcelscruz/public-apis) **as well**; the two directories overlap on purpose, and a listing in one is not a duplicate of the other.

Submissions are reviewed by an automated reviewer first — a bot account may comment on, approve, or close your pull request — and by the maintainer for the final merge.

## Adding a resource

-   resources are organized alphabetically in separate files in the `resources` folder; use the resource `name` property to determine which file it belongs to
-   within the file, keep the alphabetical order, again based on the resource `name` property

### Resource format

Each resource belongs to an object, as such:

```typescript
// resources/f.ts

{
    name: 'freeCodeCamp',
    description:
        'Learn to code at home. Build projects. Earn certifications. Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
    categories: ['Learn', 'Programming'],
    url: 'https://www.freecodecamp.org',
    keywords: ['html', 'css', 'javascript', 'development'], // Optional, but used on the search feature on the website
},
```

Observe that:

-   `name` is a **string** and **required**.
-   `description` is a **string** and **required**.
    -   You can use https://metatags.io to easily copy the description from the website.
    -   Keep it under 160 characters so it fits the listing card. Longer descriptions are automatically shortened by our reviewer, kept as close to the original as possible while retaining the most important information.
-   `categories` is an **array of strings** and **required**.
    -   A resource can belong to 3 categories maximum (use `keywords` to improve discoverability on search results).
    -   The available categories are listed in `types/category.ts`.
    -   If the category you need isn't listed, you can add it and explain in the PR why it's needed.
    -   If your editor has TypeScript support it should provide you with the available categories as you type.
-   `url` is a **string** and required.

    -   Must start with `http://` or `https://`.

-   `keywords` is an **array of strings** and **optional**, used on the search feature on the website.

## Editing a resource

If you find that an existing resource could benefit from some editing, feel free to make modifications.

## Other contributions

Contributions not related to the resources are also welcome, but please open an issue explaining the changes you have in mind before making a pull request.

## Code formatting and linting

This project relies on [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for code formatting and error/standards checking, so please ensure you have both installed globally or run `npm install` in order to install them in the project directory.

> Tip: You can format your contribution with the command `npm run prettier:format` 

## Updating README and DB

This repository uses a GitHub action to automatically update `README.md` and `db` (which serves our API), so no action is required from you.

## Need assistance?

The resources lists are created in TypeScript, and if you're unable to make a contribution for this or any other reason, feel free to open an issue explaining your situation, so another developer can help you get your resource in the lists.

---

## Thank you for contributing
