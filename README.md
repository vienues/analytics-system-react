## GraphQL Demo

# 🙌

**Adaptive Insights offline mode**

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
