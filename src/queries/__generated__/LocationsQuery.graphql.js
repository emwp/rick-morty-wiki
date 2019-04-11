/**
 * @flow
 * @relayHash 9892d63758a79c5b040dea14c5465122
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LocationsQueryVariables = {||};
export type LocationsQueryResponse = {|
  +locations: ?{|
    +results: ?$ReadOnlyArray<?{|
      +name: ?string,
      +type: ?string,
      +dimension: ?string,
    |}>
  |}
|};
export type LocationsQuery = {|
  variables: LocationsQueryVariables,
  response: LocationsQueryResponse,
|};
*/


/*
query LocationsQuery {
  locations {
    results {
      name
      type
      dimension
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "locations",
    "storageKey": null,
    "args": null,
    "concreteType": "Locations",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "results",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dimension",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsQuery",
    "id": null,
    "text": "query LocationsQuery {\n  locations {\n    results {\n      name\n      type\n      dimension\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd025db335c658b5e1688542c926b7f00';
module.exports = node;
