---
title: Metadata

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Metadata
---
{%assign image_dir=site.data.scene-classes.meta-data.Metadata.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.meta-data.Metadata.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>name</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.name
          image_dir=image_dir
      %}
    </p>
    <h3>type</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-comments">Allowed types for exr headers:<br>&emsp;&emsp;&emsp;* box2i<br>&emsp;&emsp;&emsp;* box2f<br>&emsp;&emsp;&emsp;* chromaticities<br>&emsp;&emsp;&emsp;* double<br>&emsp;&emsp;&emsp;* float<br>&emsp;&emsp;&emsp;* int<br>&emsp;&emsp;&emsp;* m33f<br>&emsp;&emsp;&emsp;* m44f<br>&emsp;&emsp;&emsp;* string<br>&emsp;&emsp;&emsp;* v2i<br>&emsp;&emsp;&emsp;* v2f<br>&emsp;&emsp;&emsp;* v3i<br>&emsp;&emsp;&emsp;* v3f</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.type
          image_dir=image_dir
      %}
    </p>
    <h3>value</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.value
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>