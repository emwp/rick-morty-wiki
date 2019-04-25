/**
 * @flow
 * @relayHash 08a78e579f88fabc1d10f02fe1bc1aaf
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
    +name: ?string,
    +status: ?string,
    +species: ?string,
    +gender: ?string,
    +origin: ?{|
      +name: ?string
    |},
    +location: ?{|
      +name: ?string
    |},
    +image: ?string,
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
    status
    species
    gender
    origin {
      name
    }
    location {
      name
    }
    image
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "species",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gender",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/)
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "origin",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": (v6/*: any*/)
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": (v6/*: any*/)
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
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
    "text": "query CharacterQuery(\n  $charID: ID!\n) {\n  character(id: $charID) {\n    name\n    status\n    species\n    gender\n    origin {\n      name\n    }\n    location {\n      name\n    }\n    image\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '160734096e54052199a179940886e4ee';
module.exports = node;
