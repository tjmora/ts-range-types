/* This file just tests whether the code editor, if installed with a 
   Typescript linting plugin, will put red wiggle lines under the incorrectly-typed 
   declarations or not.
*/

import { StringIntStepRange } from "..";

const test4_min_over: StringIntStepRange<126,421, 1> = "1250";
const test4_min: StringIntStepRange<126,421, 1> = "1260";
const test4_near_min_wrong: StringIntStepRange<126,421, 1> = "1265";
const test4_near_min: StringIntStepRange<126,421, 1> = "1270";
const test4_mid: StringIntStepRange<126,421, 1> = "2540";
const test4_near_max: StringIntStepRange<126,421, 1> = "4200";
const test4_max_wrong: StringIntStepRange<126,421, 1> = "4206";
const test4_max: StringIntStepRange<126,421, 1> = "4210";
const test4_max_over: StringIntStepRange<126,421, 1> = "4220";

const test5_min_over: StringIntStepRange<[11],24, 2> = "-1200";
const test5_min: StringIntStepRange<[11],24, 2> = "-1100";
const test5_near_min_wrong: StringIntStepRange<[11],24, 2> = "-1010";
const test5_near_min: StringIntStepRange<[11],24, 2> = "-1000";
const test5_mid: StringIntStepRange<[11],24, 2> = "0";
const test5_near_max: StringIntStepRange<[11],24, 2> = "2300";
const test5_near_max_wrong: StringIntStepRange<[11],24, 2> = "2350";
const test5_max: StringIntStepRange<[11],24, 2> = "2400";
const test5_max_over: StringIntStepRange<[11],24, 2> = "2500";

const test6_min_over: StringIntStepRange<[17], [6], 3> = "-18000";
const test6_min: StringIntStepRange<[17], [6], 3> = "-17000";
const test6_near_min_wrong: StringIntStepRange<[17], [6], 3> = "-16300";
const test6_near_min: StringIntStepRange<[17], [6], 3> = "-16000";
const test6_mid: StringIntStepRange<[17], [6], 3> = "-11000";
const test6_near_max: StringIntStepRange<[17], [6], 3> = "-7000";
const test6_near_max_wrong: StringIntStepRange<[17], [6], 3> = "-6500";
const test6_max: StringIntStepRange<[17], [6], 3> = "-6000";
const test6_max_over: StringIntStepRange<[17], [6], 3> = "-5000";