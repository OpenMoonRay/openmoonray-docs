---
title: ConvolutionDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ConvolutionDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.ConvolutionDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.ConvolutionDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.ConvolutionDisplayFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
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
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>custom_kernel</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">a list of kernel values for a custom filter. The number of values provided must be the square of an odd number (e.g. 3x3, 5x5, 7x7)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.custom_kernel.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to convolve</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>kernel_size</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 5
      <p class="scene-class-comments">size of kernel in pixels. Size must be odd. If using custom kernel, this attribute is ignored, and the size of the custom kernel is used instead</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.kernel_size.images.
          path=image_path
      %}
    </p>
    <h3>kernel_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | gaussian = 0 (default)
          | box = 1
          | custom = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.kernel_type.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ConvolutionDisplayFilter.attributes.mask.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>