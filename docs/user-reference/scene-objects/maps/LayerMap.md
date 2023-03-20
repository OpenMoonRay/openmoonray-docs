---
title: LayerMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LayerMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.LayerMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.gallery data=site.data.user-reference.scene-objects.maps.LayerMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Foreground color to blend</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_A.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_A.links heading=4-%}
    </p>
    <h3>input_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Background color to blend</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_B.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.input_B.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Blending amount</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mask.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mask.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = off<br/>
          </t>1 = over(default)<br/>
          </t>2 = add<br/>
          </t>3 = subtract<br/>
          </t>4 = multiply<br/>
          </t>5 = screen<br/>
          </t>6 = overlay<br/>
          </t>7 = overlay contrast<br/>
          </t>8 = darken<br/>
          </t>9 = lighten<br/>
          </t>10 = color dodge<br/>
          </t>11 = color burn<br/>
          </t>12 = hard light<br/>
          </t>13 = soft light<br/>
          </t>14 = difference<br/>
          </t>15 = exclusion<br/>
      <p class="scene-class-comments">Method of blending</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.LayerMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LayerMap.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.LayerMap-%}