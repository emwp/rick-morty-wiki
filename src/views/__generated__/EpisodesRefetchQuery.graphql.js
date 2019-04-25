/**
 * @flow
 * @relayHash 5163dc4ad258a2402333d48012c9b967
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Episodes_query$ref = any;
export type EpisodesRefetchQueryVariables = {|
  page?: ?number
|};
export type EpisodesRefetchQueryResponse = {|
  +$fragmentRefs: Episodes_query$ref
|};
export type EpisodesRefetchQuery = {|
  variables: EpisodesRefetchQueryVariables,
  response: EpisodesRefetchQueryResponse,
|};
*/


/*
query EpisodesRefetchQuery(
  $page: Int
) {
  ...Episodes_query_2Pg8Wv
}

fragment Episodes_query_2Pg8Wv on Query {
  episodes(page: $page) {
    results {
      name
      episode
      air_date
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
    "name": "EpisodesRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Episodes_query",
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
    "name": "EpisodesRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episodes",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "page",
            "variableName": "page",
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
                "name": "episode",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "air_date",
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
    "name": "EpisodesRefetchQuery",
    "id": null,
    "text": "query EpisodesRefetchQuery(\n  $page: Int\n) {\n  ...Episodes_query_2Pg8Wv\n}\n\nfragment Episodes_query_2Pg8Wv on Query {\n  episodes(page: $page) {\n    results {\n      name\n      episode\n      air_date\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01ca9343e13d6f1b2253dfd87406d664';
module.exports = node;
