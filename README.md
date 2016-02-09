# nb-env
Nurimba enviroment for development of NodeJS


Environment with:

* [Docker](https://docs.docker.com/)
* [Debian](https://www.debian.org/releases/stable/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [Jest](https://facebook.github.io/jest/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)
* [Yeoman](http://yeoman.io/)


Docker install the linux environment:

```sh
$ curl -sSL https://get.docker.com/ | sh
```


Make tasks of environment

* Build docker image - ```$ make build-image```
* Create docker container - ```$ make build-container```
* Run docker container (only container already created) - ```$ make attach-container```


First steps after environment builded (inside the container)

```sh
nb@dev$ npm install
nb@dev$ gulp browsersync
```
