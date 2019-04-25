/**
 * @flow
 * @relayHash b31e078f4d07375cc9951c38a66921ca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Episodes_query$ref = any;
export type EpisodeListQueryVariables = {||};
export type EpisodeListQueryResponse = {|
  +$fragmentRefs: Episodes_query$ref
|};
export type EpisodeListQuery = {|
  variables: EpisodeListQueryVariables,
  response: EpisodeListQueryResponse,
|};
*/


/*
query EpisodeListQuery {
  ...Episodes_query
}

fragment Episodes_query on Query {
  episodes(page: 1) {
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EpisodeListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Episodes_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EpisodeListQuery",
    "argumentDefinitions": [],
    "selections": [
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
    "name": "EpisodeListQuery",
    "id": null,
    "text": "query EpisodeListQuery {\n  ...Episodes_query\n}\n\nfragment Episodes_query on Query {\n  episodes(page: 1) {\n    results {\n      name\n      episode\n      air_date\n    }\n    info {\n      next\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '747ffbe0ccccbddfa47fa48b63eb828f';
module.exports = node;
