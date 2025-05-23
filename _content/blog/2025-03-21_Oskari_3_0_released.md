---
layout: post
title: 'Oskari version 3.0.0 is available!'
excerpt: 'New Oskari major version with Java version update'
date: 2025-03-21 16:00:00 +0200
categories: [developing]
tags:
  - blog
---

![A decorative picture for Oskari 3.0.0](/resources/2025/Oskari_300.png)

# 3.0.0 is here!

The new version was released 18th of March and it is available on [GitHub](https://github.com/oskariorg) and Oskari.org Maven repository. The sample application package has been updated on [the download page](https://oskari.org/download) and [the OSGeo website](https://download.osgeo.org/oskari/). As always you can take a peek at the latest release at **https://demo.oskari.org/**

## Java updated from 8 to 17

The release updates the major version as it will require more work (and manual migrations) than usual when upgrading any Oskari-based application. Oskari-server is now built with Java 17 (up from 8) and that has allowed us to upgrade some of the core libraries like GeoTools and Spring framework to their most recent versions. This also means that old Jetty 9 based servers will no longer be able to run the new version. We have changed the packaged server for our download to include Tomcat 10.1 instead. It doesn’t mean that you will need to switch your own installations from Jetty to Tomcat, but you will need a more recent version of Jetty to run Oskari 3.0 based applications. The server needs to be Jakarta EE 9 compatible servlet container as described on https://spring.io/blog/2021/09/02/a-java-17-and-jakarta-ee-9-baseline-for-spring-framework-6 and this also affects any application specific code that refers to javax namespace on the Servlet API.

## Changes to publisher and bundle definitions

While this version is mostly about updating the server-side dependencies, we managed to tweak some things on the frontend as well. Mostly on the publisher functionality, but also introduced a new way of defining “bundles” in Oskari. This also requires manual migrations on the frontend application but removes much of the boilerplate and complications of declaring bundles in Oskari. This should make future developers happier and makes things easier to document.

## Work continues

We have some recognized things we continue to work on:
-	The documentation still has plenty of references to Jetty, but we are working on it
-	The new version updated the routing API implementation to use DigiTransit API v2 as v1 is being shutdown shortly. We have identified a thing that we’ll need to hotfix for this, but if you are not using/providing the routing API, you don’t need to wait for this. Progress for this can be followed on GitHub: https://github.com/oskariorg/oskari-server/milestone/53?closed=1

## Release notes and upcoming events

You can see the compiled list of Release notes, Migration Guide and API changelog available on Oskari.org: https://oskari.org/documentation/docs/3.0.0/12-Changelog

Note the upcoming events for more news about Oskari 3.0 and beyond:
- https://oskari.org/blog/2025-03-07_Oskari_Developers_Day_2025
- https://oskari.org/blog/2025-03-11_Oskari_Community_Day_2025
