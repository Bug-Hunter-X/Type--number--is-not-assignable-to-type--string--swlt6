# Type 'number' is not assignable to type 'string' in TypeScript
This repository demonstrates a common type error in TypeScript where a number is passed to a function expecting a string.  The error message is clear, but understanding how to fix it requires understanding type safety and type assertion.

## The Problem
The `printString` function is explicitly typed to accept only string arguments.  Attempting to pass a number causes a compiler error.

## The Solution
The solution involves either converting the number to a string before passing it or using a type assertion (although less recommended).

## How to Run
1. Clone this repository.
2. Make sure you have Node.js and npm (or yarn) installed.
3. Run `npm install` (or `yarn install`) to install the TypeScript compiler.
4. Run `tsc bug.ts` to compile the buggy code and see the error.
5. Run `tsc bugSolution.ts` to see the corrected code compile successfully.