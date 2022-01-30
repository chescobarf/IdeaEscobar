# Proyect Ecommerce to Course of CoderHouse

Live project: https://sneakerstime.netlify.app/

![image](https://user-images.githubusercontent.com/44533046/151685896-c632dacb-d957-4b54-9117-381d192ee867.png)

## Technologies used

For this project, we make use of React Hooks, Router-Dom ⚛️, Tailwind :ocean: and Firebase :fire:

For the deployment of the site, the integration of Netlify 🌐 with Github :cat: is used, for faster deployments for each commit in our master branch.

## Available scripts

In my case I like to work with separate terminals, so I recommend use in once terminal `npm start` and another `npm run build:css`

### `npm start` :rocket:

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build:css` 🎨

With this command it basically serves us for the functionality of **Tailwind**, be aware of the changes in the CSS

### `npm build` :white_check_mark:

Builds the app for production to the `build` folder.

It correctly bundles **React** in production mode and optimizes the build for the best performance.

In addition to this, it **uses PostCSS to minify the CSS** created by Tailwind.

The app is ready to be deployed! :star:

## Folder architecture

For this project, a folder model based on:

- Components
- Constants
- Layouts
- Routes
- Views
- Service

### Components

Components of the site, would be responsible for giving life to the site, since they are capable of reuse and have logic for their purpose

### Constants

Within this there are some constants, such as **Categories, container of the categories to be used in the navbar** and on the other hand **Checkout, container of the inputs that you will ask the customer when buying**

### Layouts

As indicated, they would be the layout components, **either base components of the layout** or components with a bit of logic but used as part of the layout of our entire store (Navbar, Banners, etc.)

### Routes

Router container, this would be **the map of our site**, with the routes of the site and the respective view to render

### Views

The views would be the most basic components since we only use them to contain more components and thus be able to have ours separated in a good way

### Service

Inside this folder we contain the configuration data of our Firebase, from here we make the connection to our service
