---
title: ImageDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>display_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;stretch&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;fit_horizontal&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;fit_vertical&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;fit_by_smallest_dimension&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;fit_by_largest_dimension&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;no_scale&rdquo;<br>
      <p class="scene-class-comments">Method used to fit the input image to the image plane.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.display_type.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.display_type.links heading=4-%}
    </p>
    <h3>image_path</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">File path to the .exr we want to fit to the image plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.image_path.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.image_path.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput to use in the ImageDisplayFilter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter.attributes.mask.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.ImageDisplayFilter-%}