---
layout: post
title: "Greetings from Developers' Day 2025!"
excerpt: "Oskari developers got together in April to share information and experiences about working with Oskari."
date: 2025-03-07 11:30:00 +0200
categories: [developing, event]
tags:
  - blog
---


# Greetings from the Developers' Day 2025

Oskari Developers' Day was held on April 1st in Espoo, at Sitowise's facilities. There have been developer meetings before, but some years have passed since the last one. The idea of ​​the event was to get Oskari developers both new and old to get together to share information and experiences about working with Oskari. Although some of the participants were already familiar with each other, they did not necessarily know about the Oskari use cases and new ideas they had been working on.

The developer meeting had a total of 15 people from different organizations. There were the Oskari team from NLS FI as well as developers and other people working on Oskari projects from Sitowise, Siili, Ubigu and Gispo. Few of the senior developers had been working with Oskari for about ten years, while the newer ones had no Oskari expertise.

The program of the event consisted of presentations that reviewed various Oskari-related development projects and work related to the new 3.0 version. In the afternoon, participants were able to try out the local installation of Oskari's geoportal and RPC functionalities.

## Oskari 3.0 and React migration

Oskari's technical coordinator Sami Mäkinen presented at the beginning of the event what was new in Oskari's new major release. Of course, the biggest thing in the new version is the upgrade of the Java version from 8 to 17, in addition to which many background libraries have been updated. Many of the old jQuery components have been removed from the front-end and replaced with React.

