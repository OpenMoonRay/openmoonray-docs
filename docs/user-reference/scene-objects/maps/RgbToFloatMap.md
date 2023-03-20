---
title: RgbToFloatMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.gallery data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Input color to convert</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.input.links heading=4-%}
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
      <p class="scene-class-comments">The method to convert RGB Color to float</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}