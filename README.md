# fetch
[![Dependencies](https://img.shields.io/david/romeovs/fetch.svg?style=flat-square)][david]
[![devDependencies](https://img.shields.io/david/dev/romeovs/fetch.svg?style=flat-square)][david-dev]
[![license](https://img.shields.io/badge/license-ISC-373737.svg?style=flat-square)][license]
[![gitter](https://img.shields.io/badge/GITTER-join%20chat%20→-00d86e.svg?style=flat-square)][gitter]

*Deprecated: The `react-router` v1.x makes this obsolete, I will not maintain
this anymore.*

Fetches all data necessary for the currently active route handlers.

## Usage
When using `react-router`, it is often necessary to fetch some data
before rendering the app at a specific path.  `fetch` takes care
of exactly this.

You can use it inside of `Router.run` to fetch the data before doing the
actual rendering:

```js
import React  from 'react'
import Router from 'react-router'
import fetch  from 'fetch'

import routes from './routes'

Router.run(routes, Router.HistoryLocation, async function(Handler, state) {
  var data = await fetch(state); // wait for the fetched data
  React.render(<Handler data={data} />, document.getElementById('app'));
});
```

`fetch` goes trough all the currently activated routes and checks to
see if their handler has got a `fetchData` function set.

For instance:

```js
var Thing = React.createElement({
  statics: {
    async fetchData(params, query) {
      return api.getThing(params.id);
    }
  }

  // rest of component
});
```

## Installation
To install `fetch`:

```sh
npm i --save romeovs/fetch
```

The module is written in ES6-compliant syntax that needs to
be transpiled, you need to have [`babel`](https://babeljs.io) installed
on your system before installing it.  If you don't have it, the above command
will fail.  To fix this, do:

```sh
npm install --global babel
```

## Todo
  - write tests
  - add session/authentication support?

### License
This code is licensed under the [ISC license][license]

[david]:     https://david-dm.org/romeovs/fetch#info=dependencies
[david-dev]: https://david-dm.org/romeovs/fetch#info=devDependencies
[gitter]:    https://gitter.im/romeovs/fetch?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[license]:   ./LICENSE
