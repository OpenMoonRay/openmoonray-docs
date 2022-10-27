---
title: Metadata

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Metadata
{%assign image_path=site.data.scene-classes.meta-data.Metadata.images.path%}
{%if site.data.scene-classes.meta-data.Metadata.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.meta-data.Metadata.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.meta-data.Metadata.links-%}
---
## See Also
{%for link in site.data.scene-classes.meta-data.Metadata.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>name</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.images.attributes.name
          path=image_path
      %}
    </p>
    <h3>type</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-comments">Allowed types for exr headers:<br>&emsp;&emsp;&emsp;* box2i<br>&emsp;&emsp;&emsp;* box2f<br>&emsp;&emsp;&emsp;* chromaticities<br>&emsp;&emsp;&emsp;* double<br>&emsp;&emsp;&emsp;* float<br>&emsp;&emsp;&emsp;* int<br>&emsp;&emsp;&emsp;* m33f<br>&emsp;&emsp;&emsp;* m44f<br>&emsp;&emsp;&emsp;* string<br>&emsp;&emsp;&emsp;* v2i<br>&emsp;&emsp;&emsp;* v2f<br>&emsp;&emsp;&emsp;* v3i<br>&emsp;&emsp;&emsp;* v3f</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.images.attributes.type
          path=image_path
      %}
    </p>
    <h3>value</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.meta-data.Metadata.images.attributes.value
          path=image_path
      %}
    </p>
  </p>
</details>
</div>