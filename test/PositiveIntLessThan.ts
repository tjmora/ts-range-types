/* This file just tests whether the code editor, if installed with a 
   Typescript linting plugin, will put red wiggle lines under the incorrectly-typed 
   declarations or not.
*/

import { PositiveIntLessThan } from "..";

const test1_min_over: PositiveIntLessThan<21> = -1;
const test1_min: PositiveIntLessThan<21> = 0;
const test1_mid: PositiveIntLessThan<21> = 10;
const test1_max: PositiveIntLessThan<21> = 20;
const test1_max_over: PositiveIntLessThan<21> = 21;