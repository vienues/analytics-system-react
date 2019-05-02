# Adaptive Insights

## Getting started

1. Install dev dependencies (mainly `lerna`) at root level (`yarn` must be installed beforehand):

   ```
   [adaptive-insights] $ yarn install
   ```

2. Bootstrap all packages with lerna. This essentially runs yarn install in all packages (defined in `lerna.json`) and creates the necessary symlinks to resolve dependecies among them:

   ```
   [adaptive-insights] $ yarn run bootstrap
   ```

3. Start server & launch client. This runs `yarn start` in every package (defined in `lerna.json`):

   ```
   [adaptive-insights] $ yarn start
   ```

## Offline mode

Enabling offline mode is as simple as creating an environment variable and setting it to `true`.

```
INSIGHTS_OFFLINE=true
```

By default, the server is preloaded with data for Apple(AAPL), Google(GOOG), and Microsoft(MSFT). However, you can update the data stored by running an npm script from the `PROJECT_ROOT/server` directory.

```
cd adaptive-insights/server && yarn generate-mock-data
```

Optionally, you can fetch data for more companies by passing in a space delineated list of symbols.

```
yarn generate-mock-data bac ge amd
```

## Generating Schemas and Types

If you make changes to the server-side classes that control the types, you can automatically generate the client-side typings to transpilation type checks by running

    yarn run generate-schema-and-typings
