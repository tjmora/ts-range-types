/* This file just tests whether the code editor, if installed with a 
   Typescript linting plugin, will put red wiggle lines under the incorrectly-typed 
   declarations or not.
*/

import { PositiveIntRange } from "..";

const test1_min_over: PositiveIntRange<37,256> = 36;
const test1_min: PositiveIntRange<37,256> = 37;
const test1_mid: PositiveIntRange<37,256> = 153;
const test1_max: PositiveIntRange<37,256> = 255;
const test1_max_over: PositiveIntRange<37,256> = 256;