A major leap was also that creating bundles was made significantly easier. Now a bundle can be just one .js file, while previously creating a bundle required creating different files in different locations. The new example bundle also has a lot of comments along with the code, so that creating bundles would be clearer for new developers. (See [the new SampleInfoBundleInstance.js file in GitHub](https://github.com/oskariorg/sample-application/blob/master/bundles/sample-info/SampleInfoBundleInstance.js))

Pekka Helesuo from Siili presented the changes made to the map publisher. The old jQuery code has been converted to React in many parts and the documentation on the subject has also been updated regarding the changes.

However, jQuery can still be found in Oskari, and for example, the Drag and drop-based moving of tools in the map publisher has been implemented with jQuery. However, the React migration was advanced so much that the work on Oskari 3.0 is at a fairly good stage and many parts have been completed as a good whole. The abandonment of jQuery will continue with the following updates.

The Changelog for version 3.0 can be seen in its entirety here: [front-end](https://github.com/oskariorg/oskari-frontend/blob/master/ReleaseNotes.md), [server](https://github.com/oskariorg/oskari-server/blob/master/ReleaseNotes.md)

## OAuth 2 and EntraID login to Oskari

Ubigu has maintained and developed the Oskari instances of the City of Tampere for a long time. Janne Heikkilä presented the OAuth 2 and EntraID login to Oskari at the developer day. In practice, the same credentials that the user uses to log in to other internal systems in Tampere are used as well for Oskari.

In Oskari, users have been given roles and different user groups have been created, and the add-on already recognizes the user's role during the login phase. So if someone does not have the authority to log in to their Oskari instance at all, the add-on checks this during the login phase and shows an “Access denied” notification.

Tampere is also updating their instances to 3.0, and are planning to make the add-on to be generally available in Oskari core. [The source code for the add-on can be found on GitHub](https://github.com/Tampere/tampere-oskari-server-extension)

![A photograph where participants of the event listen to a presentation.](/resources/2025/DevDay_1.jpeg)

## Extending the RPC functionality

In addition to Oskari's geoportal, RPC implementations (map publications) are often used. The best-known examples are probably Kalastusluvat.fi and Väylä Map. RPC solutions are used not only in individual map publications, but can be also used as the organization's official Oskari map service instead of a traditional Oskari geoportal. The RPC implementation enables the service to be developed differently compared to a geoportal, for example in terms of appearance and functionality.

Timo Aarnio spoke about the RPC functionalities developed in Gispo's Oskari project. During the project they had to add more functions to RPC, because the existing ones were not sufficient for the customer's needs. For example, a new RPC function `getGroupsWithLayerIds()` was developed in the project that returns the map layer group hierarchy including map layers on those groups. This enables one’s own implementation of the map layer menu, and returns only those map layers that have been selected on the embedded map and which the user has access to. Another functionality developed uses the description information of map layers as a lightweight version of the layer metadata, which means that a metadata service (such as CSW) is not needed.

The code for the functions is available on GitHub and has also been imported into Oskari 3.0:
https://github.com/oskariorg/oskari-frontend/pull/2815
https://github.com/oskariorg/oskari-frontend/pull/2807

## CSW API for showing metadata

Sitowise has been involved in the maintenance and development for many Oskari instances for several organizations. One of their clients needed to publish map layers that are only visible to some of the service's logged in users. This is of course easily done in Oskari using user roles to restrict access to certain layers, but the requirement also applied to the metadata of the layers. The metadata needed to be somewhere else than in the public metadata catalog Paikkatietohakemisto , that contains public metadata for spatial data in Finland and which is usually used as metadata source for Oskari-based geoportals showing data from Finland. 

Arttu Pietarinen from Sitowise presented the process where a CSW plugin was installed to GeoServer. The plugin can be used to provide metadata for layers in GeoServer as a CSW service. CSW is an interface in accordance with the INSPIRE directive that provides metadata according to the standard. Both the layers intended for internal use and their metadata can be thus published through the same GeoServer. Through the Oskari admin user-interface, admin users can define a `metadataURL` attribute for layers that can be used to switch the metadata source for that layer to a custom one. When the end-users look at the layer metadata, it is then fetched from either the layer specific CSW service or defaulted to the globally configured CSW service (usually Paikkatietohakemisto in Finland).

## Oskari 3.0. updating project between Sitowise, Finnish Transport Infrastructure Agency and MML

The participants of Developers’ Day also heard about the developers' experiences with the co-operation of two separate software development teams across two organizations, working together to get everything ready for the Oskari 3.0 released in March. The work involved four people and testers from the National Land Survey of Finland, as well as two developers from Sitowise and Sitowise's own tester.

The collaboration was based on the mutual needs of NLS FI, Finnish Transport Infrastructure Agency and Sitowise. The National Land Survey of Finland needed to update the Java and Spring major versions of Oskari, while Sitowise has several Oskari instances under maintenance and development, including the Finnish Transport Infrastructure Agency's Oskari project, where concerns were raised about Oskari's security vulnerabilities. Major updates usually contain non-backwards compatible changes, and via the joint project, Sitowise was able to help with the updates for Oskari 3.0 and migrate the Oskari-based services that they are maintaining, too.

Discussions about the joint project between the parties began in the fall of 2024, and the project itself began in mid-January 2025. Sami Mäkinen from NLS FI made a preliminary plan, which was varied as necessary, and the team had a daily meeting every day to monitor the progress of the updates.

The update was carried out as a project, in which an attempt was made to tie the teams as closely as possible to the updating. Arttu Pietarinen, who presented the joint project, was particularly happy about the project-based working method which made the entire process easier: The National Land Survey of Finland and Sitowise had their own teams and a common goal. The intensive working method, in which employees were tied to the project, also lowered the threshold for asking for help from each other. Problems encountered in the updates and their solutions were also easily found, as Sitowise's developers imported the changes directly into the Väylä Map service.

![A photograph where participants of the event listen to a presentation about updating Oskari.](/resources/2025/DevDay_2.jpeg)

## The Oskari geoportal and RPC implementation workshops

The afternoon of the Developer Day consisted largely of workshops, where some of the participants tried out the local setup of the geoportal and the RPC implementation commands. During the workshops and in general at the event, there was also a lot of sharing of experiences about Oskari development and projects (as well as everything else from family holidays to hot news topics) in between the presentations.

The workshops were scheduled until 4 PM, but the local geoportals were already up and running a bit after 3 PM. Although there were problems, for example, with installing the correct Java version or with which port the database opens, the problems were solved with the help of Sami and other Oskari experts present. So everyone got home a little earlier than planned, and based on this experience, a similar event could be in order next year as well.
