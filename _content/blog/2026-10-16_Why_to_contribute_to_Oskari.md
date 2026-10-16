---
title: 'Why to contribute to Oskari?'
excerpt: "We'll dive into why one should contribute their efforts back to the Oskari core."
date: 2026-10-16 9:00:00 +0200
image: resources/2026/contribute.png
tags:
  - developing
---

## Why to contribute to Oskari?

If you’re already working with Oskari, you're benefitting on open source. Oskari is not a software where you have to pay licences to use it, the source code can be reviewed anytime and you do not have a vendor lock-in as the software can be maintained or developed by various different companies.

Whether you do bug fixing, create new features or administer deployments you might have seen a pattern: the project improves when knowledge and effort flow in two directions. Not only for Oskari but for other open source software, too, the project stays alive and appealing to new users when it is actively maintained. 

Very small projects might thrive for a while with just one contributor, but usually there is a team of developers and/or joint development between different organizations that creates the needed movement. This is usually the situation with projects that stay around for years, become regular go-to choices or even de facto standards. If the software is meant to be used for years or an organization has promised to provide services that rely on the software, it is desirable that the development does not rest on the shoulders of some lone core developer.

But how to make the software better and the open source community stronger?

In this blog post we'll look at why contributing to Oskari core matters. We'll go through four different contributions: 
1) contributing to the core, 
2) publishing new functionalities as open source, 
3) publishing Oskari repositories as open source and 
4) doing development work as open source

### Contributing to the Oskari core

Core contributions are about giving back for all Oskari users, not just adding capabilities for your own instance. 

The contribution might be a bug fix, an improvement to a core functionality, adding a new GitHub issue to the Oskari core or revising the documentation section that you didn't quite understand. When you contribute to the core of the software, you’re effectively investing in shared infrastructure: the parts that other organizations rely on, parts that are widely used and the very building blocks that keep the system stable.

When you contribute your deployment to the core, you help prevent fragmentation of Oskari. In many cases, the open source instances live in private forks separate from the core software and the development done in those repositories never find larger audiences. When the development and use cases happen outside the core repositories, the maintainers of the core of the software cannot take those use cases into account when developing the core. The updates may become painful, features get broken and compatibility of the privately made changes and new core versions might suffer just because the core and the privately made changes were not in sync. When information about different needs and use cases flow to the core, the development of the software can serve everyone better.

Even if the new features feel very organization or use case spesific, they can be a basis for someone else's work. Thus the core contributions can turn private development into a common foundation.

A second reason for contributing to the core is the maintainability of the software. When more developers take part in testing, refactoring, documentation and maintaining the software, the long-term maintanability of the core code is improved. The whole project evolves and stays coherent. This reduces the operational risks of the software. And when more people contribute to the core, the project evolves in how new contributions are adapted.

The core contributions are often harder than building a feature in isolation because core work demands correctness under more scenarios. Many organizations also don't have the time or money to partake to the development of an open source software even if their critical processes depend on them. But the reward is there: when you put the time in to contribute, you are creating the culture where contributing is easier for everyone. Open source becomes not just generosity but an engineering strategy.

### Publishing new functionalities as open source

Open source isn’t just “share the code” or "give all you've done to everyone for free". It’s also about making your ideas reviewable and reusable. 

When you publish new functionalities for Oskari as open source, you let others build on and try out new use cases for the software. This is not a small thing: when Oskari has more use cases, it can be adopted for different needs by new users.

A major advantage of open development is that others can test your work against the datasets and workflows you maybe didn’t anticipate. For a mapping software, that feedback loop is crucial: subtle rendering issues or query edge cases can take months to surface in private deployments. If the feature is something that others are interested in, they can also help you to maintain and improve it.

A feature that ships as open source can be adopted, extended, and improved without waiting for the original team to prioritize it. Publishing functionality as open source also helps with the maintaining: there is not only developer or team that is capable of maintaining it, but the Oskari ecosystem becomes the safety net.

### Publishing repositories as open source

Having Oskari instances as use case pages on Oskari.org is nice, but releasing the repositories as open source is even better. Having the repositories public makes the work of current and future Oskari developers easier. If the setup has been well documented, it can help the newcomers to see Oskari in the code level: how it is built, CI configuration, release practices, and different configurations. An open repository with clear instructions and a coherent project structure is something others can validate.

Through public repositories different workflows such as automated tests and release pipelines become shared infrastructure. When the work and code is shared, different Oskari instances aren't just different forks working in isolation but a collaborative work where ideas can flow.

Open repositories make it also easier for asking tenders: the admins and developers can look at the repository and understand better the architecture and the maintenance expectations. This lowers the barrier for new people to help.

Repository openness may also help to avoid a common problem that the software's source code is posted somewhere but the real work lives in a private repository. If the repository is open, the work is easier to understand end-to-end. There has also been cases where public Oskari repository has been used as a basis for new work and updated in a private repository - just to find out that the same updating processes had been done in the private fork of the base Oskari repo.

Of course publishing the code as an public repository doesn't mean that you have to share the organization-spesific variables or the detailed security settings. A base repo - the codebase that can be built locally, for example - can be really helpful for others. 

### Doing development work as open source

The most overlooked form of open development is the process itself. Doing development work as open source means that reviews happen early, design tradeoffs are discussed before the code hardens, and documentation can evolve alongside implementation. This is where open source becomes not only sharing the outcome but improving how outcomes are reached.

If you open PRs early, reviewers can catch flawed assumptions while the cost of change is low. When you develop openly, you show not only “what” but “why”. That makes future refactors easier because maintainers inherit the intent, not just the mechanics. Thus design becomes less mysterious.

You also build community ownership. Opening developing work creates a sense that the project belongs to a broader group and contributing becomes actually possible. This makes it also possible to discuss release changes are early. Then admins can plan how to handle breaking changes, migration steps and deprecations rather than panic. The major updates don't come as a suprise.

Open workflows also encourage documentation: ADRs, notes in PR descriptions, changelog entries and examples. That documentation doesn’t have to be written afterwards but hopefully becomes the default.

Beyond the direct “code becomes available” benefits, there is also one often overlooked view point: releases signal that the project is alive. Even small improvements, when published openly, invite more contributions. Momentum turns isolated contributions into compounding progress. 

### What this means in practice

If you want the project to be stronger a year from now, treat these four actions as a pipeline:

- **Contribute to core** to improve what is shared with the whole Oskari community
- **Publish new functionalities** to expand capability for everyone and create more future use cases
- **Publish repositories** to make adoption & maintenance realistic and make asking tenders easier
- **Do development openly** to raise quality and reduce surprises

When people contribute in this way, the software stops being a single team’s effort and becomes an ecosystem. Ecosystems - not lone workers - make open map platforms durable: they evolve, adopt to new use cases, stay up-to-date, draw in new users and stay coherent.