---
title: ProjectCylindricalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCylindricalMap
{%assign image_path=site.data.scene-classes.maps.ProjectCylindricalMap.images.path%}
{%if site.data.scene-classes.maps.ProjectCylindricalMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ProjectCylindricalMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ProjectCylindricalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ProjectCylindricalMap.links-%}
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
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.TRS_order
          path=image_path
      %}
    </p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.black_outside_projection
          path=image_path
      %}
    </p>
    <h3>project_on_inward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables projection on surfaces with inward facing normals</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.project_on_inward_surfaces
          path=image_path
      %}
    </p>
    <h3>project_on_outward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables projection on surfaces with outward facing normals</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.project_on_outward_surfaces
          path=image_path
      %}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.projection_matrix
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
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.projection_mode
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.projector
          path=image_path
      %}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.rotate
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
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.rotation_order
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.scale
          path=image_path
      %}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.translate
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCylindricalMap.images.attributes.use_reference_space
          path=image_path
      %}
    </p>
  </p>
</details>
</div>