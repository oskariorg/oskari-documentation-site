---
layout: post
title:  "Oskari in container and hosting on a cloud platform"
excerpt: "Interested in running Oskari as a Docker image or hosting in AWS? Look no further!"
date:   2025-08-12  10:00:00 +0300
categories: [news, container, cloud, developing]
tags:
  - blog

---

# Oskari in container and hosting on a cloud platform

Some organizations have begun to use Oskari in a container on a cloud platform. For example, the city of Tampere runs Oskari using a container technology in Amazon's AWS service. The topic was discussed at the meeting of Oskari JDF in June and in this article we will cover the topic at a general level.

## What are cloud platforms? What are containers?

The most well-known cloud services at the moment are probably Amazon's AWS and Microsoft's Azure. They host services set up by their customers and offer various additional services related to the hosting. Often the customer buys a dedicated server for their service, but it is also possible to put the service in a container that is set up on a shared server. Doing so the price of the service can be reduced.

When a service is hosted on a cloud platform, the organization is responsible for the software and its updates, while the cloud provider ensures the underlying hardware — such as servers and physical components — are functioning properly. If the organization faces problems with its own data center with Linux OS or the hardware, the organization is on its own.

Cloud migrations may be driven by the need to keep public and government-use data separate from each other. A very clear separation between the two use cases can be made by using a public cloud service for public-facing data and an on-premise service for internal data.

Another option is to maintain the services in the organization’s own data center. If the organization has a data center ready and empty servers there, the services can of course be set up there. In an organization’s own data center services are (probably) physically close and setting up a new server can involve manual labour with cables and computers, whereas with cloud platforms the same result can be achieved with a couple of clicks. This makes the cloud platforms a quick way to test the latest Oskari version, for example.

**Container technology** refers to packaging and isolating applications along with all their dependencies (libraries, configuration files etc.) into a single unit called a container. Tools like Docker and Podman help to create and run these containers. 

Containers can make it easier to develop, test, and deploy software. Containers also provide a consistent way to package and share software. Containers can be easily run in the cloud, yet they can also be run on one's own computer, making containers very portable. 

## Why run Oskari in a containerized image?

In Oskari, the benefits of using a containerized solution are similar to those in other software: using a container can make the developers' work easier if, for example, the developing team has a shared container solution of a software that is used for local Oskari development and testing. Another standardized container can be used for production use and intended for a specific cloud platform, making the maintenance and setting up of map services easier. 

Using a containerized version Oskari also tackles the issue where the development environment on a developer's machine doesn't match the server environment. Containers allow the same container to be run on a developer's machine and deployed to the server, maintaining consistency across different environments. 

Also, what makes containers attractive to some is the way the setting up of the software is done: the software can be downloaded as a single file and even a complex setup process can be made with a single command. 

In short, containers can simplify various processes, including the setup, development, and maintenance of software. And to clarify: one can create different containers for the same software — one for local testing, one for production use. If consistency across environments is needed, the same container can be run locally and deployed to the server.

Even though the cloud platforms usually try to make hosting containers easy, using Oskari in a container does not necessarily mean that the service should be moved to the cloud platform. The container solution can still be beneficial. 

![A decorative picture including Oskari and Docker logos on clouds. The original photograph by Vladimir Anikeev on Unsplash.](/resources/2025/oskari_cloud.png)
      
## Why run Oskari on a cloud platform?

In its simplest form, using Oskari in a cloud platform would mean hosting the service, for example, Microsoft's Azure or Amazon's AWS. The end user or the administrator of the service might not even notice the transition to the cloud platform. Oskari can be hosted on a cloud platform without being containerized.

When the service is used on a cloud platform, the additional tools of the platform become available to use. Different cloud platforms have different tools, such as bug reports that make it easier to find and fix bugs from the instance. If necessary, one can create different containers that include Oskari and Oskari-related services - or that have services provided by the cloud platform. These could include security tools, tools that restrict access to Oskari, and/or service monitoring.

In particular, the additional services offered by the platform provide several tools that make maintenance easier. For example, access management is easier, backups to the database and services can be quicker to implement and the available security tools simplify the monitoring of the security situation. Cloud services enable faster testing of application versions and platforms as setting up a new service requires mostly just clicks of the mouse in one’s web browser.

Clicking through menus in a web browser isn't the only way to set up new services, though. Cloud platforms can also be controlled by using Infrastructure as Code tools like Terraform or cloud provider CLI tools to set up the desired environment. 

The advantage of using the aforementioned kind of software is that one can write commands that tell the platform to create a server environment, install the containers selected, and configure other service-related settings. The same script (either unchanged or slightly modified) can then be used to set up the same service on another system. For example, if the service crashes, it can be shut down and quickly rebuilt using the script. 

The script can also be stored in a version control system, allowing one to track changes and reproduce the setup easily. This is often simpler and more reliable than trying to track every step taken when setting up the service through web browser forms.

## Further questions

If one plans to use Oskari on a cloud platform, several things have to be considered. How will the application's internal network traffic be handled? What resources and additional services will be deployed from the cloud platform? Where will the containers be stored? If old versions are kept, for how long and where? Will backups be taken of the entire database cluster and how often?

Although security management has been made easier in many ways by the cloud platform tools, listing vulnerabilities in AWS, for example, can be challenging at times. If there are, say, five Oskari instances in the same container and each has two security issues, the overall situation might look worse than it actually is and getting a quick overview of the situation might be challenging.

The outlook for service usage and its costs can also affect the cloud migration. Cloud platforms have multiple different pricing models, one of which is the on-demand model where the costs of the service are determined by its usage. The final price is also affected by the additional services purchased and the type of server is used. With dozens of processors and memory units available, the total number of variables affecting the price is large. When the service is up and running, one actually sees the functionality of the selected solutions for the instance and if the setup has to be changed - which could affect the overall cost of the service. For this reason, it is difficult to estimate the final price in advance.

The use of containers and the transition to cloud platforms also require policies at the organizational level. Some want to move all their services there, some are in the piloting phase, and some may not have even thought about it.

It should also be remembered that the development and updates of Oskari itself have also facilitated the development and maintenance of the software in all areas - whether it runs in a container, on a cloud platform, or not.