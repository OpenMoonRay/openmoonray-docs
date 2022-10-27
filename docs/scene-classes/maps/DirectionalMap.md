---
title: DirectionalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DirectionalMap
{%assign image_path=site.data.scene-classes.maps.DirectionalMap.image_path%}
{%if site.data.scene-classes.maps.DirectionalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.DirectionalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.DirectionalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.DirectionalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Adjustment attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">controls the rate at which the effect increases as the shading normal approaches the prime direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.bias.images.
          path=image_path
      %}
    </p>
    <h3>clamping_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | clamp = 0 (default)
          | absolute = 1
      <p class="scene-class-comments">determines how surfaces facing opposite the prime direction are handled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.clamping_behavior.images.
          path=image_path
      %}
    </p>
    <h3>falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | cosine = 0 (default)
          | linear = 1
      <p class="scene-class-comments">determines how the effect falls off as the difference angle increases</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.falloff_type.images.
          path=image_path
      %}
    </p>
    <h3>smoothstep_end</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.550000011921
      <p class="scene-class-comments">the value at which the effect is considered 100% on</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.smoothstep_end.images.
          path=image_path
      %}
    </p>
    <h3>smoothstep_start</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.449999988079
      <p class="scene-class-comments">the value at which the effect is considered 100% off</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.smoothstep_start.images.
          path=image_path
      %}
    </p>
    <h3>use_smoothstep</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">apply smoothstep function to result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.use_smoothstep.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal when bound. The binding multiplier is ignored</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.input_normal.images.
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.input_normal_dial.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_a</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the color of the effect when the difference angle is greatest</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.color_a.images.
          path=image_path
      %}
    </p>
    <h3>color_b</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the color of the effect when the difference angle is smallest</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.color_b.images.
          path=image_path
      %}
    </p>
    <h3>custom_direction</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">specifies a custom direction in world space as the prime direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.custom_direction.images.
          path=image_path
      %}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.object.images.
          path=image_path
      %}
    </p>
    <h3>object_axis</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | +X axis = 0
          | -X axis = 1 (default)
          | +Y axis = 2
          | -Y axis = 3
          | +Z axis = 4
          | -Z axis = 5
      <p class="scene-class-comments">which axis to use when 'prime direction' is set to 'axis of object'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.object_axis.images.
          path=image_path
      %}
    </p>
    <h3>polarity</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perpendicular = 0 (default)
          | parallel = 1
      <p class="scene-class-comments">determines which directions are given color A and which are given color B. Switching this effectively swaps the colors</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.polarity.images.
          path=image_path
      %}
    </p>
    <h3>prime_direction</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | observer direction = 0 (default)
          | custom direction = 1
          | axis of object = 2
          | look-at object = 3
      <p class="scene-class-comments">which source is used for the prime direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.prime_direction.images.
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space position and normals</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DirectionalMapattributes.use_reference_space.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>