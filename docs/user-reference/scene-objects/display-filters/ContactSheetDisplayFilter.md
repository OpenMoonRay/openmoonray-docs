---
title: ContactSheetDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ContactSheetDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.invert_mask.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mix.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>font_path</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Specify a typeface file or a full pathname. Will search common locations.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_path.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_path.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_path.links heading=4-%}
    </p>
    <h3>font_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Font size multiplier.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_scale.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_scale.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.font_scale.links heading=4-%}
    </p>
    <h3>inputs</h3>
    <p class="scene-class-type">
      <b>RenderOutput Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of RenderOutputs to display.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.inputs.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.inputs.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.inputs.links heading=4-%}
    </p>
    <h3>label_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.label_color.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.label_color.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.label_color.links heading=4-%}
    </p>
    <h3>labels</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of labels for each RenderOutput.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.labels.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.labels.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.labels.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mask.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>show_labels</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Toggles label visibility.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.show_labels.images data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.show_labels.videos data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter.attributes.show_labels.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.ContactSheetDisplayFilter-%}