# React deployment

As a static site you can deploy a React app to GitHub Pages (GitHub hosts your site from your repo).

## Steps:

1. Install the package needed: `npm install gh-pages`
1. Add `"homepage": "https://{GitHub username}.github.io/{project name}/"` to your `package.json` file.
1. Add `"predeploy": "npm run build"` to your `package.json` in the `"scripts"` object.
1. Add `"deploy": "gh-pages -d build"` to your `package.json` in the `"scripts"` object.
1. Then, when ready to deploy up to GitHub Pages: `npm run deploy`
1. Wait. The first deployment will be fast, but future deployments can take up to 10 minutes.
1. Visit https://{github username}.github.io/{project name}/ to view your React app!