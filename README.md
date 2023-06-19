# BnvMonorepo

<b>For this Project i'm using NX Monorepo (Nx, a Smart, fast and extensible build system), the reason for choosing this repo is because it's easy to maintain if we have multiple projects to handle.<b>

## Front End
    1. FrontEnd is written using ReactJs, Typescript and react-bootstrap(https://react-bootstrap.netlify.app/docs/getting-started/introduction).
    2. Used Componenet Architecture and used Lazy loading for better performance.

## Back End
    1. Backend is written using NodeJs, Express.
    2. Connected to MongoDB Atlas Free Tier.

<b>Node version used is 16</b>

<b>Used PNPM as a package manager, since its much faster and uses cache to store the packages so if used frequent modules will be install faster.</b>

<p>if pnpm is not installed use `npm i pnpm`</p>



## Steps to follow
    1. Go to the project root path
    2. run -> `pnpm install`
    3. then run -> `pnpm run start-fe` or `pnpm run start-be`
## Start the app 
    1. to run Front End -> `pnpm run start-fe` -> Open your browser and navigate to http://localhost:4200/.
    2. to run Back End -> `pnpm run start-be`. -> Open your browser and navigate to http://localhost:5000/api.

    3. to run Both Apps at same time use -> `pnpm run start-all`.


## Lint
    1. Run -> `pnpm run format`

## Build
    1. to run Front End -> `pnpm run build-fe`. 
    2. to run Back End -> `pnpm run build-be`.

Targets can be defined in the `package.json` or `projects.json`. 

## TODO
    1. create deployment config file.
    2. test cases
    3. setup ci/cd pipeline