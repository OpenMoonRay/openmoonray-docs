---
title: ProjectPlanarNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectPlanarNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.image_path%}
{%if site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TRS_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Scale Rot Trans = 0 (default)
          | Scale Trans Rot = 1
          | Rot Scale Trans = 2
          | Rot Trans Scale = 3
          | Trans Scale Rot = 4
          | Trans Rot Scale = 5
      <p class="scene-class-comments">Order in which to apply transformations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.TRS_order.images.
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
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.normal_encoding.images.
          path=image_path
      %}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.projection_matrix.images.
          path=image_path
      %}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | projector = 0 (default)
          | projection_matrix = 1
          | TRS = 2
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.projection_mode.images.
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.projector.images.
          path=image_path
      %}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.rotate.images.
          path=image_path
      %}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | xyz = 0 (default)
          | xzy = 1
          | yxz = 2
          | yzx = 3
          | zxy = 4
          | zyx = 5
      <p class="scene-class-comments">Order in which to apply rotation transformations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.rotation_order.images.
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.scale.images.
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.texture.images.
          path=image_path
      %}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.translate.images.
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.use_reference_space.images.
          path=image_path
      %}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.ProjectPlanarNormalMap.attributes.wrap_around.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>