# Configure gcloud for Kubernetes cluster administration

The deployment process is automated on Circle CI. However, if administering the Gcloud resources is necessary, it is necessary to configure the CLI locally.

### Required tools

- [Gsutil](https://cloud.google.com/storage/docs/gsutil_install)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

### Set the Kubernetes namespace

```
gcloud container clusters get-credentials reactive-analytics
gcloud config set compute/zone europe-west1-d
gcloud container clusters get-credentials <kubernetes cluster namespace>
kubectl config current-context
```

Kubectl should display the Kubernetes namespace. For dev, for example, the name of the namespace is **dev-reactive-analytics**.

### Create a GCloud service key

The GCloud service key is set as an environment variable on Circle CI.

It allows the CI pipeline to manipulate the Kubernetes cluster and perform operations like `kubectl set image`.

To generate the Gcloud service key, you need to login to Gcloud with valid credentials and generate it in JSON format.

`gcloud iam service-accounts keys create reactive-analytics-service-account-key --iam-account deployments@adaptive-reactive-analytics.iam.gserviceaccount.com --key-file-type=json`
