## Description

[Nest](https://github.com/nestjs/nest) Book Listing API project.

## API Documentation

Please find the link to the API documentation [here](https://documenter.getpostman.com/view/13394159/2s9YXb95k3)

## Assumptions

- The author collection is already seeded with data in `src/author/author.seed.json`
- The project has been built on Nestjs instead of Express
- Users will have to input the author id manually while posting or updating book data
- Uniqueness has not been enforced on the title of the books

## Setup

Copy the following into a file called `.env` at the root of your project

```bash
MONGO_URI=''
PORT=3000
```

Where you must replace MONGO_URI with the mongoDB url.

## Youtube and Deployment Links

Youtube: https://youtu.be/77C_1K8sprU
Deployed URL: https://books-listing-nestjs.onrender.com

## Installation

```bash
$ npm i -g @nestjs/cli
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```
