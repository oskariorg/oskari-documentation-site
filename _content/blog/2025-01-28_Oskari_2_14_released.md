---
layout: post
title: 'Oskari version 2.14.0 is available!'
excerpt: 'Oskari 2.14.0. and hotfixes released & news on Oskari 3.0'
date: 2025-01-28 13:00:00 +0200
categories: [developing]
tags:
  - blog
---

![Oskari 2.14.0 released](/resources/2025/oskari_2140.png)

# 2.14.0 is here!

Oskari 2.14.0. has been released in December 2024. It is available on (GitHub)[https://github.com/oskariorg] and Oskari.org Maven repository. The sample application package has been updated on [the download page](https://oskari.org/download) and [the OSGeo website](https://download.osgeo.org/oskari/). As always you can take a peek at the latest release at **https://demo.oskari.org/**

## Progress on the React.js migration

The 2.14.0 release doesn’t have too many new features, but lots of dependency updates and progress on the jQuery to React.js migration. Almost all of the tools for publisher functionality have been migrated to React already and we are on the last steps of migrating the rest of the publisher UI. **This means that any jQuery-based application specific publisher tools will not work in a future release so it’s a good time to update them if you have any!**

This release also has a major version update for AntD (the component library we use for UI) so you might need to tune some CSS on your application on the update. See [the Migration guide](https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md) for details.
 
This is also the first release after our new documentation site went live. **See the combined notes for the 2.14.0 release on [the Changelog](https://oskari.org/documentation/docs/2.14.0/12-Changelog).**

## Other highlights of 2.14.0. for users

For admins of Oskari services 2.14.0 brings some small improvements. For example, the built-in system roles (Admin, Guest, [a logged in] User) are now separated from any additional roles in user listings to improve usability. For announcements, a banner on top of the page is now set as the default setting instead of a pop-up window.

The end-users might notice some improvements, too. The layerswipe bundle (which handles the comparison of two map layers) has been migrated to React and now supports touch screens as well. But due to changes in OpenLayers the tool is currently not working properly on vector layers with transparency. If embedded maps or saved views use time series, the restoring to the saved state now works as expected. Also, selecting features by drawing a selection on map is now more user-friendly.

# Hotfix 2.14.1

Hotfix 2.14.1 came right after 2.14.0 in December and fixed an issue where layers with URL templates couldn't be added with the admin UI.

2.14.1. also removed postinstall script that did not work properly when dev-mode was not used. It was replaced with a Babel plugin that can handle Cesium quirks. It updated dompurify 2.3.6 -> 2.5.8, too.

For a full list of changes see: https://github.com/oskariorg/oskari-frontend/milestone/52?closed=1

# Hotfix 2.14.2

The hotfix 2.14.2 was released in January for Oskari-frontend. This fixes issues for admins regarding organizing map layers in subgroups and a fix for visual presentation of the zoom bar when 3D effect is used on theming.
 
# Up next: Oskari 3.0!

We are currently working with the upcoming 3.0 release and currently **estimating March as the release window**. 

The next release will probably be the 3.0 version with the Java migration for Oskari-server from Java 8 to Java 17 done. We might also change some things on the frontend side to streamline developer experience for Oskari.

As of now, it hasn’t been decided if we are doing a similar thing as with 1.0 -> 2.0 where you needed to update to 1.56 before updating to 2.0. We might, but it might not be required this time. We’ll let you know when we get there, but it doesn’t hurt updating to 2.14.0 now either.

Aside of Java update there will be plenty of library updates. Notice that due to the library updates we will need to update the server software we package the sample application with and this is also a required update when updating to 3.0. We are likely to change from Jetty 9 to Tomcat 10 on the download package. You can still use Jetty, but will need to update to a version that supports the Jakarta namespace for servlets.
 
If you want to follow the progress and possibly even test out the changes before the release, here are some links to check through for tracking the upcoming changes:
- [Server milestone](https://github.com/oskariorg/oskari-server/milestone/52?closed=1)
- [Frontend milestone](https://github.com/oskariorg/oskari-frontend/milestone/53?closed=1)
- [Currently identified issues that we are working on](https://github.com/oskariorg/oskari-documentation/milestone/1)
 
On the frontend side everything has been merged to develop and on the server side we are currently working on the [Java17 branch](https://github.com/oskariorg/oskari-server/tree/java17) with the Jakarta namespace change being merged in the upcoming days. You can already find the compiled 3.0.0-SNAPSHOT versions [on the Oskari.org Maven repository](https://github.com/oskariorg/oskari-server).