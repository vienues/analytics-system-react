# Create a new environment

The following steps are necessary to create a new environment deployed in the **reactive-analyics** Kubernetes cluster.

### Set Gcloud session for reactive analytics

```
gcloud config set project adaptive-reactive-analytics
gcloud config set compute/zone europe-west1-d
gcloud container clusters get-credentials reactive-analytics
```

### Replace values in the Kubernetes templates with the new namespace

The ./kubernetes/ directory holds the templates to create a new namespaced environment within the running Kubernetes cluster.

For now, namespace values are hardcoded in the templates, so each one needs replacing with a new environment name.

It's recommended to follow the naming convenction: **<environment-name>-reactive-analytics**

### Apply the Kubernetes resources templates

Each template creates a specific resource: client, server and ingress.

The ingress depends on a secret which is stored in Kubernetes secrets. This is used for TLS communication.

```
kubectl apply -f .\kubernetes\analytics-client.yml
kubectl apply -f .\kubernetes\analytics-server.yml
kubectl apply -f .\kubernetes\analytics-ingress.yml
```

### Use Cloud DNS to create a new entry point DNS record

The NGINX ingress controller does domain based routing. For the ingress controller to correctly route to the freshly started deployment and services, it's necessary to create the DNS record targeting the public IP of the ingress controller.
