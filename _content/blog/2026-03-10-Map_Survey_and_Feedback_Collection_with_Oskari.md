---
layout: post
title:  "Map Survey and Feedback Collection with Oskari"
excerpt: "How to use interactive maps to collect feedback for urban planning."
date:   2026-03-10  13:00:00 +0300
categories: [blog]
tags:
  - blog
---

# Map Survey and Feedback Collection with Oskari

Since 2021, the city of Tampere has been developing, together with Ubigu Ltd., a comprehensive map survey and feedback collection tool that leverages Oskari. The tool allows city employees to easily create surveys that combine open-ended questions with interactive maps, where end users can view the plan in question and add their own notes directly to the map. The city of Oulu has also used the tool, although its use has not been as extensive as in Tampere.

The tool is designed to be intuitive and accessible for users who may not have expertise in mapping or surveying. The interface has been improved over the years to make it as easy as possible to use for both survey creators and respondents. The tool also supports mobile access, allowing users to interact on smaller screens and improving accessibility for all users.

## Use Cases and Benefits

The city of Tampere has had the Oskari map service running for several years. They use the service to share map layers with residents, city employees and stakeholders. Since Oskari was already widely used and familiar, it was natural to build a feedback tool for city planning that could utilize Oskari and its RPC capabilities.

The main use case for the tool is to create surveys that collect feedback and opinions from residents of the city of Tampere regarding planning projects. On desktop devices, the survey interface uses a split-screen layout, with text and questionnaires on one side and an interactive map or image on the other.

In the text area, the survey creator can provide background information about, for example, a draft plan and attach photos or other supporting elements. The map interface is an embedded map from the city of Tampere’s Oskari instance. The map layers may include, for example, draft local plans or other layers relevant to city planning.

![An example view of the tool from an old survey](/resources/2026/Tampere_tool_1.png)

When a survey is published, residents can submit feedback either by answering open-ended questions or by adding point, line, or polygon features with notes directly on the map. The information provided by users on the map is saved in the city of Tampere’s databases and can be accessed for further analysis and decision-making.

Over time, the data naturally accumulates as more surveys are created and answered. This enables the city to make informed decisions based on input from residents and local authorities, and to identify locations that residents consistently highlight as important or noteworthy. The data is stored in GeoPackage and CSV formats and can also be viewed on a map within the tool’s user interface by the survey creators.

## Future development and improvements

Like Oskari itself, the feedback tool continues to evolve through ongoing development aimed at improving both user experience and functionality for survey creators and respondents. Key users in the city of Tampere are committed to making the tool increasingly useful and accessible.

Future improvements may include additional features, an enhanced mobile user experience, and improved accessibility. As the broader Oskari community actively contributes to the development of o, tools built on top of it will also continue to benefit from these improvements and remain relevant in the future.

## Conclusion

The tool has significantly enhanced the planning and feedback process for the city of Tampere. It makes it easier for city employees to collect feedback and for residents to participate in and contribute to urban planning.

The tool supports data-driven decision-making by providing accurate, accessible, and location-specific feedback. This helps ensure that planning decisions are informed and effective. The continued development of Oskari also ensures that the tool remains useful and beneficial for its users.

The tool is open source, and the source code is available [on GitHub](https://github.com/Tampere/vuorovaikutusalusta).
