# Solar System

The app is deployed here: <https://agusmgarcia.github.io/next-solar-system/>

[![Deploy application](https://github.com/agusmgarcia/next-solar-system/actions/workflows/deploy-app.yml/badge.svg)](https://github.com/agusmgarcia/next-solar-system/actions/workflows/deploy-app.yml)

This is a first touch of WebGL capabilities.

## Getting started

Clone the repository in your local machine

```bash
git clone https://github.com/agusmgarcia/next-solar-system.git
```

Install dependencies

```bash
cd next-solar-system
npm i
```

> Make sure to have exported an environment variable called `NODE_AUTH_TOKEN`. Its value should be your GitHub PAT.

Start the project

```bash
npm start
```

## Deployments

Every time a new tag is created with the pattern **v**_x.x.x_, the code will be built and deployed to the firebase app service automatically.

Create and deploy a new tag using the following commands:

```bash
npm run deploy
```

Some of the technologies used to build this project were:

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com)
- [ThreeJS](https://threejs.org)
