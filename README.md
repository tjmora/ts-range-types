# @tjmora/ts-range-types

Range types for Typescript.

## Installation

```
npm i @tjmora/ts-range-types
```


## Usage

### `PositiveIntLessThan<N>` 

This type matches all positive integers, including `0`, below `N`.
This type works perfectly, except when N is too large.

```typescript
import PositiveIntLessThan from "@tjmora/ts-range-types"

// can take int values from 0 to 20
let myNum1: PositiveIntLessThan<21>
```

### `PositiveIntRange<Min, ExclusiveMax>` 

This type matches all positive integers from `Min` to below the 
`ExclusiveMax`. This type works perfectly, except when the range is too large.

```typescript
import PositiveIntRange from "@tjmora/ts-range-types"

// can take int values from 123 to 455
let myNum2: PositiveIntRange<123,456>
```

### `StringIntRange<Min, Max>` 

This matches all string representing integers from `Min` to `Max`.
The `Max` is inclusive. `Min` and `Max` can be negative but negative numbers should be 
written in a bracket form (e.g., `[13]` means -13).

> **_NOTE:_** This type works perfectly, except when the range is too large. 
> For a range that is too large, try using `StringIntRange<Min, Max, DigitOffset>` instead.

```typescript
import StringIntRange from "@tjmora/ts-range-types"

// can take string int values from "45" to "126"
let myNum3: StringIntRange<45, 126>

// can take string int values from "-25" to "54"
let myNum4: StringIntRange<[25], 54>

// can take string int values from "-167" to "-72"
let myNum5: StringIntRange<[167], [72]>
```

### `IntRange<Min, Max>`

This matches all integers from `Min` to `Max`. The `Max` is inclusive. 
`Min` and `Max` can be negative but negative numbers should be 
written in a bracket form (e.g., `[13]` means -13).

> **_NOTE:_** This type doesn't work sometimes as Typescript have a hard time inferring custom 
> types from number literals. Use `StringIntRange<Min, Max>` for a more reliable type.

```typescript
import IntRange from "@tjmora/ts-range-types"

// can take string int values from 45 to 126
let myNum6: IntRange<45, 126>

// can take string int values from -25 to 54
let myNum7: IntRange<[25], 54>

// can take string int values from -167 to -72
let myNum8: IntRange<[167], [72]>
```

### `StringIntRange<Min, Max, DigitOffset>`

This matches all string representing integers from `Min` as digit-offsetted to 
`Max` as digit-offsetted. The `Max` is inclusive. `Min` and `Max` can be negative but 
negative numbers should be written in a bracket form (e.g., `[13]` means -13).

`DigitOffset` represents the number of digit places the `Min` and `Max`
get offsetted to the left. A `DigitOffset` of `0` is like multiplying `Min` and `Max` to 1.
A `DigitOffset` of `1` is like multiplying `Min` and `Max` to 10.
A `DigitOffset` of `2` is like multiplying `Min` and `Max` to 100.
Maximum value for `DigitOffset` is `4`.

> **_NOTE:_** This type works better than the type that has no `DigitOffset` as this type 
> require fewer utility type recursions. However, this type may stop working if your range 
> becomes too large, like if you set `DigitOffset` to `4`.

```typescript
import StringIntRange from "@tjmora/ts-range-types"

// can take string int values from "300" to "1200"
let myNum9: StringIntRange<3, 12, 2>

// can take string int values from "-460" to "350"
let myNum10: StringIntRange<[46], 35, 1>

// can take string int values from "-3000" to "-2000"
let myNum11: StringIntRange<[3], [2], 3>
```

### `IntRange<Min, Max, DigitOffset>`

This matches all integers from `Min` as digit-offsetted to `Max` as digit-offsetted. 
The `Max` is inclusive. `Min` and `Max` can be negative but 
negative numbers should be written in a bracket form (e.g., `[13]` means -13).

`DigitOffset` represents the number of digit places the `Min` and `Max`
get offsetted to the left. A `DigitOffset` of `0` is like multiplying `Min` and `Max` to 1.
A `DigitOffset` of `1` is like multiplying `Min` and `Max` to 10.
A `DigitOffset` of `2` is like multiplying `Min` and `Max` to 100.
Maximum value for `DigitOffset` is `4`.

> **_NOTE:_** This type doesn't work sometimes as Typescript have a hard time inferring custom 
> types from number literals. Use `StringIntRange<Min, Max>` for a more reliable type.

```typescript
import IntRange from "@tjmora/ts-range-types"

// can take int values from 300 to 1200
let myNum12: StringIntRange<3, 12, 2>

// can take int values from -460 to 350
let myNum13: StringIntRange<[46], 35, 1>

// can take int values from -3000 to -2000
let myNum14: StringIntRange<[3], [2], 3>
```

### `StringIntStepRange<Min, Max, LogStep>`

