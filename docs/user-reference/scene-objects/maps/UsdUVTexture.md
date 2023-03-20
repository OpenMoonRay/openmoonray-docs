---
title: UsdUVTexture

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdUVTexture
{%-include overview.html data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.gallery data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Bias to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.bias.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.bias.links heading=4-%}
    </p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Fallback value used when texture can not be read.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.fallback.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.fallback.links heading=4-%}
    </p>
    <h3>file</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br/>
      default: 
      <p class="scene-class-comments">Path to the texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.file.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.file.links heading=4-%}
    </p>
    <h3>output_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = rgb(default)<br/>
          </t>1 = r<br/>
          </t>2 = g<br/>
          </t>3 = b<br/>
          </t>4 = a<br/>
      <p class="scene-class-comments">Controls which channel(s) to output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.output_mode.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.output_mode.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.scale.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.scale.links heading=4-%}
    </p>
    <h3>sourceColorSpace</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = raw<br/>
          </t>1 = sRGB<br/>
          </t>3 = auto(default)<br/>
      <p class="scene-class-comments">Flag indicating the color space in which the source texture is encoded.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.sourceColorSpace.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.sourceColorSpace.links heading=4-%}
    </p>
    <h3>st</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br/>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Texture coordinate to use to fetch this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.st.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.st.links heading=4-%}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br/>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_files.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_files.links heading=4-%}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br/>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_max_v.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_max_v.links heading=4-%}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br/>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_values.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.udim_values.links heading=4-%}
    </p>
    <h3>wrapS</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = black<br/>
          </t>1 = clamp<br/>
          </t>2 = repeat<br/>
          </t>3 = mirror<br/>
          </t>4 = useMetadata(default)<br/>
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapS.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapS.links heading=4-%}
    </p>
    <h3>wrapT</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = black<br/>
          </t>1 = clamp<br/>
          </t>2 = repeat<br/>
          </t>3 = mirror<br/>
          </t>4 = useMetadata(default)<br/>
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapT.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapT.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}