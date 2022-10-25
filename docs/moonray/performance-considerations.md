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

## Tiled Textures
Moonray requires the use of tiled textures which greatly improves rendering performance.  The Open Image IO utility `maketx` should be used to convert common file formats to the optimal .tx format.

## Adaptive Error Tesselation
The `adaptive_error` setting on geometry is off by default (set to 0) resulting in uniform tessellation.   Depending on the `mesh_resolution` setting, the geometry may be overtessellated for it's distance from the camera.   Turning `adaptive_error` on sets the maximum allowable difference in pixels for subdivison mesh adaptive tessellation.  Each final tessellated edge won't be longer than n pixels if adaptive error is set to n.  Adaptive tessellation is not supported for instances.

## Texture Cache Size
The `texture_cache_size` scene variable is set to 4Gb by default.   If the scene being rendered makes use of many and/or large texture maps, this may not be large enough.   The moonray render log (output using the `-info` option) reports both the set texture cache size and also the `main cache miss ratio`.   Even if the reported miss ratio is only a few percent, this can make a big difference in render time.   Increasing the texture_cache_size can be a good way to improve performance in such scenes.
