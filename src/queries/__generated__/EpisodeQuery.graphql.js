/**
 * @flow
 * @relayHash 6bacac9ffbb0c8d199d44c57bcbe8daa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EpisodeQueryVariables = {|
  epID: string
|};
export type EpisodeQueryResponse = {|
  +episode: ?{|
    +name: ?string,
    +air_date: ?string,
    +episode: ?string,
    +characters: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}
|};
export type EpisodeQuery = {|
  variables: EpisodeQueryVariables,
  response: EpisodeQueryResponse,
|};
*/


/*
query EpisodeQuery(
  $epID: ID!
) {
  episode(id: $epID) {
    name
    air_date
    episode
    characters {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "epID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "epID",
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
  "name": "air_date",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "episode",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EpisodeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "characters",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EpisodeQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "characters",
            "storageKey": null,
            "args": null,
            "concreteType": "Character",
            "plural": true,
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EpisodeQuery",
    "id": null,
    "text": "query EpisodeQuery(\n  $epID: ID!\n) {\n  episode(id: $epID) {\n    name\n    air_date\n    episode\n    characters {\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd6d08e69b94bed3ef510c8d85b4cb5d';
module.exports = node;
