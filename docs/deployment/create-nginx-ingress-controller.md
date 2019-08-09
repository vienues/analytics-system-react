# Nginx ingress controller

Install and deployment of the NGINX ingress controller is based on documentation from https://kubernetes.github.io/ingress-nginx/deploy/.

The NGINX ingress controller provides a single entry point for all environments hosted on the **reactive-analytics** Kubernetes cluster.

### Create secret for TLS communication (HTTPS)

`kubectl create secret tls nginx-ingress-tls --key .\deploy\certs\cert.key --cert .\deploy\certs\fullchain.crt`

### Apply NGINX ingress controller elements

Creates mandatory elements and deployment/service

`kubectl apply -f ./kubernetes/nginx-ingress-controller/nginx-ingress-controller.yml`
