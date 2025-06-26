---
layout: post
title:  "Developing VäyläMappi - a customized Oskari RPC implementation"
excerpt: "The Finnish Transport Infrastructure Agency are developing their Oskari map services. "
date:   2025-06-26  10:00:00 +0300
categories: [blog]
tags:
  - blog
---

# Developing VäyläMappi - a customized Oskari RPC implementation

The Finnish Transport Infrastructure Agency is an expert agency with approximately 490  employees. The agency focuses on the planning, developing and maintaining road, rail and maritime transport infrastructure as well as the coordination of transport and land use. They are also responsible for arranging traffic control and winter navigation.

Spatial data is vital for them in their processes, such as planning, construction and transport, and asset management. Thousands of data sets in different processes must be easy to find, utilise and interoperable for both the Finnish Transport Infrastructure Agency's own experts and service providers and stakeholders. 

The agency also takes part in the Oskari’s Joint Development Forum and has been using Oskari map service for about a decade. During the past few years they have been developing their Oskari services, especially a customized RPC implementation called [Suomen väylät](https://suomenvaylat.vayla.fi/) that is open to the public. Now they are developing their internal Oskari geoportal service, VäyläMappi, to a RPC implementation similar to the Suomen väylät service.

![A screenshot of the Suomen Väylät map service.](/resources/2025/sv.png)
*A screenshot of the Suomen väylät map service. Notice the customized tool bars on the left and right sides of the screen.*

## The guiding principles behind the development of VäyläMappi 

Like many other organizations, the employees of The Finnish Transport Infrastructure Agency need to gather together datasets from various data providers. With Oskari, multiple data sources can be easily integrated into one map service. This means that the map layers viewed in Oskari can be from organization’s different data bases that can be either public or closed, and from the API’s of different organizations.

![A screenshot of the Suomen Väylät map service showing an ortophoto layer with road and rail network layers on top.](/resources/2025/sv_layers.png)
*Like many other Oskari instances in Finland, also Suomen väylät Oskari instance has background maps by the National Land Survey of Finland. Ortophoto by NLS FI with datasets by The Finnish Transport Infrastructure Agency on top.*

One of the reasons why VäyläMappi geoportal will be changed from Oskari geoportal to a RPC implementation is that the users of the public map service (Suomen väylät) have been pleased with the user experience of the map service. 

The agency also wants to clarify the information service layer. When as much information as possible is published through information services that aggregate data, information is easier to find.

## Oskari as a technological solution

Oskari has been in use for about a decade in The Finnish Transport Infrastructure Agency.  By using open source solutions in their systems, the agency can avoid vendor lock-ins both in software development and in creating customized solutions. 

On the other hand, it also creates pressure to manage and prioritize remediation of technical debt. When technical debt has been minimized, the life cycle of the software can be maximized. It also makes it easier to get tenders from as talented and committed suppliers from the market as possible. 

## Working together with National Land Survey of Finland

As mentioned [in our earlier blog post](https://oskari.org/blog/2025-04-04_Greetings_from_Developers_Day), The Finnish Transport Infrastructure Agency and National Land Survey of Finland collaborated on the updating of Oskari to the [new major version, 3.0, which was released in March 2025.](https://oskari.org/blog/2025-03-21_Oskari_3_0_released)

In late 2024 Oskari had some technical debt and the agency with their suppliers realized that these issues should be addressed before the development of the new instance began. They got in contact with Oskari’s coordinators in NLS FI and began planning on the joint development project that would be carried out in early 2025.

The project was a valuable investment for the agency. It enabled the further development of their map services and extended their life cycle. The timeliness of technologies also increases the attractiveness of participating in the Oskari’s further development in the market among service providers.

## Further development and new functionalities

So, much work has been already done to customize the RPC instance and also to develop the Oskari core itself. Yet the development of the new VäyläMappi instance will continue.

The new VäyläMappi requires authentication from its users and is intended only for internal use within the agency and their service providers. The customisations to the codebase will be made so that the maintenance and updating of the two instances will be as straightforward as possible. 

The agency has also plans for new functionalities. The map publishing tool will be developed to allow, for example, parameterization of URLs and other metadata of the layers. This would make importing map layers from the Suomen väylät instance to the developing environment of VäyläMappi. Other functionalities include allowing users to import their own datasets, enhancing the search functionalities, measuring terrain elevation profile and continuous location tracking.

![A screenshot of the custom search functionality in Suomen Väylät.](/resources/2025/sv_search.png)
*Suomen väylät has a custom search functionality which includes not only the location search but also search options for road numbers, features, materials etc.*