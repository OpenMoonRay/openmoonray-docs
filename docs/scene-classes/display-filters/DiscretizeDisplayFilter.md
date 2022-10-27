---
title: DiscretizeDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DiscretizeDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.DiscretizeDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.DiscretizeDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.DiscretizeDisplayFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.attributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.attributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image buffer to discretize</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.attributes.mask.images.
          path=image_path
      %}
    </p>
    <h3>num_bins</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">number of discrete color bins</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DiscretizeDisplayFilter.attributes.num_bins.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>