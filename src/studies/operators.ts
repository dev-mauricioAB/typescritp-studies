
export class OperatorsStudies {
  // JAVASCRIPT OPERATORS — SAMPLER EXERCISES
  // For a senior dev, these are not about syntax, but about
  //  - understanding edge cases,
  //  - reasoning with truthy/falsy and type coercion,
  //  - and internalizing bit‑level behavior.

  // Each function is a tiny “coding kata” you can run and tweak.

  //---------------------------------------------------------------------------

  // 1. ARITHMETIC OPERATORS
  // +, -, *, /, %, ** – simple math, but spot `%` and `**` nuances.

  constructor() { }

  exerciseArithmetic() {
    const a = 8;
    const b = 3;

    // 1.1 addition: normal addition
    const addition = a + b;

    // 1.2 subtraction: basic subtraction
    const subtraction = a - b;

    // 1.3 multiplication: standard product
    const multiplication = a * b;

    // 1.4 division: note that JS uses floating‑point division
    const division = a / b;

    // 1.5 remainder (mod): a % b is the “leftover” after a ÷ b
    const remainder = a % b;

    // 1.6 power: exponentiation; faster than repeated multiplication
    const power = a ** b;

    return { addition, subtraction, multiplication, division, remainder, power };
  }

  //---------------------------------------------------------------------------

  // 2. ASSIGNMENT OPERATORS
  // =, +=, -=, *=, /=, %= etc. – syntactic sugar for `x = x op y`.

  exerciseAssignment() {
    let a = 10;
    let b = 5;
    let c = 2;

    // 2.1 a += 3  → a = a + 3
    a += 3;

    // 2.2 b -= 2  → b = b - 2
    b -= 2;

    // 2.3 c *= 4  → c = c * 4
    c *= 4;

    return { a, b, c };
  }

  //---------------------------------------------------------------------------

  // 3. COMPARISON OPERATORS
  // ==, ===, !=, !==, <, >, <=, >= – focus on `==` vs `===`.

  exerciseComparison(value?: any) {
    const a = 5;
    const b = 5;

    // 3.1 loose equal: type coercion is allowed
    const looseEqual = a == b;

    // 3.2 strict equal: no type coercion, value + type must match
    const strictEqual = a === b;

    // 3.3 loose not equal: negation of loose equal
    const looseNot = a != b;

    // 3.4 strict not equal: negation of strict equal
    const strictNot = a !== b;

    // 3.5 greater than: standard numeric comparison
    const greater = a > 4;

    // 3.6 less or equal: includes equality
    const lessOrEqual = a <= 5;

    // 3.7 optional: check if value is truthy
    const isTruthy = !!value;

    return { looseEqual, strictEqual, looseNot, strictNot, greater, lessOrEqual, isTruthy };
  }

  //---------------------------------------------------------------------------

  // 4. LOGICAL OPERATORS
  // &&, ||, ! – short‑circuiting, truthy/falsy.

  exerciseLogical(ready: boolean, logged: boolean, value: any) {
    // 4.1 “ready and logged in”: stops early if `ready` is falsy
    const withAnd = ready && logged;

    // 4.2 “ready or logged in”: stops if `ready` is truthy
    const withOr = ready || logged;

    // 4.3 “not ready”: logical negation; true → false, false → true
    const notReady = !ready;

    // 4.4 logical OR used for default/fallback value
    const defaultName = value || "Unknown";

    return { withAnd, withOr, notReady, defaultName };
  }

  //---------------------------------------------------------------------------

  // 5. BITWISE OPERATORS
  // &, |, ^, ~, <<, >>, >>> – bit‑level operations, useful for puzzles like `x | (x+1)`.

