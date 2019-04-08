/**
 * @flow
 * @relayHash 62e272d6dd2b34229efe7234daeecc1e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CharacterQueryVariables = {|
  charID: string
|};
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
query CharacterQuery(
  $charID: ID!
) {
  character(id: $charID) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "charID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "charID",
    "type": "ID"
  }
],
v2 = {
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "character",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Character",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CharacterQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "character",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Character",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "text": "query CharacterQuery(\n  $charID: ID!\n) {\n  character(id: $charID) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af8ae5c4f05b3a3a78e855646cc57c88';
module.exports = node;
