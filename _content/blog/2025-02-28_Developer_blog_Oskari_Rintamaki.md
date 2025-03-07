---
layout: post
title: 'Oskari developers: Oskari Rintamäki'
excerpt: 'We interviewed Oskari Rintamäki from Sitowise about his experiences in developing Oskari.'
date: 2025-02-28 11:00:00 +0200
categories: [developing, commercial support]
tags:
  - blog
---

![A photograph of Oskari Rintamäki](/resources/2025/Oskari_Rintamaki.png)

# Oskari developers: Oskari Rintamäki

Oskari Rintamäki has been working on Oskari projects the entire time he has been working at Sitowise. In practice, this means 5-6 years and about ten different projects.

He has had time to accumulate quite a lot of experience, and within the company questions about Oskari are usually directed to either Rintamäki or his colleague Marko Kuosmanen.

All Rintamäki’s projects have been public projects and more or less in public use. These include, for example, Oskari instances of the Finnish Heritage Agency, Finnish Environmental Institute, Finnish Transport Infrastructure Agency, Helsinki Region Environmental Services (HSY). There have been other projects as well, because at some point Rintamäki was working on more or less five different Oskari projects simultaneously. Many of these have been more or less customized implementations.

Now he is working on the Finnish Transport Infrastructure Agency’s Suomen Väylät service and its geoportal, which replaced by the Finnish Transport Infrastructure Agency’s download service. 

## Who does what

Back in the day when AWS or other cloud services were not in use, the developers in Oskari projects in Sitowise were mainly Rintamäki and Kuosmanen. Sometimes there were also other people in the projects who did development, setup or data management. In larger projects, such as with the Finnish Transport Infrastructure Agency, there have been a couple more developers or separately hired testers. 

Usually the work is divided so that the developers focus on development and database maintenance, but other processes are divided among other people. For example, AWS and CI work are managed by different people. Sitowise has an "Oskari team" that is formed by developers working on different Oskari -projects inside the company.

As of today, the application development and server work have mainly been the responsibility of Rintamäki and Kuosmanen. Rintamäki also does GeoServer work, for example in the development of SeutuMassa (one of the Oskari services of HSY).

## Developing new features

In developing Oskari, Rintamäki thinks it is important to consider how much Oskari is generalized versus what resources are available to make things more developer-specific.

The RPC implementation of Väylä has almost 500 map layers which are published via the map publishing tool as a customized embedded map. At that scale, a JSON tree had to be made for attributes and included in some layers as some of the map layers are sorted by tags rather than map layer groups. In terms of code, this is quite straightforward, but adding filters and tags has been challenging in terms of maintenance.

The implementation also has many objects that nest within each other. To make the work easier, Rintamäki developed his own bundle, which can be used to manage various filters and which make it easier to maintain the service with a large amount of data. 

Rintamäki has developed bundles for Oskari instances before, too. He says that there is also always a discussion with the procurers of the project whether things done in the project could also be brought into Oskari's core. In these cases, either Rintamäki or another project employee has been in contact with NLS FI.

Often the possibilities of bringing something into the core also depend on the client's budget and other factors. Väylä has a high interest in supporting general development and improving Oskari. In some smaller projects, changes to Oskari's core may not be made because they would have required extra work.

The notification bundle that Rintamäki worked on was brought into the core of Oskari. The bundle related to Väylä’s Oskari instance is not included in the core because it was made specifically for the Väylä implementation and therefore cannot be distributed generally. Rintamäki thought about how it could have been made more general-purpose, but in that case it was not done.

Now Rintamäki is involved in the upgrade of the Java version of Oskari, which is a joint development project between NLS FI and the Finnish Transport Infrastructure Agency. 

## Helping new developers

Rintamäki says that setting up Oskari is quite easy at a basic level. At one point Rintamäki gave new Oskari developers in Sitowise a short "training", where they went through the basics. 

According to Rintamäki, the most confusing thing for new developers has been creating bundles because the process of creating a new bundle has been unclear. There may also have been some confusion with the RPC implementation. Now the RPC implementation is not really used in Sitowise's Oskari projects other than Väylä.

In general, the challenges faced by new developers have been related to the lack of documentation: not knowing where to find certain information or that the documentation had outdated content or other shortcomings.

“There are a lot of Oskari-specific things that you need to know or understand, after which the development becomes easier. Compare it to a React project: it only has front-end development, it uses common libraries and has a million answered questions online. If such a developer is going to develop Oskari, then there is a learning curve. If you create a new bundle, you have to understand where something goes and where you access what things” comments Rintamäki.

He also points out that those who have been working with Oskari might have stronger opinions about the software. “It used to be much more difficult with Oskari before. Now it's a much easier application to maintain and develop. I don't think the newer developers have a huge resistance to it.”

Recently, questions have been related to Oskari development in general, such as flyway or what can be done with properties. Now if Rintamäki cannot help straightaway, he points the other developers to [Oskari’s Gitter channel](https://app.gitter.im/#/room/#oskariorg_chat:gitter.im).

## Practical examples

Rintamäki reminds that it is normal that at first one doesn’t understand everything at once or so thoroughly.

“The main thing with everything that comes to a coder is that with any library, the basic stuff can be found, but if you start customizing more, if you don't use ready-made bundles and such blocks but start building on top of - on the side or to the side, however you want to think - then it can be challenging to find the information that is needed. Clear instructions and practical examples are the most important things in application development, at least for me. If how something works is written in text, it doesn't necessarily tell you as well as the practical examples. They are important.”

Rintamäki also wishes that all the GitHub repositories of public Oskari services would be listed somewhere. It would give developers easy access to different Oskari implementations from where they could study what others have done. For community made bundles there’s the front-end contrib repository that can be found [here](https://github.com/oskariorg/oskari-frontend-contrib/).
