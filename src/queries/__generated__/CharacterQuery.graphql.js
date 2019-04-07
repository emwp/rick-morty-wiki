/**
 * @flow
 * @relayHash 0221c49ef87dccae0675188f75cf1988
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CharacterQueryVariables = {||};
export type CharacterQueryResponse = {|
  +character: ?{|
    +name: ?string
  |}
|};
export type CharacterQuery = {|
  variables: CharacterQueryVariables,
  response: CharacterQueryResponse,
|};
*/


/*
query CharacterQuery {
  character(id: 5) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 5,
    "type": "ID"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CharacterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "character",
        "storageKey": "character(id:5)",
        "args": (v0/*: any*/),
        "concreteType": "Character",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "character",
        "storageKey": "character(id:5)",
        "args": (v0/*: any*/),
        "concreteType": "Character",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterQuery",
    "id": null,
    "text": "query CharacterQuery {\n  character(id: 5) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9175a7f907f06cdda9252b8efa68af87';
module.exports = node;
