Express & ES6 REST API for Dungeons and Dragons lovers
==================================

This API serves up a curated list of RPG and adventure style music from youtube for different environments and scenes. This API is currently being consumed by [DnDMusicAndroid](https://github.com/nikrich/DnDMusicAndroid) which is currently in development.

[![alt tag](https://api.travis-ci.org/nikrich/DnDMusicApi.png)](https://travis-ci.org/nikrich/DnDMusicApi) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nikrich/DnDMusicApi?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![devDependency Status](https://david-dm.org/nikrich/DnDMusicApi.svg)](https://david-dm.org/nikrich/DnDMusicApi)
[![Code Climate](https://codeclimate.com/github/nikrich/DnDMusicApi/badges/gpa.svg)](https://codeclimate.com/github/nikrich/DnDMusicApi)

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

Contributing
------------
To contribute to the curated list of music for the api:

- Fork the dev branch
- Add the id of the youtube video in the correct format to the server/models/music.js file
- Make sure that the cat_id of the song matches the correct category in the server/models/categories.js file
- If you want to add more categories, feel free to do so in the above mentioned file
- Once done, create a pull request
- NB! Do not fork the master branch

Running it locally 
---------------

```sh
# clone it
git clone https://github.com/nikrich/DnDMusicApi.git
cd DnDMusicApi

# Make it your own
rm -rf .git && git init && npm init

# Run it
PORT=8080 npm start

```

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jannik Richter

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
