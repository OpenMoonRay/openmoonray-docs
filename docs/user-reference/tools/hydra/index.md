---
title: MoonRay Hydra Delegate

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# What is Hydra?
"An open source framework to transport live scene graph data to renderers"

Hydra allows 3D applications to use Hydra render plugins to render their scene data. Ideally, any Hydra-supporting application can make use of any renderer that has a Hydra plugin, and produce a good result. It is intended to support live rendering – meaning that the rendered image is continually updated as the 3D scene is changed. 

Hydra was originally developed by Pixar for live OpenGL rendering. It is currently being developed and expanded by them to support "final frame rendering". This includes live rendering using a "final frame quality" renderer, like MoonRay or Renderman, and also batch rendering of actual final frames. There are many more things to consider for final frame quality rendering, and their development towards this goal is still in progress.

Both USD and Hydra are developed by Pixar, but Hydra isn't tied directly to the USD scene format : there are non-USD applications that support Hydra render plugins. Pixar provides a library called usd_imaging that does much of the work needed to implement Hydra support on top of a USD scene model.

The Hydra plugin for MoonRay will allow it to be used in Hydra-supporting applications.
