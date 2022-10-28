---
title: BlendDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendDisplayFilter
{%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.gallery data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
{%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blendAmt</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">float determining amount of blend</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.blendAmt.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.blendAmt.links heading=4-%}
    </p>
    <h3>blendType</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | cubic = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.blendType.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.blendType.links heading=4-%}
    </p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">first operand</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.input1.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">second operand</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.input2.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.BlendDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.BlendDisplayFilter.attributes.mask.links heading=4-%}
    </p>
  </p>
</details>
</div>