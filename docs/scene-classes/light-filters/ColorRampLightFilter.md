---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorRampLightFilter
{%assign image_path=site.data.scene-classes.light-filters.ColorRampLightFilter.images.path%}
{%if site.data.scene-classes.light-filters.ColorRampLightFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filters.ColorRampLightFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filters.ColorRampLightFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>begin_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.begin_distance
          path=image_path
      %}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.colors
          path=image_path
      %}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.density
          path=image_path
      %}
    </p>
    <h3>distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.distances
          path=image_path
      %}
    </p>
    <h3>end_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.end_distance
          path=image_path
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.intensity
          path=image_path
      %}
    </p>
    <h3>interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.interpolation_types
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | radial = 0 (default)
          | directional = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.mode
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.node_xform
          path=image_path
      %}
    </p>
    <h3>wrap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | extend = 0 (default)
          | mirror = 1
      <p class="scene-class-comments">For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z &gt; 0.  Mirror: f(z) = f(-z).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.wrap_mode
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.on
          path=image_path
      %}
    </p>
    <h3>use_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.images.attributes.use_xform
          path=image_path
      %}
    </p>
  </p>
</details>
</div>