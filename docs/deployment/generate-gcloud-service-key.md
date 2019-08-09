### Create a GCloud service key

The GCloud service key is set as an environment variable on Circle CI.
It allows the CI pipeline to manipulate the Kubernetes cluster and perform operations like `kubectl set image`.
To generate the Gcloud service key, you need to login to Gcloud with valid credentials and generate it in JSON format.

```
gcloud iam service-accounts keys create reactive-analytics-service-account-key --iam-account deployments@adaptive-reactive-analytics.iam.gserviceaccount.com --key-file-type=json
```
