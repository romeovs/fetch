'use strict';
import co  from 'co';
import all from 'all';

// fetches all router things
export default function(state) {
  var promises =
    state.routes
      // only pass the routers that need to fetch data
      .filter(route => route.handler.fetchData)
      // create a map containing the fetchData promises
      // keyed by route name.
      // It uses co to coerce generators, etc to promises
      .reduce(function(promises, route) {
        promises[route.name] = co(route.handler.fetchData(state.params, state.query));
        return promises;
      }, {});

  // create a promise that resolves when all
  // individual promises resolve
  return all(promises);
};
