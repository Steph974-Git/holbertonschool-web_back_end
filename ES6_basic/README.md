# ES6 Basics — Holberton School

This folder contains small ES6 exercises demonstrating modern JavaScript language features. Each exercise has a main/test file (`*-main.js`) that shows expected behaviour. The exercises are written to be checked by Holberton's automated grader and tested locally using Babel/Node.

## Environment & tools

- Node.js (20.x recommended) and npm
- Babel (`@babel/node`) to run ES module/ES6+ code: run with `npx babel-node <file>` or via the provided npm script
- ESLint (project config present) to enforce style rules
- npm scripts (see `package.json`) — e.g. `npm run dev <main-file>` runs Babel for that file
- Files must be UTF-8, end with a newline, and use `.js` extension (Holberton grader expects `.js` imports in many exercises)

## How to run examples

From the `ES6_basic` directory:

- Run a single example:
  - npx: `npx babel-node 5-main.js`
  - npm script: `npm run dev 5-main.js` (project uses an npm “dev” script that forwards the argument)
- Lint a file:
  - `npx eslint 9-getFullBudget.js` (use the repo ESLint config)

## Files and what they do

- `0-constants.js`  
  - Export simple functions demonstrating `const` usage and module exports.

- `1-block-scoped.js`  
  - Demonstrates block scoping with `let`/`const` vs `var`. Shows how `let` creates block-local variables so outer variables are not overwritten.

- `2-arrow.js`  
  - Shows arrow function syntax and lexical `this` where applicable.

- `3-default-parameter.js`  
  - Uses default function parameters to define fallback values.

- `4-rest-parameter.js`  
  - Implements a function using the rest parameter (`...args`) to count arguments.

- `5-spread-operator.js`  
  - Concatenates two arrays and spreads a string into characters using the spread operator (`...`).

- `6-string-interpolation.js`  
  - Builds a sentence using template literals (`` `...${var}...` ``).

- `7-getBudgetObject.js`  
  - Uses object property shorthand `{ income, gdp, capita }`.

- `8-getBudgetCurrentYear.js`  
  - Shows computed property names with template literal keys: ``[`income-${year}`]: value``.

- `9-getFullBudget.js`  
  - Demonstrates ES6 method properties (shorthand methods inside objects) and object spread to compose an object from another.

- `10-loops.js`  
  - Practice `for...of` loops (use `array.entries()` if you need index and value) and in-place mutation of arrays.

- `11-createEmployeesObject.js`  
  - Creates an object with a computed property name from a function argument (dynamic keys).

- `12-createReportObject.js`  
  - (If present) Combines existing functions/objects to build a report object; uses modern object/array utilities.

Each `*-main.js` file demonstrates usage and expected console output.

## ES6 features covered

- let / const (block scoping)
- Arrow functions
- Default parameters
- Rest parameters and spread operator
- Template literals (string interpolation)
- Object property shorthand
- Computed property names
- Method property shorthand (ES6 object methods)
- for...of loops and `Array.prototype.entries()`
- Named/default ES module exports (`export default` and `export`)
- Class & prototype-related concepts appear in sister folders (ES6_classes)

## Notes about Holberton grader & ESLint

- The grader is strict about:
  - exact function/class names and exported symbols (default vs named)
  - exact TypeError messages where required
  - presence of a trailing newline at EOF
  - using `.js` extension in imports for some exercises (even when ESLint complains)
- ESLint config in the repo may flag rules that contradict grader expectations (e.g., `import/extensions`). For passing Holberton checks, follow the grader expectations first.
- Avoid stray trailing whitespace and ensure consistent 2-space indentation.

## Common pitfalls & tips

- Always export the function/class exactly as the exercise specifies (use `export default` where required).
- For in-place array modification with `for...of`, use `array.entries()` to get both index and value:
  ```javascript
  for (const [idx, val] of array.entries()) {
    array[idx] = appendString + val;
  }
  ```
- When using computed property names, construct the object literal directly:
  ```javascript
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    ...
  };
  ```
- If Babel or `npx babel-node` fails with missing executable, install dev dependency:
  ```bash
  npm install --save-dev @babel/node @babel/core @babel/preset-env
  ```
- If ESLint shows an error about import extensions but the grader expects `.js`, prioritize the grader for passing tests (keep `.js` in imports).
- If a check mysteriously fails, re-create the file to remove hidden BOM/characters and ensure UTF-8 encoding.

## Contributing / extending

- Add new exercises as `NN-description.js` and a `NN-main.js` test harness.
- Keep exports and filenames consistent with tests.
- Run `npx eslint` and `npx babel-node` locally to catch issues before submission.

---

This README summarizes each task in the `ES6_basic` folder, the ES6 features used, how to run examples and common issues to watch for when preparing files for