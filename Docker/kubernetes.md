Kubernetes manages Docker resources.
Kubernetes manages deployment and operations.
Image: 

What is Kubernetes? | Microsoft Azure
https://azure.microsoft.com/en-us/topic/what-is-kubernetes/?ef_id=04c0cf77dd651a449e0cae5827094521:G:s&OCID=AID2201006_SEM_04c0cf77dd651a449e0cae5827094521:G:s&msclkid=04c0cf77dd651a449e0cae5827094521#overview
Containers are grouped into pods, the basic operational unit for Kubernetes, and those pods scale to your desired state.

Kubernetes is build on Docker. Everything at the core is Docker.
c
Pods | Kubernetes C
https://kubernetes.io/docs/concepts/workloads/pods/
as in a pod of whales or pea pod

Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

Deployments | Kubernetes N
A Deployment provides declarative updates for Pods and ReplicaSets.

You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.

Service | Kubernetes N
https://kubernetes.io/docs/concepts/services-networking/service/
An abstract way to expose an application running on a set of Pods as a network service.

This leads to a problem: if some set of Pods (call them "backends") provides functionality to other Pods (call them "frontends") inside your cluster, how do the frontends find out and keep track of which IP address to connect to, so that the frontend can use the backend part of the workload?
Enter Services.
a Service is an abstraction which defines a logical set of Pods and a policy by which to access them (sometimes this pattern is called a micro-service).

Ingress | Kubernetes N
https://kubernetes.io/docs/concepts/services-networking/ingress/
An API object that manages external access to the services in a cluster, typically HTTP.

Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.

Secrets | Kubernetes S
https://kubernetes.io/docs/concepts/configuration/secret/
A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. Such information might otherwise be put in a Pod specification or in a container image. Using a Secret means that you don't need to include confidential data in your application code.

Secrets are similar to ConfigMaps but are specifically intended to hold confidential data.

Read per namespace. 

ConfigMaps | Kubernetes S
https://kubernetes.io/docs/concepts/configuration/configmap/
A ConfigMap is an API object used to store non-confidential data in key-value pairs. Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume.

Read from anywhere.

Volumes | Kubernetes S
https://kubernetes.io/docs/concepts/storage/volumes/
At its core, a volume is a directory, possibly with some data in it, which is accessible to the containers in a pod

On-disk files in a container are ephemeral, which presents some problems for non-trivial applications when running in containers.

A Docker volume is a directory on disk or in another container.

A Pod can use any number of volume types simultaneously.

Ephemeral volume types have a lifetime of a pod, but persistent volumes exist beyond the lifetime of a pod.
When a pod ceases to exist, Kubernetes destroys ephemeral volumes; however, Kubernetes does not destroy persistent volumes. For any kind of volume in a given pod, data is preserved across container restarts.

Like a disk computer.

Persistent Volumes | Kubernetes S
https://kubernetes.io/docs/concepts/storage/persistent-volumes/

The PersistentVolume subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this, we introduce two new API resources: PersistentVolume and PersistentVolumeClaim.

A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV

Store application data.
Almost never write you own. Will create claims.

A PersistentVolumeClaim (PVC) is a request for storage by a user.
 It is similar to a Pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted ReadWriteOnce, ReadOnlyMany or ReadWriteMany, see AccessModes).

---

Compute and storage.

Memory & CPU required for compute.
Disk > Memory > CPU.

Storage doesn't need to exist.
Technically ephemeral does need to exist. So don't even count.

---

kubectl port-forward examples in Kubernetes | GoLinuxCloud
https://www.golinuxcloud.com/kubectl-port-forward/
kubectl -n meal-planning port-forward service/grocery-service 3000:80