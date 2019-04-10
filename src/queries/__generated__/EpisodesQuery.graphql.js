/**
 * @flow
 * @relayHash 7906bae826fab3df51105d7cbc2927cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EpisodesQueryVariables = {||};
export type EpisodesQueryResponse = {|
  +episodes: ?{|
    +results: ?$ReadOnlyArray<?{|
      +name: ?string,
      +air_date: ?string,
      +episode: ?string,
    |}>
  |}
|};
export type EpisodesQuery = {|
  variables: EpisodesQueryVariables,
  response: EpisodesQueryResponse,
|};
*/


/*
query EpisodesQuery {
  episodes(page: 1) {
    results {
      name
      air_date
      episode
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "episodes",
    "storageKey": "episodes(page:1)",
    "args": [
      {
        "kind": "Literal",
        "name": "page",
        "value": 1,
        "type": "Int"
      }
    ],
    "concreteType": "Episodes",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "results",
        "storageKey": null,
        "args": null,
        "concreteType": "Episode",
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
            "name": "air_date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "episode",
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
    "name": "EpisodesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EpisodesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "EpisodesQuery",
    "id": null,
    "text": "query EpisodesQuery {\n  episodes(page: 1) {\n    results {\n      name\n      air_date\n      episode\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '182e6034ac6b2fdf747ed50735836dfb';
module.exports = node;
