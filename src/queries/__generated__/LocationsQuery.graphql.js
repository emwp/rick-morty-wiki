/**
 * @flow
 * @relayHash 6e57c340b0cbba4fb5d97ff1105fe07a
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
  locations(page: 1) {
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
    "storageKey": "locations(page:1)",
    "args": [
      {
        "kind": "Literal",
        "name": "page",
        "value": 1,
        "type": "Int"
      }
    ],
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
    "text": "query LocationsQuery {\n  locations(page: 1) {\n    results {\n      name\n      type\n      dimension\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc3a1212d3677467c4433ba1d0b6d8d0';
module.exports = node;
