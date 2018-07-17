# react-lightning-boilerplate
Boilerplate repository for developing Lightning Components With React.

## Build Commands

Prefix with `yarn` (or `npm run`)

`build:dx` - project will be built for local dx project.
`build:mdapi` - project will compile as a metadata package.
`deploy:dx` - project will be deployed for default scratch org.
`deploy:mdapi` - project will be deployed to default org username using the Metadata API (add `-- -u <username>` to override default, i.e. `yarn build:mdapi:deploy -- -u myUsername@salesforce.com`).
