# Day 4: Afternoon

**Create a fresh repo to demonstrate**
- `bootcamp--react-deployment`
- GitHub pages: free hosting of static sites, taking the js and css that is built as a result of the script we will run later and displaying it
- NPM package: `gh-pages`
- set origin to the new repo: `git remote add origin https://github.com/develop-me/bootcamp--react-deployment.git`

## Setup [10 mins]

- `npm install gh-pages`
- In `package.json`:
    - `"homepage": "https://develop-me.github.io/bootcamp--react-deployment/",`
    - Add to `scripts` property:
       ```json
       "scripts": {
           "predeploy": "npm run build",
           "deploy": "gh-pages -d build"
        }
       ```

## Deploying

- `npm run predeploy`
	- Make sure before you run predeploy, your most recent code is committed and pushed as that's where the deploy and build looks for the code to generate
- `npm run deploy`
- go to environments tab or directly check status: `https://github.com/develop-me/bootcamp--react-deployment/deployments`
- Go to site: `https://develop-me.github.io/bootcamp--react-deployment/`
- Nav to a route and as you can we get a 404: look in console to confirm - why? any ideas?

### `<HashRouter>`
- Remember how we said BrowserRouter needs to be backed by server?
- We don't have that relationship here, the URL is for git not for our react app so we need to create purely client side routing; change the url in a way which will be ignored by the server
- Update `BrowserRouter` to `HashRouter` in `App` imports
- Demonstrate hash URLs with a `<Link>`
