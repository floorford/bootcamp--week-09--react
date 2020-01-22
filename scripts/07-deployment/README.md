# Day 4: Afternoon

**Create a fresh repo to demonstrate**

- GitHub pages: free hosting of static sites
- NPM package: `gh-pages`

## Setup

- `npm install gh-pages`
- In `package.json`:
    - `"homepage": "https://username.github.io/repo",`
    - Add to `scripts` property:
       ```json
       "scripts": {
           "predeploy": "npm run build",
           "deploy": "gh-pages -d build"
        }
       ```

## Deploying

- `npm run deploy`
- Check status: `https://github.com/username/repo/deployments`
- Go to site: `https://username.github.io/repo/`
