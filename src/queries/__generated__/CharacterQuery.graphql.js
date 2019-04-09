/**
 * @flow
 * @relayHash 8789affcc95b3635ae1b21db5b86892d
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
    +id: ?string,
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
    id
    name
    status
    species
    gender
    origin {
      name
      id
    }
    location {
      name
      id
    }
    image
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "species",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gender",
  "args": null,
  "storageKey": null
},
v7 = [
  (v3/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
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
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "origin",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "location",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": (v7/*: any*/)
          },
          (v8/*: any*/)
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
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "origin",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": (v9/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "location",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": (v9/*: any*/)
          },
          (v8/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CharacterQuery",
    "id": null,
    "text": "query CharacterQuery(\n  $charID: ID!\n) {\n  character(id: $charID) {\n    id\n    name\n    status\n    species\n    gender\n    origin {\n      name\n      id\n    }\n    location {\n      name\n      id\n    }\n    image\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0bb672455ff0c14e4e47d7cd9cbb30f';
module.exports = node;