  exerciseBitwise() {
    const a = 12;  // 1100 in binary
    const b = 10;  // 1010 in binary

    // 5.1 AND (&): each bit is 1 only if both operands have 1
    const and = a & b;  // 1100 & 1010 → 1000 → 8

    // 5.2 OR  (|): each bit is 1 if at least one operand has 1
    const or = a | b;  // 1100 | 1010 → 1110 → 14

    // 5.3 XOR (^): 1 only where the bits differ
    const xor = a ^ b;  // 1100 ^ 1010 → 0110 → 6

    // 5.4 NOT (~): flips all bits; in JS this wraps via two’s complement
    const not = ~a;     // ~12 ≈ large negative, because of sign ext.

    // 5.5 left shift (<<): multiplies by 2^shift (conceptually)
    const left = a << 1;  // 12 << 1 → 24

    // 5.6 signed right shift (>>): divides by 2^shift, keeping sign
    const right = a >> 1; // 12 >> 1 → 6

    // 5.7 unsigned right shift (>>>): always fills with 0, even on negatives
    const unsignedRight = a >>> 1; // 12 >>> 1 → 6

    return { and, or, xor, not, left, right, unsignedRight };
  }

  //---------------------------------------------------------------------------

  // 6. CONDITIONAL (TERNARY) OPERATOR
  // ?: – single‑expression if/else.

  exerciseTernary(score: number, min: number = 70): string {
    // 6.1 “is score >= min, return grade label, else other label”
    // This is a clean functional way to map a condition to a value.
    const gradeLabel = score >= min ? "Pass" : "Fail";

    return gradeLabel;
  }

  //---------------------------------------------------------------------------

  // 7. UNARY OPERATORS
  // +, -, !, typeof, ++, --, delete, etc.

  exerciseUnary(input: any) {
    const a = 3;

    // 7.1 unary + converts to number; handy for strings
    const unaryPlus = +input;

    // 7.2 unary - negates the numeric value
    const unaryMinus = -a;

    // 7.3 logical NOT; converts to boolean then flips
    const logicalNot = !true;

    // 7.4 typeof gives the runtime type tag as a string
    const type = typeof input;

    // 7.5 post‑increment: use x, then increment; useful in loops
    let x = 5;
    const first = x++;
    const second = x;   // now x has been incremented

    // 7.6 delete removes a property from an object (if not non‑configurable)
    const obj = { prop: 10 };

    return {
      unaryPlus,
      unaryMinus,
      logicalNot,
      type,
      firstPostInc: first,
      secondPostInc: second,
      finalObj: obj,
    };
  }

  //---------------------------------------------------------------------------

  // 8. RELATIONAL OPERATORS
  // `in` and `instanceof` – checking keys vs. prototypes.

  exerciseRelational(target: any) {
    const obj = { x: 1, y: 2 };

    // 8.1 `in` checks if a key exists in the object (or its prototype chain)
    const hasX = "x" in obj;

    // 8.2 `instanceof` checks constructor chain; use cautiously with primitives
    const isDate = target instanceof Date;

    // 8.3 note: primitive string literals are not `instanceof String`
    const isString = target instanceof String;

    return { hasX, isDate, isString };
  }

  //---------------------------------------------------------------------------

  // 9. CONNECTION TO YOUR BIT‑PUZZLE
  // Your `x | (x + 1) === t` problem sits in the bitwise world.
  // To practice it, you can call:
  //
  //    exerciseBitwise();
  //
  //  and then write a helper like:
  //
  //    function xOrNext(x: number): number {
  //      return x | (x + 1);
  //    }
  //
  //  and verify that for x = 9, 12, 15 you get 11, 13, 31 respectively.

  xOrNext(x: number): number {
    // Simple bit test: x OR (x+1) – your main puzzle operator pattern.
    return x | (x + 1);
  }

  //---------------------------------------------------------------------------
  // USAGE EXAMPLE
  getResults() {
    console.log(this.exerciseArithmetic());
    console.log(this.exerciseAssignment());
    console.log(this.exerciseComparison());
    console.log(this.exerciseLogical(true, false, "John"));
    console.log(this.exerciseBitwise());
    console.log(this.exerciseTernary(85));
    console.log(this.exerciseUnary("42"));
    console.log(this.exerciseRelational(new Date()));
    console.log(this.xOrNext(9));  // 9 | 10 → 11
    console.log(this.xOrNext(12)); // 12 | 13 → 13
    console.log(this.xOrNext(15)); // 15 | 16 → 31
  }
}
