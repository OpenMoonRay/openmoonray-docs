---
title: LODMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LODMap
{%assign image_path=site.data.scene-classes.maps.LODMap.images.path%}
{%if site.data.scene-classes.maps.LODMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.LODMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.LODMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.LODMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>far_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">value output when feature_width/camera_distance is more than or equal to stop</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LODMap.images.attributes.far_value
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | feature width = 0 (default)
          | camera distance = 1
      <p class="scene-class-comments">Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LODMap.images.attributes.mode
          path=image_path
      %}
    </p>
    <h3>near_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">value output when feature_width/camera_distance is less than or equal to start</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LODMap.images.attributes.near_value
          path=image_path
      %}
    </p>
    <h3>start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.00999999977648
      <p class="scene-class-comments">feature_width/camera_distance at which to start blending near_value-&gt;far_value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LODMap.images.attributes.start
          path=image_path
      %}
    </p>
    <h3>stop</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.10000000149
      <p class="scene-class-comments">feature_width/camera_distance at which to stop blending near_value-&gt;far_value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LODMap.images.attributes.stop
          path=image_path
      %}
    </p>
  </p>
</details>
</div>