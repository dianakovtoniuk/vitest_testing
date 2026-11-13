# Vitest Testing Practice

Unit and async testing practice with Vitest and TypeScript. The project covers testing pure functions, input validation, DOM output helpers, callback and promise based code, and test lifecycle hooks.

## Stack

- TypeScript
- Vitest
- Vite
- jsonwebtoken

## Getting started

```bash
npm install
```

Run the tests once:

```bash
npm test
```

Run the tests in watch mode:

```bash
npm run test:watch
```

Type check:

```bash
npm run typecheck
```

Start the demo app (a simple number calculator):

```bash
npm start
```

## Project structure

```
app.ts                  Calculator entry point
index.html
src/
  math.ts               Sum and result calculation
  parser.ts             Reads values from the form
  output.ts             Result text and DOM output
  util/
    numbers.ts          String to number conversion and cleanup
    validation.ts       Input validation
  async/
    async-example.ts    Token generation with callbacks and promises
  hooks/
    hooks.ts            Small User class used to demo hooks
```

Each module has a matching `*.test.ts` file next to it.

## What is covered

- Arrange, Act, Assert structure in unit tests
- Testing thrown errors and error messages
- Testing callback based and promise based async code
- `beforeAll`, `beforeEach`, `afterEach` and `afterAll` hooks
- Grouping tests with `describe`
