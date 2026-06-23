---
title: Examples of an Oskari stack
excerpt: "We’ll look into examples of an Oskari stack and give a couple of examples."
date: 2026-06-12 12:00:00 +0200
image: resources\2026\communityday2026_workshop.jpg
tags:
  - developing, news
---

# Overview

An Oskari stack is an assembly of tools and processes that starts from creation of spatial data and ends to viewing it in a web browser using Oskari. Between these two points there can be editing, saving, publishing and serving data. These processes can include automations, manual work, testing and different user rights/permissions. 

In this blog post we’ll look into an example of the Oskari stack and give a couple of examples.

## The initial setup

The workflow begins with spatial data creation. So naturally, the traditional Oskari stack begins with a desktop GIS software – such as QGIS or ArcGIS. If the data is collected in the field, a handheld GPS device or mobile application is also usually in use.

When the data has been created, it is usually saved to a database, especially in larger organizations. More often than not, there’s a PostgreSQL database with the PostGIS extension.

To get the map layers published in Oskari, a geospatial server such as GeoServer, is needed. The geospatial server is used to publish the created data as WMS and/or WFS services. Oskari can then fetch the layers via the APIs and allow the end-user to view the data. Note that the layers you use in your Oskari-based applications don't need to be hosted by you. Oskari is built for using data from multiple data providers, but if you only want to show data from your APIs, that is perfectly fine as well.

And et voilá, that’s the super simplified version of the Oskari stack. Next we’ll do the nitpicking and dive deeper into the Oskari setup.

![An example stack of Oskari infrastructure where data flows from desktop GIS software to database via a geospatial server to Oskari application.](/resources/2026/Oskari_example_stack1.png)

## Environments and separation

Organizations often separate responsibilities and environments to reduce risk and support development. The databases, for example, may be organized into test, staging, and production instances. GeoServer instances often mirror this separation so styles, permissions, and service configurations can be validated before being published to production. 

There may also be different GeoServers to publish different datasets maintained by distinct teams or systems. These services can be aggregated into the main Oskari instance so that it compiles data from these different GeoServers into one web mapping application.

Similarly to databases and geospatial servers, multiple Oskari instances are common. The organization may have a public portal compiling open data for external audiences, intranet or restricted instances for internal users, developing instances for trying out new features and versions, and apps based on map embeds that present only a curated subset of layers. This segmentation enables different audiences and use cases to coexist without compromising stability or security.

## Reducing risks

To reduce the risk, for example the user rights may vary during the process: some users are allowed to create data, others can publish the data to production, and others might act as the admins that finally publish the data to the Oskari instance. Not every user should have the same rights to create, edit, publish, or view layers. The user rights can be integrated into different systems so that the permission management is centralized.

Aside from the user rights, some WMS/WFS endpoints can be intentionally public and open, while others are protected by network restrictions or authentication to limit access. Clear responsibilities and well thought workflows reduce the risk of accidental data exposure or unintended changes in production.

One way to tackle risks is to use automation on some processes. ETL tools such as FME are commonly employed for transforming, validating, and synchronizing datasets across databases and environments. This can happen either on a scheduled or event-driven basis. Automated pipelines can update production PostGIS schemas, trigger GeoServer reloads, and ensure that the data shown in Oskari is up-to-date and valid.

Automating the monitoring of the services is not a bad idea either. A tool such as GeoHealthCheck, Grafana or CloudWatch can be set up to check if the database, GeoServer or Oskari instance responds. If it doesn’t give a required query in a required time, the application can send an alarm.

## The Oskari stack beyond Oskari

The many above-mentioned software applications and their products are not Oskari-only stack, but can be used by other applications, too. For example, GeoServer-published services are often consumed by other applications: other web mapping software can present the datasets or third-party clients may use them via their desktop GIS. 

Conversely, Oskari can incorporate external open-data layers directly from other organizations. 

An organization may therefore maintain several databases and GeoServers that serve different audiences or technical needs, with Oskari acting as one of several consumers that compile and present relevant layers according to audience and purpose.

![Another example stack of Oskari infrastructure which includes multiple software for data creation and editing, two databases (dev + cloud storage), two geospatial servers (dev and prod) and two Oskari instances (dev and prod).](/resources/2026/Oskari_example_stack2.png)

## Hosting and Scalability

Hosting choices reflect operational priorities. Entire stacks can run on an organization’s own premises for maximum control, or be deployed in cloud environments to gain scalability and managed infrastructure. 

Best practice typically involves maintaining separate infrastructure for development, testing, and production so updates and new services can be validated before reaching users. For larger organizations, a GeoServer cluster with caching and load balancing, combined with multiple Oskari instances tailored to specific audiences or themes, supports high availability and user segregation at scale.

## Conclusion

In sum, an Oskari stack is not a single monolithic design but a varied architecture. It can include all or some of the workflow of the organization’s GIS processes: the data creation tools, spatial databases, publishing services, and one or more Oskari instances for viewing and editing. 

The variations of the setup arise from organizational needs. Some might need separate environments for dev/test/prod, some may have plenty of automation and ETL processes such as FME and role-based permissions. Others may have one person to administer the whole process from the data creation to publishing and the maintaining of GeoServer and database. To conclude: the Oskari stack your organization needs depends on your use case. To see some existing use cases, check our Use cases page.