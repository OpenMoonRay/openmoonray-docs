---
title: DecayLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DecayLightFilter
---
{%assign image_dir=site.data.scene-classes.light-filters.DecayLightFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.DecayLightFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>falloff_far</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.falloff_far
          image_dir=image_dir
      %}
    </p>
    <h3>falloff_near</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.falloff_near
          image_dir=image_dir
      %}
    </p>
    <h3>far_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.far_end
          image_dir=image_dir
      %}
    </p>
    <h3>far_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.far_start
          image_dir=image_dir
      %}
    </p>
    <h3>near_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.near_end
          image_dir=image_dir
      %}
    </p>
    <h3>near_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilter.near_start
          image_dir=image_dir
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
          images=site.data.scene-classes.light-filters.DecayLightFilter.on
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>