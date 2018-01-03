release                      | branch                  | version | updated at
-----------------------------|-------------------------|---------|-------------
**Seed Project**             | master                  | 0.0.3   | 02/01/2018

Production-ready seed project written in AngularJS easy to understand and to install.

Regularly updated.

## Technologies

* Node.js
* webpack
* Babel
* Gulp
* AngularJS
* LESS

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
* ``gulp test`` to launch the unit tests with _Karma_.
* ``gulp test:auto`` to launch the unit tests with _Karma_ in `watch` mode.

## Author

* **Rafael Goulart**
	* LinkedIn: https://linkedin.com/in/faelplg

## Changelog

* **(26/12/2017)** - [v.0.0.1] Removed deprecated ``webpack-fail-plugin``
* **(27/12/2017)** - [v.0.0.1] Replaced deprecated ``gulp-util`` (still running on ``gulp-hub`` dependencies) by ``fancy-log`` + ``ansi-colors``
* **(27/12/2017)** - [v.0.0.2] Replaced ``babel-preset-es2015`` by ``babel-preset-env``
* **(02/01/2018)** - [v.0.0.3] Created components and containers packages.
* **(02/01/2018)** - [v.0.0.3] Added typography component.
