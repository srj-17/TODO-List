# Template repository for webpack
- dist/ is not included and not `.gitignore`'d, but if you see the package.json file, there will be a script for deploying the project for github pages. So, don't push without compiling / bundling / building once. 
	- Did this because it's not recommended to have dist/ as developers can compile whenever they want with the package.json file.
- Loaders are only used for `.html`, `.css` and `image` files, so add new loaders as needed by reading the documentation.
- Entry point of the project for webpack is `index.js`, so you NEED that file.
- There are 4 npm scripts;
	- `test` --> not implemented yet (for testing)
	- `build` --> for building your project to the dist
	- `dev` --> for starting development mode with `webpack serve`
	- `deploy` -- > for pushing to github pages
- Run them using `npm run x` where x = script-name
---
- You can modify this repository when you have something more to use than discussed in the webpack and webpack-revisited chapters.

## Once cloned, do the following:
- `npm init`
- build once immediately
- Clean this file to include documentation of your project 

