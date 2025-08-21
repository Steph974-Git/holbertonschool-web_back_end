# ES6 Classes — Holberton School

This folder implements a set of small ES6 class exercises used to practice modern JavaScript (classes, getters/setters, computed behavior, inheritance and object cloning). Each exercise includes a main/test file demonstrating the expected behavior.

## Environment & Tooling

- Node: 20.x (tested via `node` / `npx`)
- Babel: `@babel/node` used to run ES6+ modules when needed (`npx babel-node <file>`)
- ESLint: project contains `.eslintrc.js` — follow rules (imports, style)
- npm: scripts available in `package.json` (e.g. `npm run dev <file>`)
- Tests: exercises are designed for automatic checking (Holberton checker) and can be executed manually with their corresponding `*-main.js` files
- Encoding / style: UTF-8 without BOM, files end with a newline, 2-space indentation preferred

## How to run examples

From this folder run:
```bash
npm run dev 2-main.js     # runs 2-hbtn_course example via babel-node
# or
npx babel-node 3-main.js  # direct run of a main file
```

## Files & Responsibilities

- `0-classroom.js`  
  Class `ClassRoom`  
  - constructor(maxStudentsSize) stores `_maxStudentsSize`  
  - simple class used by `1-make_classrooms.js` to instantiate rooms

- `1-make_classrooms.js`  
  Function `initializeRooms()`  
  - returns an array of 3 `ClassRoom` instances with sizes `19, 20, 34`  
  - demonstrates importing/default export and usage of classes

- `2-hbtn_course.js`  
  Class `HolbertonCourse`  
  - constructor(name, length, students) with type validation:
    - `name` must be a `string`
    - `length` must be a `number`
    - `students` must be an `array` of `string`s (validate each element)
  - underscore-backed attributes: `_name`, `_length`, `_students`
  - getters and setters for each attribute; setters validate input types and throw `TypeError` when invalid
  - shows defensive programming and data validation in constructors and setters

- `3-currency.js`  
  Class `Currency`  
  - constructor(code, name) with type checks (strings) and underscore-backed properties `_code`, `_name`
  - getters / setters for `code` and `name`
  - method `displayFullCurrency()` returns string: `Name (code)`
  - demonstrates getters/setters and method formatting

- `4-pricing.js`  
  Pricing-related class / utilities (exercise dependent)  
  - implements pricing calculation logic and exposes methods (see file comments for specifics)

- `5-building.js`, `6-sky_high.js`, `7-airport.js`  
  Domain exercises using classes, static methods, and composition  
  - implement behaviors such as floor/height calculations, static helpers, or aggregation
  - use modern class syntax and module exports

- `8-hbtn_class.js`  
  Class `HolbertonClass` (primitive conversion)  
  - constructor(size, location) → `_size`, `_location`
  - `valueOf()` returns `_size` so `Number(instance)` yields the numeric size
  - `toString()` returns `_location` so `String(instance)` yields the location
  - demonstrates customizing primitive coercion for objects

- `9-hoisting.js`  
  Classes `HolbertonClass` and `StudentHolberton` example (hoisting & ordering)  
  - `HolbertonClass`: basic class with `year` and `location` getters
  - `StudentHolberton`: constructor(firstName, lastName, holbertonClass) storing `_holbertonClass`
  - getters: `fullName`, `holbertonClass`, `fullStudentDescription` (returns `First Last - YEAR - LOCATION`)
  - exports an array `listOfStudents` used by `9-main.js`  
  - demonstrates correct export/import usage (named vs default) and ordering so exported values are defined

- `10-car.js`  
  Class `Car` with `cloneCar()` method  
  - constructor(brand, motor, color) stores underscore properties
  - `cloneCar()` should return a new instance of the same concrete class (use `new this.constructor(...)`)
  - demonstrates dynamic construction and inheritance handling when subclassing

## ES6 / Language features used

- Classes (constructor, methods) and class inheritance
- Getters and setters (encapsulation, validation)
- Default and named ES modules (`export default`, `export const/class`)
- Spread, rest and template literals used in other projects in repo
- valueOf() and toString() for primitive coercion
- `new this.constructor(...)` to create instances of the concrete subclass
- Defensive programming: runtime type checks and meaningful `TypeError` messages

## Validation & Checker notes

- Holberton automated checker often enforces:
  - exact error messages and types (TypeError)
  - precise method names and export signatures
  - trailing newline at file end, no trailing spaces, UTF-8 encoding
  - sometimes expects `.js` in imports — follow project instructions (the checker may be stricter than ESLint config)
- When failing a check:
  - verify constructor and setter validations
  - confirm exported names (default vs named) match the import in the `*-main.js` used to test
  - ensure `valueOf` / `toString` behavior matches `Number()` and `String()` expectations

## Development tips

- Use `npx eslint <file>` to find style issues (configuration in `.eslintrc.js`)
- Use `npx babel-node <file>` or `npm run dev <main-file>` to run examples that use ES module syntax
- Keep error messages exact and consistent across constructor and setter validations
- Recreate files if mysterious checker failures occur (hidden characters / BOM issues)
- Ensure all functions/classes intended for the checker are exported exactly as required

---

This README documents the purpose of each exercise file, the methods implemented, validation and ES6 features used, and how to run / debug the examples. If you want, I can generate a one-line npm `dev` script example or fix a specific failing test file — tell me which