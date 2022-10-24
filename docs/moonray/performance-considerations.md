---
title: Performance Considerations

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# Performance Considerations
This page documents how to get the best performance out of Moonray

## Tiled textures
Using tiled textures can greatly improve rendering performance.  The Open Image IO utility `maketx` can be used to convert common file formats to the .tx format which is optimal. 

## adaptive_error tesselation
The `adaptive_error` setting on geometry is off by default (set to 0) resulting in uniform tessellation.   Depending on the `mesh_resolution` setting, the geometry may be overtessellated for it's distance from the camera.   Turning `adaptive_error` on sets the maximum allowable difference in pixels for subdivison mesh adaptive tessellation.  Each final tessellated edge won't be longer than n pixels if adaptive error is set to n.  Adaptive tessellation is not supported for instances.

