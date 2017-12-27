release                      | branch                  | version | updated at
-----------------------------|-------------------------|---------|-------------
**Seed Project**             | master                  | 0.0.2   | 26/12/2017

Adapted from _FountainJS_ scaffold ([visit page](fountainsjs.io)).

## Technologies

* NodeJs
* Webpack
* Babel
* Gulp
* AngularJs

## Installing

Clone this respository into your computer.

Access the ``/seed-project-angularjs`` cloned folder.

Install the dependencies:
```
npm install
```

## Running

Available commands:

* ``gulp`` or ``gulp build`` for optimized production-ready application in ``/dist`` folder.
* ``gulp serve`` to serve the application in ``localhost``.
* ``gulp serve:dist`` to serve the optimized application in ``localhost``.
* ``gulp test`` for unit tests with _Karma_.
* ``gulp test:auto`` for unit tests with _Karma_ in `watch` mode.

## Author

* **Rafael Goulart**
	* Email: [faelplg@gmail.com](mailto:faelplg@gmail.com)
	* LinkedIn: https://linkedin.com/in/faelplg

## CHANGELOG

* **(26/12)** - Removed deprecated ``webpack-fail-plugin``
* **(27/12)** - Removed deprecated ``gulp-util`` and added ``fancy-log`` + ``ansi-colors``
