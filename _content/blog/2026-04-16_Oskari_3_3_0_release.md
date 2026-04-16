---
layout: post
title: 'Oskari 3.3.0 is here!'
excerpt: 'New Oskari version, new features and other changes.'
date: 2026-04-16 12:00:00 +0200
categories: [developing]
tags:
  - blog
---

# Oskari 3.3.0 is here!

The new version was released 7th of April. The new version brings a couple of new features as well as numerous library updates and some bug fixes.

The version is available on [GitHub](https://github.com/oskariorg) and Oskari.org Maven repository. The sample application package has been updated on [the download page](https://oskari.org/download) and [the OSGeo website](https://download.osgeo.org/oskari/). As always you can take a peek at the latest release at **https://demo.oskari.org/**

This blog post is a shortened version of the full release notes. See the compiled list of Release notes, Migration Guide and API changelog [here](https://oskari.org/documentation/docs/3.1.0/12-Changelog)

## Feature tools for layers & MyFeatures

Layers can now include "feature tools". This means that additional functionalities can be injected to the user-interface that allow the user to pass a reference of a feature to another functionality without hard-coding connections between functionalities.

Users can now add, remove and edit features, including geometry, on the **myfeatures** layers.

Adding a new layer and defining properties the features on the layer should have is now possible. A default field name is added automatically with localizations for languages en, fi and sv to new myfeatures layers to streamline the process of adding layers and make it more user-friendly. Localizations for other languages can be easily added for the default field when needed.

The user can now also:

* localize the labels shown for end-users for the properties
* select how to format the feature property values (show URL as an image etc.)
* select which properties are shown (importing a dataset might bring in properties that the user doesn't care about)

These functionalities will be improved in the future to make them more user-friendly. The functionality has a "(beta)" in the tab-title on mydata so it's not ready to be used on production yet, but the updated version is available for testing like it was on the 3.2 version. Just enable the myfeatures bundle on your application.

## Other changes

With 3.3.0. it's now possible to export myplaces as GeoJSON and import them as userlayers and/or myfeatures. 

Touch-based devices are now easier to use for selecting / clicking a vector feature on the map.

A new component **FeatureEditor** in oskari-ui is based on the feature editing tool from the content-editor bundle. This editor is used when editing features on myfeatures layers, but the end-goal is that both content-editor and myfeatures could use the same component for feature editing (and possibly other functionalities requiring feature editing as well).

The release also comes with numerous library updates and minor fixes.

![A decorative picture that announces a new Oskari release.](/resources/2025/oskari_release.png)
