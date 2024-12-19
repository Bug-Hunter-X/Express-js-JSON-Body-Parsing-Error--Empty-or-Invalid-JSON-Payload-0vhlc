# Express.js JSON Body Parsing Error: Empty or Invalid JSON Payload

This repository demonstrates a common error encountered when using Express.js to parse JSON payloads from incoming requests.  The issue arises when the request body is empty or contains invalid JSON data, leading to the server failing to correctly handle the request.

## Bug
The provided `bug.js` file showcases a basic Express.js server designed to receive JSON data at the `/data` endpoint. However, it lacks proper error handling for cases where the request body is malformed or empty.  This results in the server either silently ignoring the request or throwing an error that's not gracefully handled.

## Solution
The `bugSolution.js` file provides a corrected implementation. It addresses the issue by:

1.  Using a middleware function to explicitly check for empty requests.
2.  Implementing more robust error handling to catch JSON parsing errors.
3.  Providing a more informative response to the client in case of failure.

## How to reproduce the bug

1.  Clone the repository.
2.  Run `npm install` to install the dependencies.
3.  Run `node bug.js` to start the server.
4.  Send a POST request to `http://localhost:3000/data` with an empty body or an invalid JSON payload.

You'll observe that the server doesn't handle the situation gracefully.

## How to run the solution

1.  Run `node bugSolution.js` to start the server with the implemented solution.
2.  Repeat step 4 above.  The server will now respond with an appropriate error message.

This example highlights the importance of error handling when working with JSON payloads in Express.js.