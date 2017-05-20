# ThreeJS-Creative-Starter

##Description :

ThreeJs Creative Boilerplate for project and experiment.
It comes with a `SceneManager` that allows you to control the display of your scene.
To run a scene just pass it to the sceneManager :

    sceneManager.setScene(**yourScene**)

And then start your sceneManager (only one time) :

    sceneManager.start()

To understand how the `SceneManager.js` and `Scene.js` works just go to see the doc. :notebook_with_decorative_cover:

##Requirements:
----------

> **Yarn**
> **Webpack 2**

##Running Dev Environement:


----------


***/ ! \ DO NOT place any assets in the build folder !  KEEP THEM in the /src folder. / ! \***

##Start :


----------
To start run :

    yarn install
    yarn start

Go to **localhost:3000*** on your browser.

**The dev port is configurable in the package.json*

##Build :


----------
To build your project simply run :

    yarn build

##Documentation :


----------
You can build a doc with [Esdoc](https://esdoc.org/). To do so just run Esdoc with:

    esdoc

Then go to `./doc` and open **index.html**
