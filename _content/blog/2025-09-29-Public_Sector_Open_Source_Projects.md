---
layout: post
title:  "Public Sector Open Source Projects – How is development organized?"
excerpt: "An guest blog on the development and use of Open Source Software."
date:   2025-09-29  11:00:00 +0300
categories: [research]
tags:
  - blog

---

Johan Linåker is a Swedish Senior Researcher at [RISE Research Institutes of Sweden](https://www.ri.se/en/person/johan-linaker) and Adjunct Assistant Professor at [Lund University](https://portal.research.lu.se/sv/persons/johan-lin%C3%A5ker). He has done research on Open Source Software projects, including their use in the public sector. In 2024 he interviewed Sini Pöytäniemi and Sami Mäkinen from the National Land Survey of Finland about Oskari. 

This guest blog summarizes his main findings. [Read the full research here](https://ri.diva-portal.org/smash/get/diva2:1999251/FULLTEXT01.pdf). Johan Linåker's other OSS-related publications can be found [on the website of RISE Researche Institutes of Sweden](https://www.ri.se/en/person/johan-linaker).

![A photograph of Johan Linåker.](/resources/2025/johan_linaker.png)

# Public Sector Open Source Projects – How is development organized?

While the practice and process of Open Source Software (OSS) development are well explored in industry and general community contexts, much less is known about how OSS development actually happens within the public sector—specifically, in projects developed and governed by Public Sector Organizations (PSOs).

To shed light on this, we recently examined six mature examples of public sector OSS projects. These were identified by crawling various public sector OSS project catalogs from Italy, France, the US, Denmark, Finland, and Sweden. Oskari was one of the surveyed projects.

Our findings reveal that 80% of development activity is typically concentrated among just 5–15 developers. There is a clear preference for local and national service suppliers, with an emphasis on building trusted, long-term relationships. Processes for development, quality assurance, and coordination are usually formally defined and quite rigid. The OSS produced in these contexts is generally of high quality and stability.

We identified two main clusters of public sector OSS projects, based on how development is sponsored by the involved PSOs:

## Centralized Sponsorship

Here, the main development work is carried out or sponsored by one or a few resourceful PSOs. The OSS often originates from these main PSOs, showing similarities to vendor-led OSS projects. In these cases, the software serves as a business-critical use case, justifying dedicated development and sponsorship. The community size tends to be limited and is dependent on the use case and complexity of the OSS. The rationale for open sourcing is often tied to intentions of encouraging reuse and growing the community. However, a high level of dependence on a central PSO poses a sustainability risk for these OSS projects.

## Decentralized Sponsorship

In this model, development is carried out through co-funded and collaborative procurement of development and maintenance from suppliers. There is a dependency among the PSOs within the community to collect the necessary funds for sponsorship. However, there is also a risk of dependency on single service suppliers, which can threaten sustainability—whether due to emerging lock-in or a supplier changing their business focus.

## Looking at Oskari specifically

A concrete example of centralized sponsorship is Oskari, with the National Land Survey of Finland (NLS FI) serving as its main sponsor since the project was initiated in 2013 as the foundation for the NLS FI's national geoportal. Today, the project is relatively mature, especially compared to many other public sector OSS projects, with development now mostly focused on smaller improvements and bug corrections. The national geoportal remains the driving use case for Oskari, and development is performed by the NLS FI, which has an IT staff of over 100 individuals—five of whom are dedicated to the Oskari project.

The NLS FI estimates that they perform about 95 percent of the development. The remaining development typically originates from suppliers commissioned by PSOs with no or limited technical resources. Many accordingly expect the NLS FI to perform most of the development, while the NLS FI continuously encourages external contributions. Oskari’s modular architecture allows for others to contribute whenever their request is considered too specific or not prioritized. Any external contributions are peer-reviewed and supported by the NLS FI staff.

NLS FI manages an informal group within the community, the Joint Development Forum (JDF), which currently consists of eight members, most of whom are Finnish PSOs. These pay a membership fee of 5,000 Euro a year to NLS FI, which sponsors the employment of a community manager, the organization of a yearly community gathering, and technical community support provided by the project's lead architect. The support and activities are still open for the wider community, though.
Representatives from the JDF members, together with NLS FI, form the technical steering committee, although anyone can request to join. The committee convenes monthly to make technical decisions, such as prioritizing the backlog and overseeing ongoing development. In addition, there is a governance board that discusses the more general direction of the project in terms of its roadmap.

Feature requests and bug reports can be posted on the project's GitHub site. Continuous communication and technical support are managed mainly through a chat room on Gitter or via issues and pull requests on GitHub. There is also a mailing list, which is mainly used for communicating general updates and release notes. In addition, there is a yearly physical meetup for the community during the Oskari days, where users share knowledge on new and existing use cases.
NLS FI highlights the importance of having a diversity of suppliers in the community to ensure sustainability and technical support for users, both in terms of development, implementation, training, and hosting of the OSS. Another reason is to avoid the risk of creating lock-in effects, although the NLS FI sits on core competencies related to the project. NLS FI, for example, tries to source developers from different consultancies to enable them to grow technical expertise on the project, which can be used to serve others in the community later on.

## Implications and Recommendations

Public sector OSS projects stand out from traditional community-based and, to some extent, industry-led projects. This means that practices and guidelines need to be tailored specifically for the public sector context. Several contextual factors impact the public sector’s ability to adopt, develop, and collaborate on OSS, such as organizational culture, regulatory frameworks, and siloed structures.

To avoid dependencies on just a few PSOs or service providers, it is crucial to openly share all necessary knowledge and tools for developing and deploying OSS. Facilitating development through Open Source Stewards can improve robustness, enable co-funding models, and provide access to standardized development processes and governance structures.
Support structures like Open Source Program Offices (OSPOs) can help grow internal capabilities and expertise for OSS adoption within PSOs. For less resourceful PSOs, associations or stewards—such as OS2—can offer essential support.

Growing a competitive ecosystem of service suppliers is important for robustness and for reducing the risk of vendor lock-in, though limited availability of support remains a common challenge. Finally, fostering a collaborative culture among PSOs and co-funding development is critical for the long-term sustainability of public sector OSS projects.