---
title: Highlights from Community Day 2026
excerpt: "The Oskari community gathered in Helsinki to reflect on 2025 and plan for the future."
date: 2026-05-29 15:00:00 +0200
image: /resources/2026/communityday2026_workshop.jpg
tags:
  - event, news
---

It’s that time of year again when the Oskari community gets together — not remotely, but face-to-face in Helsinki.

Like before, Oskari Community Day brought together about 20 participants from multiple organizations. The program had three parts:
- Welcoming words and a quick recap of what changed in Oskari over the past year
- Presentations from Oskari developers
- A workshop on improving the Oskari Joint Development Forum, selecting Community members, and closing remarks

## What’s been happening with Oskari since the last Community Day?

Oskari’s technical coordinator Sami Mäkinen gave an overview of the latest Oskari releases and their main changes. At the 2025 Community Day the current major release was Oskari 3.0; since then four minor releases have followed. These include many library updates, improvements that simplify developing and configuring Oskari, and enhancements to admin functionalities.

To make updating and maintenance easier, several changes are underway. First, legacy jQuery-based components are being migrated to React. Second, My Datasets (userlayer) and My Places (myplaces) functionalities will be replaced by a new myfeatures bundle (user-friendly name of the functionality still TBD). Community Day participants got to try out the new tool during the event and provided feedback to the Oskari core developers at NLS FI. Third, the analysis functionality was removed from the Oskari core because it saw little use and was burdensome to maintain.

![Oskari's technical coordinator, Sami Mäkinen, presenting](/resources/2026/communityday2026_sami.jpg)

These are only some of the changes from the past year. For the full list of changes, bug fixes, new features, and improvements, see the Changelog. One more note for Oskari map-service admins: the documentation now includes a new chapter, [Usage instructions, which contains, for example, instructions for admins to add map layers](https://oskari.org/documentation/docs/unreleased/9-Usage-instructions).

## Developing Oskari — three perspectives

Three companies presented on developing Oskari. Ilpo Tammi (Ubigu Ltd.) spoke about automating Oskari infrastructure while also discussing other Oskari-related topics. Timo Aarnio (Gispo Finland Ltd.) discussed an use case where a customized Oskari application from a public GitHub repo was forked and adapted for a new client. And finally Mikko Kolehmainen (Sitowise Ltd.) presented a tool for managing layers across many Oskari instances.

Ubigu maintains the Oskari instances for the city of Tampere. They created a Docker image of the Oskari instance and automated infrastructure builds. The base repository and usage instructions are available [in the city of Tampere’s GitHub repository.](https://github.com/Tampere/tampere-oskari-server-extension/tree/master/backend)

![Ilpo Tammi, the CEO of Ubigu Ltd., presenting](/resources/2026/oskaricommunityday2026_ilpo.jpg)

Gispo’s team has been developing an Oskari project that makes heavy use of RPC functionality. Their map service is a highly customized Oskari implementation tailored to varied end-user needs. During development, three new features were contributed to the Oskari core, and there are also discussions about contributing a new feature for styling vector layers.

Sitowise presented a layer-management tool that helps administrators copy, move, and delete layers between environments. The tool facilitates comparing and transferring layers among development, testing, and production environments across different Oskari instances. At the moment the tool is not publicly available as it is specifically designed for their client’s needs.

## Wrapping up

The day concluded with a lively workshop on improving the Oskari Joint Development Forum and identifying community needs and hopes. Some ideas (for example, example stacks for Oskari) are already being implemented.

New community members were selected, too. The winners of the vote were Gispo Finland Ltd. and Ubigu Ltd. We also extend warm thanks to last year’s Community member, the city of Joensuu, and hope to stay in touch.

Next is Developers’ Day in the autumn, details on time, place, and program will follow. If you have ideas for the event, email us at info@oskari.org.