This matches all string representing certain base-10 multiples from `Min` as digit-offsetted to 
`Max` as digit-offsetted. The `Max` is inclusive. `Min` and `Max` can be negative but 
negative numbers should be written in a bracket form (e.g., `[13]` means -13).

`LogStep` means logarithmic step. It denotes the multiples for inclusion in the type.
A `LogStep` of `0` is for multiples of 1.
A `LogStep` of `1` is for multiples of 10.
A `LogStep` of `2` is for multiples of 100.
Maximum value for `LogStep` is `4`.

However, `LogStep` also denotes the number of digit places the `Min` and `Max`
get offsetted to the left.
A `LogStep` of `0` is like multiplying `Min` and `Max` to 1.
A `LogStep` of `1` is like multiplying `Min` and `Max` to 10.
A `LogStep` of `2` is like multiplying `Min` and `Max` to 100.

> **_NOTE:_** This type may stop working if your range becomes too large, like if you set 
> `LogStep` to `4`.

```typescript
import StringIntStepRange from "@tjmora/ts-range-types"

// can take string int values of "300", "400", "500", and so on up to "1200"
let myNum15: StringIntStepRange<3, 12, 2>

// can take string int values of "-460", "-450", "-440", and so on up to "350"
let myNum16: StringIntStepRange<[46], 35, 1>

// can take string int values of "-4000", "-3000" and "-2000" only
let myNum17: StringIntStepRange<[4], [2], 3>
```

### `IntStepRange<Min, Max, LogStep>`

This matches the base-10 multiples from `Min` as digit-offsetted to 
`Max` as digit-offsetted. The `Max` is inclusive. `Min` and `Max` can be negative but 
negative numbers should be written in a bracket form (e.g., `[13]` means -13).

`LogStep` means logarithmic step. It denotes the multiples for inclusion in the type.
A `LogStep` of `0` is for multiples of 1.
A `LogStep` of `1` is for multiples of 10.
A `LogStep` of `2` is for multiples of 100.
Maximum value for `LogStep` is `4`.

However, `LogStep` also denotes the number of digit places the `Min` and `Max`
get offsetted to the left.
A `LogStep` of `0` is like multiplying `Min` and `Max` to 1.
A `LogStep` of `1` is like multiplying `Min` and `Max` to 10.
A `LogStep` of `2` is like multiplying `Min` and `Max` to 100.

> **_NOTE:_** This type doesn't work sometimes as Typescript have a hard time inferring custom 
> types from number literals. Use `StringIntStepRange<Min, Max, LogStep>` for a more reliable 
> type.

```typescript
import IntStepRange from "@tjmora/ts-range-types"

// can take int values of 300, 400, 500, up to 1200
let myNum18: IntStepRange<3, 12, 2>

// can take int values of -460, -450, -440, up to 350
let myNum19: IntStepRange<[46], 35, 1>

// can take int values of -4000, -3000 and -2000 only
let myNum20: IntStepRange<[4], [2], 3>
```

### `StringFloatRange<Min, Max, DecimalPlaces>`

This matches all string representing float numbers from `Min` to `Max` with the 
specified number of `DecimalPlaces`. The `Max` is inclusive. `Min` and `Max` can be negative but 
negative numbers should be written in a bracket form (e.g., `[13]` means -13). The `Min` and 
`Max` represents the whole part of the floating point number (to the left of the decimal point).
The `DecimalPlaces` can take a minimum value of `1` and a maximum value of `4`.

> **_NOTE:_** This type may stop working if your range becomes too large, like if you set 
> `DecimalPlaces` to `4`.

```typescript
import StringFloatRange from "@tjmora/ts-range-types"

// can take string float values from "0.000" to "1.000"
let myNum21: StringFloatRange<0, 1, 3>

// can take string float values from "-14.0" to "8.0"
let myNum22: StringFloatRange<[14], 8, 1> 

// can take string float values from "-23.00" to "-14.00"
let myNum23: StringFloatRange<[23], [14], 2>
```

### `FloatRange<Min, Max, DecimalPlaces>`

> **_NOTE:_** This is supposed to be the number literal version for 
> `StringFloatRange<Min, Max, DecimalPlaces>` but it doesn't work. The type is defined in the 
> source code in the event that it works in the future. Typescript seems to have a hard time 
> inferring custom types from float numbers. In the meantime, just use 
> `StringFloatRange<Min, Max, DecimalPlaces>`.


## Contributing

Contributions for the improvement of this library are welcome. However, be sure your 
contributions adhere to the following:

Conserve the utility type computations needed by Typescript as much as possible.
This is the reason why negative `Min` or `Max` is represented with brackets (`[N]`) as 
Typescript has easier time inferring from that kind of notation. A `-N` notation was 
tried before but it resulted to more needed computations that made the types not work 
sometimes. This is also the reason why negative zero `-0` is not excluded from the type 
whenever `0` is within range. Excluding it can complicate the computations more.
