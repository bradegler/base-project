# Sample Project for Web Development
Mainly just playing with different libraries
## Components
* [Gulp](https://github.com/gulpjs/gulp)
* [Browserify](http://browserify.org/)
* [Node.js](http://nodejs.org/)
* [React](http://facebook.github.io/react/)
* [Backbone](http://backbonejs.org/)
* [Director](https://github.com/flatiron/director)
* [SASS](http://sass-lang.com/)
* [Bourbon](http://bourbon.io/)
* [MongoDB](http://www.mongodb.org/)
* [Mongoose](http://mongoosejs.com/)

## Notes
If you run out of allowable file watches with an error like below

    [gulp] Errored 'default' in 12 ms watch ENOSPC

    ./node_modules/gulp/node_modules/orchestrator/index.js:153
            throw err;
                  ^
    Error: watch ENOSPC
        at errnoException (fs.js:1019:11)
        at FSWatcher.start (fs.js:1051:11)
        at Object.fs.watch (fs.js:1076:11)

You can fix this by increasing the max user watches like below

    sudo sysctl -w fs.inotify.max_user_watches=524288
    sudo sysctl -p

