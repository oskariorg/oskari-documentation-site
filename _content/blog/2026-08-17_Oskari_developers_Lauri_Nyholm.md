---
title: 'Oskari developers: Lauri Nyholm'
excerpt: "We interviewed Lauri Nyholm from Advian Ltd. about his experiences in developing Oskari."
date: 2026-08-17 9:00:00 +0200
image: resources\2026\Lauri.png
tags:
  - developing, news
---

Oskari developers: Lauri Nyholm

We interviewed Lauri Nyholm from Advian Ltd. He has been working for Advian Ltd. for a couple of years now and has a background in geoinformatics. He has extensive experience across different GIS projects, as well as in coding. Since 2025, he has been working with HSY's Oskari instances starting as a lead developer and later taking on the service manager role.

Modernizing Oskari setup

"HSY has been using Oskari for years. In 2025, the maintenance of their Oskari instances was transferred to us. During the initial discussion we reached an agreement with HSY to modernize their Oskari environments and the modernizing work began in the fall of 2025. 

The first phase of the modernization was to containerize Oskari and GeoServer to make them easier to maintain. This phase also included updating the Oskari version with multiple patches and reorganizing the GitHub repositories. Containerization was done using Docker. 

The GitHub repositories are now in sync with what is actually running in test and production. 
Each instance has its own repository including both the frontend and backend. A Dockerfile is used to build and run the images. This makes it easier to update the Oskari instances more in real time as new versions are released.

We have a team of three people responsible for maintaining HSY’s Oskari instances, but over time it has increasingly become my project. It has been a nice experience getting to understand more about Oskari and the whole tech stack around it in general.

HSY’s public instances use Oskari's download-basket bundle. The bundle is not part of the Oskari core but is available as a community bundle. ((See the code for the City of Tampere for that bundle here.)[https://github.com/oskariorg/oskari-frontend-contrib/tree/master/bundles/download-basket])

Looking ahead

"I first got to work with Oskari during my master’s studies at Aalto university. Based on the experiences I’ve had with Oskari I think the documentation could be even more beginner-friendly and make a clear distinction of when the sample application is sufficient versus when it’s necessary to build from source. 

It may also be helpful to provide a ready-to-go software package that includes Oskari, GeoServer and a database. The documentation is really good at the moment, but getting started can be really hard for first-timers.

I don’t have a “silver bullet” for Oskari’s future. The UI looks nicer after updating to newer releases, and the codebase has moved forward. I think that, for the broader benefit of Oskari, it would be good to see more commercial use of the software. Maybe Oskari could be used as the basis for a commercial product. That would bring more organizations and people around the software."

You can read more about HSY's Oskari instances in our Use cases section:
- (HSY's open map service)[https://www.oskari.org/blog/HSY-Open-Map-Service]
- (SeutuMassa service)[https://www.oskari.org/blog/SeutuMassa-service]

You can see the source code (in GitHub)[https://github.com/hsy-kuntayhtyma]
