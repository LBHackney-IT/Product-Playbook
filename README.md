# Product Playbook

This project is used to generate the [Product Playbook Documentation Site](https://lbhackney-it.github.io/Product-Playbook/).

You can edit the pages files directly in this project, which are formatted as .md files and once committed the changes will become visible on the site.

The Playbook contains articles on the processes involved in the making and using of products at Hackney.

## Developer Info

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```console
yarn install
```

If you don't have `yarn` installed, do so by running:

```console
npm install --global yarn
```

### Local Development

```console
yarn start
```

This command starts a local development server which you can view at [http://localhost:3000/Product-Playbook/](http://localhost:3000/Product-Playbook/). Most changes are reflected live without having to restart the server.

### Building static content

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploying changes

You should open a pull request with your suggested edits, and seek approval from another developer on your changes.

When changes are merged into the `main` branch, they will be automatically deployed to the [Data Platform Documentation Site](https://lbhackney-it.github.io/Product-Playbook/) via [GitHub actions](https://github.com/LBHackney-IT/Product-Playbook/actions).

To deploy manually you can run:

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
