/**
 * @flow
 * @relayHash f444c6748495535a0e2caa2fdd73b3c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Locations_query$ref = any;
export type LocationsRefetchQueryVariables = {|
  page?: ?number
|};
export type LocationsRefetchQueryResponse = {|
  +$fragmentRefs: Locations_query$ref
|};
export type LocationsRefetchQuery = {|
  variables: LocationsRefetchQueryVariables,
  response: LocationsRefetchQueryResponse,
|};
*/


/*
query LocationsRefetchQuery(
  $page: Int
) {
  ...Locations_query_2Pg8Wv
}

fragment Locations_query_2Pg8Wv on Query {
  locations(page: $page) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Locations_query",
        "args": [
          {
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
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
    "name": "LocationsRefetchQuery",
    "id": null,
    "text": "query LocationsRefetchQuery(\n  $page: Int\n) {\n  ...Locations_query_2Pg8Wv\n}\n\nfragment Locations_query_2Pg8Wv on Query {\n  locations(page: $page) {\n    results {\n      name\n      type\n      dimension\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '83e825ffe389baebcc63619e39e6f63a';
module.exports = node;
