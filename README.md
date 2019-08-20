# phoneNumberGenerator
An application that generates phone numbers for a telecommunication company.

## Project Structure

The project structure follows the **MVC** (Model-View-Controller) pattern.
```
├── src
│   ├── tests
│   │   └── phoneNumerGenerator.test.js
│   ├── controllers
│   │   └── PhoneNumberController
│   ├── routes
│   │   └── index.js
│   ├── helpers
│   │   └── errorHandler.js
│   │   └── defaultData.js
│   │   └── numberGenerator.js
│   ├── app.js
│   ├── middlewares
│   │   └── query.js
```

## Requirements

* Node.js
* npm

## Getting Started

```
$ git clone https://github.com/uchemukolo/phoneNumberGenerator.git
$ cd phoneNumberGenerator
$ npm install
$ npm start to run the server
```

You should now be able to access the API via http://localhost:port/api/v1/

**NOTE:** Create a `.env` file configuration following the `.env.sample`.

## Project Details
`numbers:`
 - generate phone numbers up to a maximum of 10000 at a time
 - get total generated phone numbers
 - get minimum and maximum generated phone numbers
 - Sort numbers in ascending and descending order

## API Endpoints

<table>
<tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th><th>QUERY</th></tr>
<tr><td>GET</td><td>/api/v1/phonemunber</td><td>Get generated phone numbers</td><td>quantity,order</td></tr>
<tr><td>GET</td><td>/api/v1/phonemunber/generate</td><td>Generate phone numbers/td><td>quantity,order</td></tr>
<tr><td>PUT</td><td>/api/v1/phonemunber/minandmax</td><td>Get minimum and maximum generated phone numbers</td><td></td></tr>

