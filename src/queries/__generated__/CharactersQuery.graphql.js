/**
 * @flow
 * @relayHash da4469ff988af01b0c68c40c4010a677
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
  characters(page: 1) {
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
    "text": "query CharactersQuery {\n  characters(page: 1) {\n    results {\n      id\n      name\n      status\n      species\n      image\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee5f007eb7491954c192bd5519b157dc';
module.exports = node;
