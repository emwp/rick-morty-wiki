/**
 * @flow
 * @relayHash 39fab53648851efbd3bfb484a7dd6cd5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Characters_query$ref = any;
export type CharactersRefetchQueryVariables = {|
  page?: ?number
|};
export type CharactersRefetchQueryResponse = {|
  +$fragmentRefs: Characters_query$ref
|};
export type CharactersRefetchQuery = {|
  variables: CharactersRefetchQueryVariables,
  response: CharactersRefetchQueryResponse,
|};
*/


/*
query CharactersRefetchQuery(
  $page: Int
) {
  ...Characters_query_2Pg8Wv
}

fragment Characters_query_2Pg8Wv on Query {
  characters(page: $page) {
    results {
      id
      name
      image
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
    "name": "CharactersRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Characters_query",
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
    "name": "CharactersRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
            "type": "Int"
          }
        ],
        "concreteType": "Characters",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
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
                "name": "image",
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
    "name": "CharactersRefetchQuery",
    "id": null,
    "text": "query CharactersRefetchQuery(\n  $page: Int\n) {\n  ...Characters_query_2Pg8Wv\n}\n\nfragment Characters_query_2Pg8Wv on Query {\n  characters(page: $page) {\n    results {\n      id\n      name\n      image\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8885d320114af4a350c6b44df3c962e';
module.exports = node;
