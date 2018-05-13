release                      | branch                  | version | updated at
-----------------------------|-------------------------|---------|-------------
**Seed Project**             | master                  | 0.1.0   | 13/05/2018

Seed project written in AngularJS ^1.6 and ES6 to create large projects with a production build system.

# Important
This project is on its conception. Soon it will be part of another bigger one. Stay tuned.

## Technologies

* [Node.js](https://nodejs.org/)
* [ES6]()
* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Gulp](https://gulpjs.com/)
* [AngularJS](https://angularjs.org/)
* [LESS (CSS Grid + Flexible Box Layout)](lesscss.org/)

Scaffold by ([FountainJS](http://fountainjs.io)).

## Installing

Clone this respository into your computer.

Access the ``/seed-project-angularjs`` cloned folder.

Install the dependencies:
```
npm install
```

## Running

Available commands:

* ``gulp`` or ``gulp build`` to build an optimized production-ready application placed in ``/dist`` folder.
* ``gulp serve`` to launch a browser sync server in ``localhost``.
* ``gulp serve:dist`` to launch a server on the optimized application in ``localhost``.

## Author

* **Rafael Goulart**
	* LinkedIn: https://linkedin.com/in/faelplg

## Changelog

* **(13/05/2018)** - [v.0.1.0] Updated README.md.
* **(03/01/2018)** - [v.0.1.0] Base structure complete.
* **(03/01/2018)** - [v.0.0.4] Added CSS Grid + Flexible Box Layout.
* **(02/01/2018)** - [v.0.0.3] Added typography component.
* **(02/01/2018)** - [v.0.0.3] Created components and containers packages.
* **(27/12/2017)** - [v.0.0.2] Replaced ``babel-preset-es2015`` by ``babel-preset-env``
* **(27/12/2017)** - [v.0.0.1] Replaced deprecated ``gulp-util`` (still running on ``gulp-hub`` dependencies) by ``fancy-log`` + ``ansi-colors``
* **(26/12/2017)** - [v.0.0.1] Removed deprecated ``webpack-fail-plugin``






## What to do next
* Create tests with Karma.js.
* Create module folder for API services.
* Resolve API results in routes states.
* Menu links to states.
