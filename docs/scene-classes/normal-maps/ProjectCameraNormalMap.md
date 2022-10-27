---
title: ProjectCameraNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.path%}
{%if site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.ProjectCameraNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.ProjectCameraNormalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>aspect_ratio_source</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | from texture = 0 (default)
          | custom = 1
      <p class="scene-class-comments">Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.aspect_ratio_source
          path=image_path
      %}
    </p>
    <h3>custom_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">a custom aspect ratio for the projected texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.custom_aspect_ratio
          path=image_path
      %}
    </p>
    <h3>normal_encoding</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | [0,1] = 0 (default)
          | [-1,1] = 1
      <p class="scene-class-comments">Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.normal_encoding
          path=image_path
      %}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.project_on_back_faces
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">the camera to project from</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.projector
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.texture
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectCameraNormalMap.images.attributes.use_reference_space
          path=image_path
      %}
    </p>
  </p>
</details>
</div>