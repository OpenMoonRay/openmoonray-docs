---
title: DirectionalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DirectionalMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.gallery data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Adjustment attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.5
      <p class="scene-class-comments">controls the rate at which the effect increases as the shading normal approaches the prime direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.bias.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.bias.links heading=4-%}
    </p>
    <h3>clamping_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = clamp(default)<br/>
          </t>1 = absolute<br/>
      <p class="scene-class-comments">determines how surfaces facing opposite the prime direction are handled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.clamping_behavior.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.clamping_behavior.links heading=4-%}
    </p>
    <h3>falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = cosine(default)<br/>
          </t>1 = linear<br/>
      <p class="scene-class-comments">determines how the effect falls off as the difference angle increases</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.falloff_type.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.falloff_type.links heading=4-%}
    </p>
    <h3>smoothstep_end</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.550000011921
      <p class="scene-class-comments">the value at which the effect is considered 100% on</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.smoothstep_end.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.smoothstep_end.links heading=4-%}
    </p>
    <h3>smoothstep_start</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.449999988079
      <p class="scene-class-comments">the value at which the effect is considered 100% off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.smoothstep_start.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.smoothstep_start.links heading=4-%}
    </p>
    <h3>use_smoothstep</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">apply smoothstep function to result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.use_smoothstep.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.use_smoothstep.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br/>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal when bound. The binding multiplier is ignored</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.input_normal.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.input_normal_dial.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_a</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the color of the effect when the difference angle is greatest</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.color_a.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.color_a.links heading=4-%}
    </p>
    <h3>color_b</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the color of the effect when the difference angle is smallest</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.color_b.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.color_b.links heading=4-%}
    </p>
    <h3>custom_direction</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br/>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">specifies a custom direction in world space as the prime direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.custom_direction.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.custom_direction.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Node</b>
      <br/>
      default: None
      <p class="scene-class-comments">the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.object.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.object.links heading=4-%}
    </p>
    <h3>object_axis</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = +X axis<br/>
          </t>1 = -X axis(default)<br/>
          </t>2 = +Y axis<br/>
          </t>3 = -Y axis<br/>
          </t>4 = +Z axis<br/>
          </t>5 = -Z axis<br/>
      <p class="scene-class-comments">which axis to use when 'prime direction' is set to 'axis of object'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.object_axis.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.object_axis.links heading=4-%}
    </p>
    <h3>polarity</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = perpendicular(default)<br/>
          </t>1 = parallel<br/>
      <p class="scene-class-comments">determines which directions are given color A and which are given color B. Switching this effectively swaps the colors</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.polarity.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.polarity.links heading=4-%}
    </p>
    <h3>prime_direction</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = observer direction(default)<br/>
          </t>1 = custom direction<br/>
          </t>2 = axis of object<br/>
          </t>3 = look-at object<br/>
      <p class="scene-class-comments">which source is used for the prime direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.prime_direction.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.prime_direction.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">use reference space position and normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DirectionalMap.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.DirectionalMap-%}