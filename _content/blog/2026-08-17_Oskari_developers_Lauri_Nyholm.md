---
title: 'Oskari developers: Lauri Nyholm'
excerpt: "We interviewed Lauri Nyholm from Advian Ltd. about his experiences in developing Oskari."
date: 2026-08-17 9:00:00 +0200
image: resources\2026\Lauri.png
tags:
  - developing, news
---

We interviewed Lauri Nyholm from Advian Ltd. He has been working for Advian Ltd. for a couple of years now and has a background in geoinformatics. He has extensive experience across different GIS projects, as well as in coding. Since 2025, he has been working with HSY's Oskari instances as both the main developer and service manager.

## Modernizing Oskari setup

"HSY has had Oskari instances for quite some time now. They had a different maintainer before the maintenance was transferred to us in 2025. We started our project by communicating with the previous maintainers and decided that modernizing the setup completely would be a good idea. HSY had reached the same conclusion, and we agreed to begin the work from there.

First, we created Docker images for each of HSY's Oskari environments and updated the versions using Docker. Now they run in Azure container apps and the setup is fully automated. At the same time we modernized the database and the GeoServers - GeoServers now also run as Docker images.

The GitHub repositories are now in sync with what is actually running in test and production. Each instance has its own repository so that both the frontend and backend are included. A Dockerfile is used to build and run the images. This makes it easier to update the Oskari instances more in real time as new versions are released.

We have a team of three people responsible for maintaining HSY’s Oskari instances, but over time it has increasingly become my project.

HSY’s public instances use Oskari's download-basket bundle. The bundle is not part of the Oskari core but is a community bundle. ((See the code for the City of Tampere for that bundle here.)[https://github.com/oskariorg/oskari-frontend-contrib/tree/master/bundles/download-basket])

## Looking ahead

"As a student at the Aalto university, we had a project course where we used Oskari. I’d like it to be clarified when a sample application is sufficient and when you need additional work to meet a specific use case. 

It may also be helpful to provide a ready-to-go software package that includes Oskari, GeoServer and a database. The documentation is really good at the moment, but getting started can be really hard for first-timers.

I don’t have any big wishes for Oskari’s future. The UI looks nicer after updating to newer releases, and the codebase has moved forward. I think that, for the broader benefit of Oskari, it would be good to see more commercial use of the software. Maybe Oskari could be used as the basis for a commercial product. That would bring more organizations and people around the software."