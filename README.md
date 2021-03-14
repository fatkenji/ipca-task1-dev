# IPCA Price Portal Web App
A web app portal for branch stores to view and update product prices.

![subs-tab](/readme/subs-tab.png)

---
## Demo
Here is a live demo :  [demo-link]

---
## Features
 - Ability to select current store
 - There are two product categories - Subs and Non-subs
 - View each categories as tabs
 - Defaults to Subs category tab after selecting a store
 - Update product prices
 - Reset price change
 - Submit price change (not implemented yet)
 - Display message when there are no products found

---
## Usage
1. From landing page, select a store
2. After selecting a store it should show the products under currently selected category tab
3. View or update product prices from editable input boxes
4. press `Submit` button to save changes
5. press `Reset` button to revert changes


---
## Bug
- None so far

---
## TODO
- Implement functionality for `Submit` button
- New API endpoint that will accept data for price changes from stores

---
## Tech Stack Used
- Javascript and CSS3
- [Svelte.dev v3](https://svelte.dev)
- [Nodejs](https://nodejs.org)
- [VSCode editor](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

---
## Dev Setup
1. Using `GitHub Desktop` app, clone from https://github.com/fatkenji/ipca-task1-dev.git
2. Inside the app directory run NPM to install dependencies
```
npm install
```
3. To run locally
```
npm run dev
```

---
## Deployment
1. Inside the app directory run
```
npm run build
```
2. It will compile and update the `public` folder with your recent changes
3. Go inside `public` folder
4. select all files and upload to https://github.com/fatkenji/ipca-task1-app
5. May take some time to propagate and see changes
6. open web browser and go to [demo-link]

[demo-link]:https://fatkenji.github.io/ipca-task1-app
