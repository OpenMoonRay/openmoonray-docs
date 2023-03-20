---
title: RgbToFloatDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br/>
      default: None
      <p class="scene-class-comments">RenderOutput to use in the RgbToFloat operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br/>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = r<br/>
          </t>1 = g<br/>
          </t>2 = b<br/>
          </t>3 = min<br/>
          </t>4 = max<br/>
          </t>5 = average(default)<br/>
          </t>6 = sum<br/>
          </t>7 = luminance<br/>
      <p class="scene-class-comments">The method used to convert RGB Color to float</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mode.images data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.RgbToFloatDisplayFilter-%}