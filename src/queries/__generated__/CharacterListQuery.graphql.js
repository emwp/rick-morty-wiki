/**
 * @flow
 * @relayHash b416cf9c4b6f8f2996663e0522a55714
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Characters_query$ref = any;
export type CharacterListQueryVariables = {||};
export type CharacterListQueryResponse = {|
  +$fragmentRefs: Characters_query$ref
|};
export type CharacterListQuery = {|
  variables: CharacterListQueryVariables,
  response: CharacterListQueryResponse,
|};
*/


/*
query CharacterListQuery {
  ...Characters_query
}

fragment Characters_query on Query {
  characters(page: 1) {
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Characters_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": "characters(page:1)",
        "args": [
          {
            "kind": "Literal",
            "name": "page",
            "value": 1,
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
    "name": "CharacterListQuery",
    "id": null,
    "text": "query CharacterListQuery {\n  ...Characters_query\n}\n\nfragment Characters_query on Query {\n  characters(page: 1) {\n    results {\n      id\n      name\n      image\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '509d8ffc222232b710ad3c2e5594db9a';
module.exports = node;
