# CREATE IMAGE FOR DOCKERHUB
sudo docker build -t v2-node-kubernetes .
sudo docker tag v2-node-kubernetes andremaria1980/node-server:v2-node-kubernetes
sudo docker push andremaria1980/node-server:v2-node-kubernetes

# Exemple install minikube 
https://kubernetes.io/blog/2019/03/28/running-kubernetes-locally-on-linux-with-minikube-now-with-kubernetes-1.14-support/

minikube start --vm-driver kvm2
minikube config set vm-driver kvm2
minikube start

# Deploy app
kubectl apply -f kube/node-app-deployment.yaml
kubectl apply -f kube/node-app-service.yaml
minikube service node-app-service --url


![](images/schema.png)

![](https://github.com/AndreMariaDev/NodejsMySQLDeploy/blob/master/images/shemaKubernetesNodejsMySQL.png)