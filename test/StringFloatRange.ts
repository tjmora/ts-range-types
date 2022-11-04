/* This file just tests whether the code editor, if installed with a 
   Typescript linting plugin, will put red wiggle lines under the incorrectly-typed 
   declarations or not.
*/

import { StringFloatRange } from "..";

const test1_min_over: StringFloatRange<13, 24, 1> = "12.9";
const test1_min: StringFloatRange<13, 24, 1> = "13.0";
const test1_mid: StringFloatRange<13, 24, 1> = "18.0";
const test1_max: StringFloatRange<13, 24, 1> = "24.0";
const test1_max_over: StringFloatRange<13, 24, 1> = "24.1";

const test2_min_over: StringFloatRange<[7], 15, 2> = "-7.01";
const test2_min: StringFloatRange<[7], 15, 2> = "-7.00";
const test2_mid: StringFloatRange<[7], 15, 2> = "0.00";
const test2_mid_fewer_places: StringFloatRange<[7], 15, 2> = "6.0";
const test2_max: StringFloatRange<[7], 15, 2> = "15.00";
const test2_max_over: StringFloatRange<[7], 15, 2> = "15.01";

const test3_min_over: StringFloatRange<[4], [2], 3> = "-4.001";
const test3_min: StringFloatRange<[4], [2], 3> = "-4.000";
const test3_mid: StringFloatRange<[4], [2], 3> = "-3.000";
const test3_mid_fewer_places: StringFloatRange<[4], [2], 3> = "-3.2";
const test3_max: StringFloatRange<[4], [2], 3> = "-2.000";
const test3_max_over: StringFloatRange<[4], [2], 3> = "-1.999";