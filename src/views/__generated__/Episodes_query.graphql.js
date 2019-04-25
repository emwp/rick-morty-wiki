/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episodes_query$ref: FragmentReference;
export type Episodes_query = {|
  +episodes: ?{|
    +results: ?$ReadOnlyArray<?{|
      +name: ?string,
      +episode: ?string,
      +air_date: ?string,
    |}>,
    +info: ?{|
      +next: ?number
    |},
  |},
  +$refType: Episodes_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Episodes_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "page",
      "type": "Int",
      "defaultValue": 1
    }
  ],
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
};
// prettier-ignore
(node/*: any*/).hash = 'f3b6eed890c5e5941e023398d9cdea60';
module.exports = node;
