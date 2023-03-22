---
title: RenderOutput

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RenderOutput
{%-include overview.html data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.gallery data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">True enables, false disables render output.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.active.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.active.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.active.links heading=4-%}
    </p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-comments">Camera to use for this output.  if not specified, defaults to the primary camera.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.camera.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.camera.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.camera.links heading=4-%}
    </p>
    <h3>channel_format</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;float&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;half&rdquo; (default)<br>
      <p class="scene-class-comments">The pixel encoding (bit depth and type) of the output channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_format.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_format.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_format.links heading=4-%}
    </p>
    <h3>channel_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of the output channel.  in the case of an empty channel name a sensible default name is chosen.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_name.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_name.links heading=4-%}
    </p>
    <h3>channel_suffix_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;auto&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;rgb&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;xyz&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;uvw&rdquo;<br>
      <p class="scene-class-comments">When processing multi-channel outputs, how should channel names be suffixed?<br>&emsp;auto : a best guess suffix is chosen based on the type of output<br>&emsp;rgb  : .r, .g, .b<br>&emsp;xyz  : .x, .y, .z<br>&emsp;uvw  : .u, .v, .w</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_suffix_mode.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_suffix_mode.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_suffix_mode.links heading=4-%}
    </p>
    <h3>checkpoint_file_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: checkpoint.exr
      <p class="scene-class-comments">Name of checkpoint output file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_file_name.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_file_name.links heading=4-%}
    </p>
    <h3>checkpoint_multi_version_file_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of checkpoint output file under checkpoint file overwrite=off condition.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_multi_version_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_multi_version_file_name.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_multi_version_file_name.links heading=4-%}
    </p>
    <h3>compression</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;none&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;zip&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;rle&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;zips&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;piz&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;pxr24&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;b44&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;b44a&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;dwaa&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;dwab&rdquo;<br>
      <p class="scene-class-comments">Compression used for file (or file part in the multi-part case). all render outputs that target the same image must specify the same compression.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.compression.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.compression.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.compression.links heading=4-%}
    </p>
    <h3>cryptomatte_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 6
      <p class="scene-class-comments">Number of cryptomatte (id,coverage) data sets to output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.cryptomatte_depth.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.cryptomatte_depth.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.cryptomatte_depth.links heading=4-%}
    </p>
    <h3>denoise</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Run optix denoiser before writing to disk</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoise.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoise.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoise.links heading=4-%}
    </p>
    <h3>denoiser_input</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;not an input&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;as albedo&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;as normal&rdquo;<br>
      <p class="scene-class-comments">How to use this output as a denoiser input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoiser_input.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoiser_input.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoiser_input.links heading=4-%}
    </p>
    <h3>display_filter</h3>
    <p class="scene-class-type">
      <b>DisplayFilter</b>
      <br>
      default: None
      <p class="scene-class-comments">If "result" is "display filter", this attribute refers to a display filter object which is used to compute the output pixel values.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.display_filter.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.display_filter.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.display_filter.links heading=4-%}
    </p>
    <h3>exr_dwa_compression_level</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 85.0
      <p class="scene-class-comments">Compression level used for file with dwaa or dwab compression. all render outputs that target the same image must specify the same compression level.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_dwa_compression_level.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_dwa_compression_level.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_dwa_compression_level.links heading=4-%}
    </p>
    <h3>exr_header_attributes</h3>
    <p class="scene-class-type">
      <b>Metadata</b>
      <br>
      default: None
      <p class="scene-class-comments">Metadata that is passed directly to the exr header. format: {"name", "type", "value"}</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_header_attributes.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_header_attributes.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_header_attributes.links heading=4-%}
    </p>
    <h3>file_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: scene.exr
      <p class="scene-class-comments">Name of destination file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_name.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_name.links heading=4-%}
    </p>
    <h3>file_part</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of sub-image if using a multi-part exr file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_part.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_part.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_part.links heading=4-%}
    </p>
    <h3>lpe</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">This attribute specifies a light path expression to output. for details on light path expression syntax see:<br>&emsp;&emsp;https://github.com/imageworks/openshadinglanguage/wiki/osl-light-path-expressions<br>&emsp;labels on scattering events are constructed from two parts: [ml.]ll where:<br>&emsp;&emsp;&lt;ml&gt; is the label attribute value of the material (if non-empty)<br>&emsp;&emsp;&lt;ll&gt; is the lobe label assigned in the shader by the shader writer<br>&emsp;labels on light events are set from the label attribute of the light.<br>&emsp;additionally, a small set of pre-defined expressions are available:<br>&emsp;&emsp;'caustic'      : cd[s]+[&lt;l.&gt;o]<br>&emsp;&emsp;'diffuse'      : cd[&lt;l.&gt;o]<br>&emsp;&emsp;'emission'     : co<br>&emsp;&emsp;'glossy'       : cg[&lt;l.&gt;o]<br>&emsp;&emsp;'mirror'       : cs[&lt;l.&gt;o]<br>&emsp;&emsp;'reflection'   : c&lt;rs&gt;[dsg]+[&lt;l.&gt;o]<br>&emsp;&emsp;'translucent'  : c&lt;td&gt;[dsg]+[&lt;l.&gt;o]<br>&emsp;&emsp;'transmission' : c&lt;ts&gt;[dsg]+[&lt;l.&gt;o]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.lpe.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.lpe.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.lpe.links heading=4-%}
    </p>
    <h3>material_aov</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">If "result" is "material aov", this attribute specifies a material aov expression to output.  the expression format is: <br>&emsp;[('&lt;gl&gt;')+\.][('&lt;ml&gt;')+\.][('&lt;ll&gt;')+\.][(ss|r|t|d|g|m)+\.][fresnel\.]&lt;property&gt;. where:<br>&emsp;&emsp;&lt;gl&gt; is a label associated with the geometry <br>&emsp;&emsp;&lt;ml&gt; is a label associated with the material <br>&emsp;&emsp;&lt;ll&gt; is a lobe label <br>&emsp;&emsp;r means reflection side lobe <br>&emsp;&emsp;t means transmission side lobe <br>&emsp;&emsp;d means diffuse lobe category <br>&emsp;&emsp;g means glossy lobe category <br>&emsp;&emsp;m means mirror lobe category <br>&emsp;&emsp;ss means sub-surface component of the material <br>&emsp;&emsp;fresnel means to select the lobe's or sub-surface's fresnel <br>&emsp;&emsp;&lt;property&gt; can be one of: <br>&emsp;&emsp;&emsp;'albedo'       (bsdf lobe | subsurface)           (rgb),<br>&emsp;&emsp;&emsp;'color'        (bsdf lobe | subsurface | fresnel) (rgb),<br>&emsp;&emsp;&emsp;'depth'        (state variable)                   (float),<br>&emsp;&emsp;&emsp;'dpds'         (state variable)                   (vec3f),<br>&emsp;&emsp;&emsp;'dpdt'         (state variable)                   (vec3f),<br>&emsp;&emsp;&emsp;'dsdx'         (state variable)                   (float),<br>&emsp;&emsp;&emsp;'dsdy'         (state variable)                   (float),<br>&emsp;&emsp;&emsp;'dtdx'         (state variable)                   (float),<br>&emsp;&emsp;&emsp;'dtdy'         (state variable)                   (float),<br>&emsp;&emsp;&emsp;'emission'     (bsdf)                             (rgb),<br>&emsp;&emsp;&emsp;'factor'       (fresnel)                          (float),<br>&emsp;&emsp;&emsp;'float:&lt;attr&gt;' (primitive attribute)              (float),<br>&emsp;&emsp;&emsp;'matte'        (bsdf lobe | subsurface)           (float),<br>&emsp;&emsp;&emsp;'motionvec'    (state variable)                   (vec2f),<br>&emsp;&emsp;&emsp;'n'            (state variable)                   (vec3f),<br>&emsp;&emsp;&emsp;'ng'           (state variable)                   (vec3f),<br>&emsp;&emsp;&emsp;'normal'       (bsdf lobe | subsurface)           (vec3f),<br>&emsp;&emsp;&emsp;'p'            (state variable)                   (vec3f),<br>&emsp;&emsp;&emsp;'pbr_validity' (bsdf lobe | subsurface)           (rgb),<br>&emsp;&emsp;&emsp;'radius'       (subsurface)                       (rgb),<br>&emsp;&emsp;&emsp;'rgb:&lt;attr&gt;'   (primitive attribute)              (rgb),<br>&emsp;&emsp;&emsp;'roughness'    (bsdf lobe) (fresnel)              (vec2f),<br>&emsp;&emsp;&emsp;'st'           (state variable)                   (vec2f),<br>&emsp;&emsp;&emsp;'vec2:&lt;attr&gt;'  (primitive attribute)              (vec2f),<br>&emsp;&emsp;&emsp;'vec3:&lt;attr&gt;'  (primitive attribute)              (vec3f),<br>&emsp;&emsp;&emsp;'wp'           (state variable)                   (vec3f)<br>&emsp;examples:<br>&emsp;&emsp;albedo              : albedo of all rendered materials <br>&emsp;&emsp;r.albedo            : total reflection albedo <br>&emsp;&emsp;'spec'.mg.roughness : roughness of all mirror and glossy lobes that have the 'spec' label</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.material_aov.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.material_aov.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.material_aov.links heading=4-%}
    </p>
    <h3>math_filter</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;average&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;sum&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;min&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;max&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;force_consistent_sampling&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;closest&rdquo;<br>
      <p class="scene-class-comments">The math filter over the pixel.<br>options include:<br>&emsp;average<br>&emsp;sum<br>&emsp;min<br>&emsp;max<br>&emsp;force_consistent_sampling : average of the first "min_adaptive_samples"<br>&emsp;closest                   : use sample with minimum z-depth</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.math_filter.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.math_filter.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.math_filter.links heading=4-%}
    </p>
    <h3>output_type</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: flat
      <p class="scene-class-comments">Specifies the type of output.  defaults to "flat", meaning a flat exr file.  "deep" will output a deep exr file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.output_type.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.output_type.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.output_type.links heading=4-%}
    </p>
    <h3>primitive_attribute</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">If "result" is "primitive attribute", this attribute specifies the particular primitive attribute to output.  default channel name is based on primitive attribute name and type.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;FLOAT&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;VEC2F&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;VEC3F&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;RGB&rdquo;<br>
      <p class="scene-class-comments">This attribute specifies the type of the attribute named with the "primitive attribute" setting.  this is required to uniquely specify the primitive attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute_type.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute_type.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute_type.links heading=4-%}
    </p>
    <h3>reference_render_output</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">If "result" is "variance aov", this attribute refers to another render output for which to calculate the pixel variance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.reference_render_output.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.reference_render_output.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.reference_render_output.links heading=4-%}
    </p>
    <h3>result</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;beauty&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;alpha&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;depth&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;state variable&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;primitive attribute&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;time per pixel&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;wireframe&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;material aov&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;light aov&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;visibility aov&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;variance aov&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;weight&rdquo;<br>
          &nbsp;&nbsp;12 = &ldquo;beauty aux&rdquo;<br>
          &nbsp;&nbsp;13 = &ldquo;cryptomatte&rdquo;<br>
          &nbsp;&nbsp;14 = &ldquo;alpha aux&rdquo;<br>
          &nbsp;&nbsp;15 = &ldquo;display filter&rdquo;<br>
      <p class="scene-class-comments">The result to output.  available results: <br>&emsp;general results:<br>&emsp;&emsp;"beauty" - full render (r, g, b), <br>&emsp;&emsp;"alpha" - full render alpha channel (a), <br>&emsp;&emsp;"depth" - z distance from camera (z), <br>&emsp;&emsp;"display filter" - output results from a display filter, <br>&emsp;aov results:<br>&emsp;&emsp;"state variable" - built-in state variable, <br>&emsp;&emsp;"primitive attribute" - procedural provided attributes, <br>&emsp;&emsp;"material aov" - aovs provided via material expressions <br>&emsp;&emsp;"light aov" - aovs provided via light path expressions <br>&emsp;&emsp;"visibility aov" - fraction of light samples that hit light source<br>&emsp;&emsp;"variance aov" - aovs calculated from the pixel variance of other aovs<br>&emsp;&emsp;"weight" - weight,<br>&emsp;&emsp;"beauty aux" - renderbuffer auxiliary sample data for adaptive sampling,<br>&emsp;&emsp;"cryptomatte" - cryptomatte,<br>&emsp;&emsp;"alpha aux" - alpha auxiliary sample data for adaptive sampling,<br>&emsp;diagnostic results:<br>&emsp;&emsp;"time per pixel" - time per pixel heat map metric,<br>&emsp;&emsp;"wireframe" - render as wireframe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.result.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.result.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.result.links heading=4-%}
    </p>
    <h3>resume_file_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Name of input file for resume render start condition</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.resume_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.resume_file_name.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.resume_file_name.links heading=4-%}
    </p>
    <h3>state_variable</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;P&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;Ng&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;N&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;St&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;dPds&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;dPdt&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;dSdx&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;dSdy&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;dTdx&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;dTdy&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;Wp&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;depth&rdquo;<br>
          &nbsp;&nbsp;12 = &ldquo;motionvec&rdquo;<br>
      <p class="scene-class-comments">If "result" is "state variable", this attribute specifies the particular state variable result. <br>&emsp;"p" - position (p.x, p.y, p.z), <br>&emsp;"ng" - geometric normal (ng.x, ng.y, ng.z), <br>&emsp;"n" - normal (n.x, n.y, n.z), <br>&emsp;"st" - texture coordinates (st.x, st.y), <br>&emsp;"dpds" - derivative of p w.r.t s (dpds.x, dpds.y, dpds.z), <br>&emsp;"dpdt" - derivative of p w.r.t t (dpdt.x, dpdt.y, dpdt.z), <br>&emsp;"dsdx" - s derivative w.r.t. x (dsdx), <br>&emsp;"dsdy" - s derivative w.r.t. y (dsdy), <br>&emsp;"dtdx" - t derivative w.r.t. x (dtdx), <br>&emsp;"dtdy" - t derivative w.r.t. y (dtdy), <br>&emsp;"wp" - world position (wp.x, wp.y, wp.z), <br>&emsp;"depth" - z distance from camera (z), <br>&emsp;"motionvec" - 2d motion vector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.state_variable.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.state_variable.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.state_variable.links heading=4-%}
    </p>
    <h3>visibility_aov</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: C[&lt;T.&gt;&lt;RS&gt;]*[&lt;R[DG]&gt;&lt;TD&gt;][LO]
      <p class="scene-class-comments">If "result" is "visibility aov", this attribute specifies a light path expression that defines the set of all paths usedto compute the visibility ratio.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.visibility_aov.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.visibility_aov.videos data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.visibility_aov.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}