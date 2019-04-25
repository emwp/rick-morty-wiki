/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Locations_query$ref: FragmentReference;
export type Locations_query = {|
  +locations: ?{|
    +results: ?$ReadOnlyArray<?{|
      +name: ?string,
      +type: ?string,
      +dimension: ?string,
    |}>,
    +info: ?{|
      +next: ?number
    |},
  |},
  +$refType: Locations_query$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Locations_query",
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
      "name": "locations",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page",
          "type": "Int"
        }
      ],
      "concreteType": "Locations",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "results",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
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
              "name": "type",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "dimension",
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
(node/*: any*/).hash = '5c0d5502861c1bfd6a5da21213d21ea0';
module.exports = node;
