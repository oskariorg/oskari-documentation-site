---
title: Examples of Oskari in Geospatial Infrastructure 
excerpt: "We’ll explore the software needed from creating and publishing data to viewing it in Oskari."
date: 2026-08-10 9:00:00 +0200
tags:
  - developing, news
---

# Overview

An Oskari stack is an assembly of tools and processes. In this case, we’ll start from creating the spatial data and end in viewing it in a web browser using Oskari. Between these two points there can be editing, saving, publishing and serving data. These processes can include automations, manual work, testing, and defining different user rights/permissions for different users that work with the data. We’ll also present a couple of different examples of geospatial infrastructure of organization including Oskari.

## The initial setup

In order to publish data in Oskari, we need spatial data. Oskari can be used to view data of other organizations, but for this blog post we’ll start with creation of the organization's own dataset. Thus we begin with spatial data collection. 

If an organization collects its own datasets, a desktop GIS software such as QGIS or ArcGIS is required. If the data is collected in the field, a handheld GPS device or mobile application can also be used.

When the data has been created, it is usually saved to a database, especially in larger organizations. By far the most common spatial database is PostgreSQL database with the PostGIS extension. PostgreSQL is a natural choice if the organization prefers open source in its software choices.

To get the map layers published in Oskari, a geospatial server such as GeoServer, is needed. Like postgreSQL, GeoServer is also open source. The geospatial server is used to publish the created data via a service such as WMS and/or WFS. Oskari can then fetch the layers via the APIs and allow the end-user to view the data. Note that the layers you use in your Oskari-based applications don't need to be hosted by you. Oskari is built for using data from multiple data providers, but if you only want to show data from your APIs, that is perfectly fine as well.

Now that you have a desktop GIS, database and server (and/or fetch data from other APIs as well) with your Oskari - et voilá, that’s one version of a geospatial infrastructure with Oskari. Next, we’ll scrutinize the setup and work through the details.

![An example stack of Oskari infrastructure where data flows from desktop GIS software to database via a geospatial server to Oskari application.](/resources/2026/Oskari_example_stack1.png)

## Environments and separation

Organizations often separate responsibilities and environments to reduce risk and support development. The databases, for example, may be organized into test, staging, and production instances. GeoServer instances often mirror this separation so styles, permissions, and service configurations can be validated before being published to production. 

There may also be different GeoServers to publish different datasets maintained by distinct teams or systems. These services can be aggregated into the main Oskari instance so that it compiles data from these different GeoServers into one web mapping application.

Similarly to databases and geospatial servers, multiple Oskari instances are common. The organization may have a public portal compiling open data for external audiences, intranet or restricted instances for internal users, developing instances for trying out new features and versions, and apps based on map embeds that present only a curated subset of layers. This segmentation enables different audiences and use cases to coexist without compromising stability or security.

## Reducing risks

Because data passes through several processing stages, mistakes can happen if users access the wrong data or perform actions they shouldn’t. Role-based permissions help reduce these risks: some users are allowed to create data, others can publish the data to production, and others might act as the admins that finally publish the data to the Oskari instance. Not every user should have the same rights to create, edit, publish, or view layers. The user rights can be integrated into different systems so that the permission management is centralized.

Beyond user permissions, the system should also account for other risks and ways to mitigate them. Some WMS/WFS endpoints can be intentionally public and open, while others are protected by network restrictions or authentication to limit access. Clear responsibilities and well thought out workflows reduce the risk of accidental data exposure or unintended changes in production.

One way to tackle risks is to use automation on some processes. ETL tools such as FME or GDAL are commonly employed for transforming, validating, and synchronizing datasets across databases and environments. This can happen either on a scheduled or event-driven basis. Automated pipelines can update production PostGIS schemas, trigger GeoServer reloads, and ensure that the data shown in Oskari is up-to-date and valid.

Automating the monitoring of the services is not a bad idea either. A tool such as GeoHealthCheck, Grafana or CloudWatch can be set up to check if the database, GeoServer or Oskari instance responds. If it doesn’t give a required response in a required time, the application sends an alarm.

## The Oskari stack beyond Oskari

The applications and outputs described above aren’t exclusive to Oskari infrastructure - other applications can use them too. For example, GeoServer-published services are often consumed by other applications: other web mapping software can present the datasets or third-party clients may use them via their desktop GIS. 

An organization may therefore maintain several databases and GeoServers that serve different audiences or technical needs, with Oskari acting as one of several consumers that compile and present relevant layers according to audience and purpose.

![Another example stack of Oskari infrastructure which includes multiple software for data creation and editing, two databases (dev + cloud storage), two geospatial servers (dev and prod) and two Oskari instances (dev and prod).](/resources/2026/Oskari_example_stack2.png)

## Hosting and Scalability

Hosting choices reflect operational priorities. Entire stacks can run on an organization’s own premises for maximum control, or be deployed in cloud environments to gain scalability and managed infrastructure. 

Best practice typically involves maintaining separate infrastructure for development, testing, and production so updates and new services can be validated before reaching users. For larger organizations, a GeoServer cluster with caching and load balancing, combined with multiple Oskari instances tailored to specific audiences or themes, supports high availability and user segregation at scale.

## Conclusion

In sum, an Oskari infrastructure is not a single monolithic design, it can take many different forms. It can include all or some of the workflow of the organization’s GIS processes: the data creation tools, spatial databases, publishing services, and one or more Oskari instances for viewing and editing. 

The variations of the setup arise from organizational needs. Some might need separate environments for dev/test/prod, some may have plenty of automation and ETL processes such as FME and role-based permissions. Others may have one person to administer the whole process from the data creation to publishing and the maintaining of GeoServer and database. To conclude: the Oskari stack your organization needs depends on your use case. To see some existing use cases, check our [Use cases page](https://oskari.org/discover/use-cases).

