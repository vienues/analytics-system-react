### Configure gcloud for Kubernetes cluster administration

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
