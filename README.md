# numbers-allow-comma

Node.js module for comma replacement in numbers

## Installation

In the command line, type one of the following commands

```bash
yarn add numbers-allow-comma
```

or

```bash
npm install numbers-allow-comma --save
```

## Usage

```javascript
fixNumber(number, functionToExecute);
```

#### Parameters

| Parameter         | Required | Type     | Description                                                                                           |
| ----------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- |
| number            | Yes      | String   | String that will be returned as a number, even if include a comma instead os a dot                    |
| functionToExecute | No       | Function | Function passed as a parameter if the user wants to automaticly execute a function with the new value |

#### Example

```javascript
const { fixNumber } = require("numbers-allow-comma");

let string = "3,25";

let num = fixNumber(string); // Will return 3.25
num.typeof(); // Will return number
```

###### With a function

```javascript
const { fixNumber } = require("numbers-allow-comma");

let string = "3,25";

function double(number) {
	console.log(number * 2);
}

let num = fixNumber(string, double); //Will execute the function double() with the new value, and will also return 3.25 to the variable num
```
