---
title: LightFilterSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LightFilterSet
---
{%assign image_dir=site.data.scene-classes.light-filter-set.LightFilterSet.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.light-filter-set.LightFilterSet.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>lightfilters</h3>
    <p class="scene-class-type">
      <b>Lightfilter Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filter-set.LightFilterSet.lightfilters
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>