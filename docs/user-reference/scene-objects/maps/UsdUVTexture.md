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
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Bias to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.bias.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.bias.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.bias.links heading=4-%}
    </p>
    <h3>fallback</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Fallback value used when texture can not be read.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.fallback.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.fallback.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.fallback.links heading=4-%}
    </p>
    <h3>file</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Filename of an EXR or TX format texture (must be mip-mapped and tiled with maketx). If filename contains '&lt;UDIM&gt;', udim index substitution is performed on filename.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.file.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.file.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.file.links heading=4-%}
    </p>
    <h3>output_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;rgb&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;r&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;g&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;b&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;a&rdquo;<br>
      <p class="scene-class-comments">Controls which channel(s) to output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.output_mode.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.output_mode.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.output_mode.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.scale.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.scale.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.scale.links heading=4-%}
    </p>
    <h3>sourceColorSpace</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;raw&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;sRGB&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;auto&rdquo; (default)<br>
      <p class="scene-class-comments">Flag indicating the color space in which the source texture is encoded.  If set to auto, gamma correction will be applied if the images is not single channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.sourceColorSpace.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.sourceColorSpace.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.sourceColorSpace.links heading=4-%}
    </p>
    <h3>st</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Texture coordinate to use to fetch this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.st.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.st.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.st.links heading=4-%}
    </p>
    <h3>wrapS</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;black&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;clamp&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;repeat&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;mirror&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;useMetadata&rdquo; (default)<br>
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapS.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapS.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapS.links heading=4-%}
    </p>
    <h3>wrapT</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;black&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;clamp&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;repeat&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;mirror&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;useMetadata&rdquo; (default)<br>
      <p class="scene-class-comments">Wrap mode when reading this texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapT.images data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapT.videos data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UsdUVTexture.attributes.wrapT.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.UsdUVTexture-%}