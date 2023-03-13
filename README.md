# kubernetes-task
backend: node.js application that listens to a port and sends some response if a message comes there. replicated.  
frontend: react.js application that sends incoming requests to the backend.

## system requirements
- docker
- minikube
- kubectl

## list of commands to launch and test:

**create docker images**  
docker build -t olyagalyagina/backend .  
docker build -t olyagalyagina/frontend .

**push them to docker hub**  
docker push olyagalyagina/backend  
docker push olyagalyagina/frontend

**create and run kubernetes cluster locally using minikube**  
minikube start --driver=docker

**apply backend deployment and service**  
kubectl apply -f backend-deployment.yaml  
kubectl apply -f backend-service.yaml

**expose backend**  
minikube service node-js-service

get the backend port and paste it to REACT_APP_BACKEND_API_URL

**apply frontend deployment and service**  
kubectl apply -f frontend-deployment.yaml  
kubectl apply -f frontend-service.yaml

**expose frontend**  
minikube service react-js-service
