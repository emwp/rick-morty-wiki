/**
 * @flow
 * @relayHash e18b02d2e9adcca9a4ab40d65c906376
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Locations_query$ref = any;
export type LocationListQueryVariables = {||};
export type LocationListQueryResponse = {|
  +$fragmentRefs: Locations_query$ref
|};
export type LocationListQuery = {|
  variables: LocationListQueryVariables,
  response: LocationListQueryResponse,
|};
*/


/*
query LocationListQuery {
  ...Locations_query
}

fragment Locations_query on Query {
  locations(page: 1) {
    results {
      name
      type
      dimension
    }
    info {
      next
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Locations_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationListQuery",
    "argumentDefinitions": [],
    "selections": [
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "info",
            "storageKey": null,
            "args": null,
            "concreteType": "Info",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "next",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationListQuery",
    "id": null,
    "text": "query LocationListQuery {\n  ...Locations_query\n}\n\nfragment Locations_query on Query {\n  locations(page: 1) {\n    results {\n      name\n      type\n      dimension\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '45f8b9ca8ce090a1384a678a3a6ff95a';
module.exports = node;
