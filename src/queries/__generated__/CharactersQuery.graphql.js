/**
 * @flow
 * @relayHash a8923057397ac24a765b369199e3b555
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CharactersQueryVariables = {||};
export type CharactersQueryResponse = {|
  +characters: ?{|
    +results: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?string,
      +status: ?string,
      +species: ?string,
      +image: ?string,
    |}>
  |}
|};
export type CharactersQuery = {|
  variables: CharactersQueryVariables,
  response: CharactersQueryResponse,
|};
*/


/*
query CharactersQuery {
  characters {
    results {
      id
      name
      status
      species
      image
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "characters",
    "storageKey": null,
    "args": null,
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
            "name": "status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "species",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharactersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CharactersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CharactersQuery",
    "id": null,
    "text": "query CharactersQuery {\n  characters {\n    results {\n      id\n      name\n      status\n      species\n      image\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bd66e7b1bf95ac72df7479c898316ec';
module.exports = node;
