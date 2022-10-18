---
title: LightSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LightSet
---
{%assign image_dir=site.data.scene-classes.light-set.LightSet.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.light-set.LightSet.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>lights</h3>
    <p class="scene-class-type">
      <b>Light Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-set.LightSet.lights
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>