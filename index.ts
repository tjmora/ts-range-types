export type PositiveIntLessThan<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : PositiveIntLessThan<N, [...Acc, Acc["length"]]>;

export type Digit = PositiveIntLessThan<10>;

export type PositiveIntRange<
  Min extends number,
  ExclusiveMax extends number
> = Exclude<PositiveIntLessThan<ExclusiveMax>, PositiveIntLessThan<Min>>;

export type Repeat<
  T extends Digit | string,
  N extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
> = N extends 0
  ? ``
  : N extends 1
  ? `${T}`
  : N extends 2
  ? `${T}${T}`
  : N extends 3
  ? `${T}${T}${T}`
  : N extends 4
  ? `${T}${T}${T}${T}`
  : never;

export type VariableNumDigit<N extends 0 | 1 | 2 | 3 | 4> = N extends 0
  ? never
  : N extends 1
  ? `${Digit}`
  : N extends 2
  ? `${Digit}${Digit}` | `${Digit}`
  : N extends 3
  ? `${Digit}${Digit}${Digit}` | `${Digit}${Digit}` | `${Digit}`
  : N extends 4
  ?
      | `${Digit}${Digit}${Digit}${Digit}`
      | `${Digit}${Digit}${Digit}`
      | `${Digit}${Digit}`
      | `${Digit}`
  : never;

export type VariableNumZero<N extends 0 | 1 | 2 | 3 | 4> = N extends 0
  ? never
  : N extends 1
  ? `0`
  : N extends 2
  ? `00` | `0`
  : N extends 3
  ? `000` | `00` | `0`
  : N extends 4
  ? `0000` | `000` | `00` | `0`
  : never;

export type StringIntRange<
  Min extends number | [number],
  Max extends number | [number],
  DigitOffset extends 0 | 1 | 2 | 3 | 4 = 0
> = Min extends [number]
  ? Max extends [number]
    ?
        | `-${PositiveIntRange<Max[0], Min[0]>}${Repeat<Digit, DigitOffset>}`
        | `-${Min[0]}${Repeat<"0", DigitOffset>}`
    :
        | `-${Min[0]}${Repeat<"0", DigitOffset>}`
        | `-${PositiveIntLessThan<Min[0]>}${Repeat<Digit, DigitOffset>}`
        | `-${VariableNumDigit<DigitOffset>}`
        | `${VariableNumDigit<DigitOffset>}`
        | `${PositiveIntLessThan<Exclude<Max, [number]>>}${Repeat<
            Digit,
            DigitOffset
          >}`
        | `${Exclude<Max, [number]>}${Repeat<"0", DigitOffset>}`
  : Max extends [number]
  ? never
  :
      | `${PositiveIntRange<
          Exclude<Min, [number]>,
          Exclude<Max, [number]>
        >}${Repeat<Digit, DigitOffset>}`
      | `${Exclude<Max, [number]>}${Repeat<"0", DigitOffset>}`;

export type IntRange<
  Min extends number | [number],
  Max extends number | [number],
  DigitOffset extends 0 | 1 | 2 | 3 | 4 = 0
> = StringIntRange<Min, Max, DigitOffset> extends `${infer N extends number}`
  ? N
  : never;

export type StringIntStepRange<
  Min extends number | [number],
  Max extends number | [number],
  LogStep extends 0 | 1 | 2 | 3 | 4 = 0
> = Min extends [number]
  ? Max extends [number]
    ?
        | `-${PositiveIntRange<Max[0], Min[0]>}${Repeat<"0", LogStep>}`
        | `-${Min[0]}${Repeat<"0", LogStep>}`
    :
        | `-${Min[0]}${Repeat<"0", LogStep>}`
        | `-${PositiveIntLessThan<Min[0]>}${Repeat<"0", LogStep>}`
        | `0`
        | `${PositiveIntLessThan<Exclude<Max, [number]>>}${Repeat<
            "0",
            LogStep
          >}`
        | `${Exclude<Max, [number]>}${Repeat<"0", LogStep>}`
  : Max extends [number]
  ? never
  :
      | `${PositiveIntRange<
          Exclude<Min, [number]>,
          Exclude<Max, [number]>
        >}${Repeat<"0", LogStep>}`
      | `${Exclude<Max, [number]>}${Repeat<"0", LogStep>}`;

export type IntStepRange<
  Min extends number | [number],
  Max extends number | [number],
  LogStep extends 0 | 1 | 2 | 3 | 4 = 0
> = StringIntStepRange<Min, Max, LogStep> extends `${infer N extends number}`
  ? N
  : never;

export type StringFloatRange<
  Min extends number | [number],
  Max extends number | [number],
  DecimalPlaces extends 1 | 2 | 3 | 4 = 1
> = Min extends [number]
  ? Max extends [number]
    ?
        | `-${PositiveIntRange<
            Max[0],
            Min[0]
          >}.${VariableNumDigit<DecimalPlaces>}`
        | `-${Min[0]}.${VariableNumZero<DecimalPlaces>}`
    :
        | `-${Min[0]}.${VariableNumZero<DecimalPlaces>}`
        | `-${PositiveIntLessThan<Min[0]>}.${VariableNumDigit<DecimalPlaces>}`
        | `${PositiveIntLessThan<
            Exclude<Max, [number]>
          >}.${VariableNumDigit<DecimalPlaces>}`
        | `${Exclude<Max, [number]>}.${VariableNumZero<DecimalPlaces>}`
  : Max extends [number]
  ? never
  :
      | `${PositiveIntRange<
          Exclude<Min, [number]>,
          Exclude<Max, [number]>
        >}.${VariableNumDigit<DecimalPlaces>}`
      | `${Exclude<Max, [number]>}.${VariableNumZero<DecimalPlaces>}`;

export type FloatRange<
  Min extends number | [number],
  Max extends number | [number],
  DecimalPlaces extends 1 | 2 | 3 | 4 = 1
> = StringFloatRange<
  Min,
  Max,
  DecimalPlaces
> extends `${infer N extends number}`
  ? N
  : never;
