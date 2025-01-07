# Silent Server Crash: Unhandled Exception in Async Operation

This repository demonstrates a common yet subtle bug in Node.js where unhandled exceptions within asynchronous operations can lead to silent server crashes without informative error messages.

## Bug Description

The provided `bug.js` file contains a simple HTTP server. An asynchronous operation (`someAsyncOperation`) is simulated; it randomly throws an exception.  The crucial issue is that this exception is not handled, causing the server to crash without any clear indication in the console or logs.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe that the server may crash without any meaningful error output. The crash is intermittent due to the random exception simulation.

## Solution

The `bugSolution.js` file provides a fix using `try...catch` blocks to handle potential errors in the asynchronous operation and `process.on('uncaughtException')` to handle errors not caught within a try-catch block.  This robust approach ensures that errors are reported, preventing silent crashes and aiding in debugging.

## Lessons Learned

- Always handle potential errors in asynchronous operations using `try...catch` blocks.
- Implement comprehensive error handling using `process.on('uncaughtException')` as a safety net for uncaught exceptions. 
- Proper error handling is crucial for building stable and reliable Node.js applications.