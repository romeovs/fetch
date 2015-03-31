# fetch-all
Fetches all data necessary for the currently active route handlers.

## Usage
When using `react-router`, it is often necessary to fetch some data
before rendering the app at a specific path.  `fetch-all` takes care
of exactly this.

You can use it inside of `Router.run` to fetch the data before doing the
actual rendering:

```js
import React  from 'react';
import Router from 'react-router'
import fetch  from 'fetch-all'

import routes from './routes'

Router.run(routes, Router.HistoryLocation, async function(Handler, state) {
  var data = await fetch(state); // wait for the fetched data
  React.render(<Handler data={data} />, document.getElementById('app'));
});
```

`fetch-all` goes trough all the currently activated routes and checks to
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
To install `fetch-all`:

```sh
npm i --save romeovs/fetch-all
```
