# SST GQL Starter Kit 🛸

This repo is meant to be a scaffolding tool aid in spinning up Serverless Microservices in a monorepo.

## The Stack 🎁

- SST

- TypeScript

- DynamoDB

- AWS Lambda

- s3

- Pothos

## How to setup your Application 🎬

In the `/stacks` folder all the resources are prefixed with `ServiceOne`. Change that to whatever you want to name your service.

The `/packages` folder has also has a folder called `ServiceOne` however you will see the types and other related code reference boats. Use that as a guide for how to write all your business logic and change it where you necessary.

## Prerequisites 👨‍⚖️

- Latest version of Node
- An AWS account
- The AWS CLI configured on your machine

## Setup Instructions 🗺️

### Step 1

Create the directory for your project

```
$ mkdir name_of_your_project

```

Clone the repo somewhere on your machince

```
$ git clone git@github.com:AmoDinho/sst.gql.starterkit.git
```

The copy the files over to the folder you created (name_of_your_project)

### Step 2

CD into the repo

```
$ cd name_of_your_project
```

Then install the packages

```
$ yarn install
```

CD into the `packages` directory

```
$ cd packages

```

Then install the packages their too:

```
$ yarn install
```

### Step 3

Now you are all setup to run SST locally.

```
$ yarn dev

```

# Deployment 🍬

For deployment simply connect your repo via GitHub via [Seed](https://seed.run).
