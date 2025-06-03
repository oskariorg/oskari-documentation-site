---
layout: post
title: "Highlights from The Oskari Community Day 2025"
excerpt: "The Oskari community came together for its annual meetup.."
date: 2025-05-30 11:00:00 +0200
categories: [community]
tags:
  - blog
---

![A photograph from the event. Taken by Riikka Kivekäs.](/resources/2025/oskari_community_day_2025.jpeg)

# Highlights from The Oskari Community Day 2025 

Oskari Community Day had 20 participants from various organizations this year. Some of them were just implementing Oskari, some were familiar faces from the JDF and some were new faces who had got bitten by the Oskari bug. Like every year, we had the joy to listen to several interesting presentations during the afternoon and share experiences with other people and organizations using Oskari.
The event began with a demo of the latest Oskari 3.0 release by the technical coordinator of Oskari, Sami Mäkinen. The development of the new version was done together by The National Land Survey of Finland and The Finnish Transport Agency and their consultants (Sitowise). The primary motivation for the new release was to upgrade the Java version from 8 to 17 and address security concerns. Other changes included migrating the map publishing tool to React and simplifying the creation of new bundles. For those who are eager to know more, we have covered [the basics of 3.0 in our earlier blog post](https://oskari.org/blog/2025-03-21_Oskari_3_0_released) and [in our blog post about the Developers' Day](https://oskari.org/blog/2025-04-04_Greetings_from_Developers_Day). 

## Where does Oskari fit within the organization's geospatial infrastructure?

One of the presentations focused on how Oskari interacts with the geospatial processes and other software of the organization. NLS FI, City of Joensuu, Lounaistieto and Finnish Transportation Agency each shared insights to their geospatial infrastructure.
In many cases the basic idea is using the Oskari geoportal to view map layers that are published via various APIs by the same organization. But as the presentations showed, the selected solutions can vary quite a bit. Some organizations allow users to log in and add their own map layers, others use an Oskari RPC as a map service on the side of the geoportal.

Lounaistieto, for example, uses quite a basic Oskari geoportal that allows the users to add their own datasets and publish their own maps via the service. The service contains data about various themes from dozens of data producers, including hiking routes and services of both the public and private sector. They also share plenty of map data themselves using GeoServer - this data is also available in their geoportal. They also have RPC implementations using published maps from their geoportal, such as [Virma](https://virma.lounaistieto.fi/).

The City of Joensuu uses Oskari to bring together data from various sources, mostly within their own organization, but also from many other data producers. Technically, the sources include their own Municipal Information System that is based on Trimble Locus, data from NLS FI and Finnish Environmental Institute, and their own GeoServer instance. In total the city has published around 300 map layers in Oskari.

National Land Survey, on the other hand, has 5 separate Oskari geoportal instances and, in addition, several map services that utilize the RPC functionality and are published from one of these geoportals. The most critical data used in their  Oskari instances is produced within the organization, yet in numbers most of the map layers come from outside sources. Of course, maintaining such a vast amount of layers requires a tight scrutiny where the availability of layers is monitored.
Minna Huovinen from The Finnish Transport Agency gave a presentation about the development process of their Oskari service, VäyläMappi.

## Where to find information and support for Oskari? 

Community coordinator Sini Pöytäniemi shared an overview of what has been happening in Oskari communications in the past year.
In autumn 2024 the brand new Oskari.org community support website was released. Not only was the whole layout and code base reworked, much of the information on the site was also updated if not revised completely. Plenty of work has also been done to improve the documentation, which has been completely restructured and in large parts updated and expanded. The accessibility of the site has been evaluated and improved, too.

A new blog post is being written on a monthly basis and the topics cover not only the latest updates to the software, but also information about the upcoming Oskari events and topics that have been brought up in the Oskari JDF.

Even though Oskari.org aims to be the main source for all things Oskari, we also have other communication forums. Since January, Oskari has been found in social media in [an open LinkedIn group (Oskari - open source)](https://www.linkedin.com/groups/13103184/) where we will tell what's happening in the website or in Oskari in general. [Gitter chat](https://gitter.im/oskariorg/chat) is a more code oriented forum for those who develop Oskari. And finally we have [Oskari-user mailing list](https://lists.osgeo.org/mailman/listinfo/oskari-user) where we will tell, ie. about the updates and what's happening on the site.

## Wrapping up

During the Community Day the new community members for the JDF were selected: Ubigu and the city of Joensuu - more on this will follow later on here in our blog, too!

All in all, the event was inspiring, and the presentations sparked interesting discussions. A big thank you to everyone who joined, presented, asked questions, or just dropped by to listen. See you again in the next Oskari meeting!

![A photograph of the Oskari Otter. A photograph by Riikka Kivekäs.](/resources/2025/oskari_otter.jpeg)
The good old Oskari otter was also present in the event.