/* This file just tests whether the code editor, if installed with a 
   Typescript linting plugin, will put red wiggle lines under the incorrectly-typed 
   declarations or not.
*/

import { StringIntRange } from "..";

const test1_min_over: StringIntRange<126,421> = "125";
const test1_min: StringIntRange<126,421> = "126";
const test1_mid: StringIntRange<126,421> = "254";
const test1_max: StringIntRange<126,421> = "421";
const test1_max_over: StringIntRange<126,421> = "422";

const test2_min_over: StringIntRange<[105],243> = "-106";
const test2_min: StringIntRange<[105],243> = "-105";
const test2_mid: StringIntRange<[105],243> = "0";
const test2_max: StringIntRange<[105],243> = "243";
const test2_max_over: StringIntRange<[105],243> = "244";

const test3_min_over: StringIntRange<[357], [164]> = "-358";
const test3_min: StringIntRange<[357], [164]> = "-357";
const test3_mid: StringIntRange<[357], [164]> = "-243";
const test3_max: StringIntRange<[357], [164]> = "-164";
const test3_max_over: StringIntRange<[357], [164]> = "-163";

const test4_min_over: StringIntRange<126,421, 1> = "1259";
const test4_min: StringIntRange<126,421, 1> = "1260";
const test4_mid: StringIntRange<126,421, 1> = "2544";
const test4_max: StringIntRange<126,421, 1> = "4210";
const test4_max_over: StringIntRange<126,421, 1> = "4211";

const test5_min_over: StringIntRange<[11],24, 2> = "-1101";
const test5_min: StringIntRange<[11],24, 2> = "-1100";
const test5_mid: StringIntRange<[11],24, 2> = "0";
const test5_max: StringIntRange<[11],24, 2> = "2400";
const test5_max_over: StringIntRange<[11],24, 2> = "2401";

const test6_min_over: StringIntRange<[17], [6], 3> = "-17001";
const test6_min: StringIntRange<[17], [6], 3> = "-17000";
const test6_mid: StringIntRange<[17], [6], 3> = "-11342";
const test6_max: StringIntRange<[17], [6], 3> = "-6000";
const test6_max_over: StringIntRange<[17], [6], 3> = "-5999";