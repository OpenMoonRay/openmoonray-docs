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
      <b>Bool</b><br/>
      default: True
      <p class="scene-class-comments">true enables, false disables render output.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.active.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.active.links heading=4-%}
    </p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b><br/>
      default: None
      <p class="scene-class-comments">Camera to use for this output.  If not specified, defaults to the primary camera.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.camera.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.camera.links heading=4-%}
    </p>
    <h3>channel_format</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=float<br/>
          1=half(default)<br/>
      <p class="scene-class-comments">The pixel encoding (bit depth and type) of the output channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_format.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_format.links heading=4-%}
    </p>
    <h3>channel_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">Name of the output channel.  In the case of an empty channel name a sensible default name is chosen.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_name.links heading=4-%}
    </p>
    <h3>channel_suffix_mode</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=auto(default)<br/>
          1=rgb<br/>
          2=xyz<br/>
          3=uvw<br/>
      <p class="scene-class-comments">When processing multi-channel outputs, how should channel names be suffixed?<br>&emsp;auto : a best guess suffix is chosen based on the type of output<br>&emsp;rgb  : .R, .G, .B<br>&emsp;xyz  : .X, .Y, .Z<br>&emsp;uvw  : .U, .V, .W</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_suffix_mode.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.channel_suffix_mode.links heading=4-%}
    </p>
    <h3>checkpoint_file_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: checkpoint.exr
      <p class="scene-class-comments">Name of checkpoint output file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_file_name.links heading=4-%}
    </p>
    <h3>checkpoint_multi_version_file_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">Name of checkpoint output file under checkpoint file overwrite=off condition.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_multi_version_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.checkpoint_multi_version_file_name.links heading=4-%}
    </p>
    <h3>compression</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=none<br/>
          1=zip(default)<br/>
          2=rle<br/>
          3=zips<br/>
          4=piz<br/>
          5=pxr24<br/>
          6=b44<br/>
          7=b44a<br/>
          8=dwaa<br/>
          9=dwab<br/>
      <p class="scene-class-comments">Compression used for file (or file part in the multi-part case). All render outputs that target the same image must specify the same compression.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.compression.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.compression.links heading=4-%}
    </p>
    <h3>cryptomatte_depth</h3>
    <p class="scene-class-type">
      <b>Int</b><br/>
      default: 6
      <p class="scene-class-comments">Number of cryptomatte (id,coverage) data sets to output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.cryptomatte_depth.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.cryptomatte_depth.links heading=4-%}
    </p>
    <h3>denoise</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Run optix denoiser before writing to disk</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoise.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoise.links heading=4-%}
    </p>
    <h3>denoiser_input</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=not an input(default)<br/>
          1=as albedo<br/>
          2=as normal<br/>
      <p class="scene-class-comments">How to use this output as a denoiser input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoiser_input.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.denoiser_input.links heading=4-%}
    </p>
    <h3>display_filter</h3>
    <p class="scene-class-type">
      <b>DisplayFilter</b><br/>
      default: None
      <p class="scene-class-comments">If "result" is "display filter", this attribute refers to a display filter object which is used to compute the output pixel values.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.display_filter.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.display_filter.links heading=4-%}
    </p>
    <h3>exr_dwa_compression_level</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 85.0
      <p class="scene-class-comments">Compression level used for file with dwaa or dwab compression. All render outputs that target the same image must specify the same compression level.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_dwa_compression_level.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_dwa_compression_level.links heading=4-%}
    </p>
    <h3>exr_header_attributes</h3>
    <p class="scene-class-type">
      <b>Metadata</b><br/>
      default: None
      <p class="scene-class-comments">Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_header_attributes.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.exr_header_attributes.links heading=4-%}
    </p>
    <h3>file_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: scene.exr
      <p class="scene-class-comments">Name of destination file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_name.links heading=4-%}
    </p>
    <h3>file_part</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">Name of sub-image if using a multi-part exr file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_part.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.file_part.links heading=4-%}
    </p>
    <h3>lpe</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">This attribute specifies a light path expression to output. For details on light path expression syntax see:<br>&emsp;&emsp;https://github.com/imageworks/OpenShadingLanguage/wiki/OSL-Light-Path-Expressions<br>&emsp;Labels on scattering events are constructed from two parts: [ML.]LL Where:<br>&emsp;&emsp;&lt;ML&gt; is the label attribute value of the material (if non-empty)<br>&emsp;&emsp;&lt;LL&gt; is the lobe label assigned in the shader by the shader writer<br>&emsp;Labels on light events are set from the label attribute of the light.<br>&emsp;Additionally, a small set of pre-defined expressions are available:<br>&emsp;&emsp;'caustic'      : CD[S]+[&lt;L.&gt;O]<br>&emsp;&emsp;'diffuse'      : CD[&lt;L.&gt;O]<br>&emsp;&emsp;'emission'     : CO<br>&emsp;&emsp;'glossy'       : CG[&lt;L.&gt;O]<br>&emsp;&emsp;'mirror'       : CS[&lt;L.&gt;O]<br>&emsp;&emsp;'reflection'   : C&lt;RS&gt;[DSG]+[&lt;L.&gt;O]<br>&emsp;&emsp;'translucent'  : C&lt;TD&gt;[DSG]+[&lt;L.&gt;O]<br>&emsp;&emsp;'transmission' : C&lt;TS&gt;[DSG]+[&lt;L.&gt;O]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.lpe.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.lpe.links heading=4-%}
    </p>
    <h3>material_aov</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">If "result" is "material aov", this attribute specifies a material aov expression to output.  The expression format is: <br>&emsp;[('&lt;GL&gt;')+\.][('&lt;ML&gt;')+\.][('&lt;LL&gt;')+\.][(SS|R|T|D|G|M)+\.][fresnel\.]&lt;property&gt;. Where:<br>&emsp;&emsp;&lt;GL&gt; is a label associated with the geometry <br>&emsp;&emsp;&lt;ML&gt; is a label associated with the material <br>&emsp;&emsp;&lt;LL&gt; is a lobe label <br>&emsp;&emsp;R means reflection side lobe <br>&emsp;&emsp;T means transmission side lobe <br>&emsp;&emsp;D means diffuse lobe category <br>&emsp;&emsp;G means glossy lobe category <br>&emsp;&emsp;M means mirror lobe category <br>&emsp;&emsp;SS means sub-surface component of the material <br>&emsp;&emsp;fresnel means to select the lobe's or sub-surface's fresnel <br>&emsp;&emsp;&lt;property&gt; can be one of: <br>&emsp;&emsp;&emsp;'albedo'       (bsdf lobe | subsurface)           (RGB),<br>&emsp;&emsp;&emsp;'color'        (bsdf lobe | subsurface | fresnel) (RGB),<br>&emsp;&emsp;&emsp;'depth'        (state variable)                   (FLOAT),<br>&emsp;&emsp;&emsp;'dPds'         (state variable)                   (VEC3F),<br>&emsp;&emsp;&emsp;'dPdt'         (state variable)                   (VEC3F),<br>&emsp;&emsp;&emsp;'dSdx'         (state variable)                   (FLOAT),<br>&emsp;&emsp;&emsp;'dSdy'         (state variable)                   (FLOAT),<br>&emsp;&emsp;&emsp;'dTdx'         (state variable)                   (FLOAT),<br>&emsp;&emsp;&emsp;'dTdy'         (state variable)                   (FLOAT),<br>&emsp;&emsp;&emsp;'emission'     (bsdf)                             (RGB),<br>&emsp;&emsp;&emsp;'factor'       (fresnel)                          (FLOAT),<br>&emsp;&emsp;&emsp;'float:&lt;attr&gt;' (primitive attribute)              (FLOAT),<br>&emsp;&emsp;&emsp;'matte'        (bsdf lobe | subsurface)           (FLOAT),<br>&emsp;&emsp;&emsp;'motionvec'    (state variable)                   (VEC2F),<br>&emsp;&emsp;&emsp;'N'            (state variable)                   (VEC3F),<br>&emsp;&emsp;&emsp;'Ng'           (state variable)                   (VEC3F),<br>&emsp;&emsp;&emsp;'normal'       (bsdf lobe | subsurface)           (VEC3F),<br>&emsp;&emsp;&emsp;'P'            (state variable)                   (VEC3F),<br>&emsp;&emsp;&emsp;'pbr_validity' (bsdf lobe | subsurface)           (RGB),<br>&emsp;&emsp;&emsp;'radius'       (subsurface)                       (RGB),<br>&emsp;&emsp;&emsp;'rgb:&lt;attr&gt;'   (primitive attribute)              (RGB),<br>&emsp;&emsp;&emsp;'roughness'    (bsdf lobe) (fresnel)              (VEC2F),<br>&emsp;&emsp;&emsp;'St'           (state variable)                   (VEC2F),<br>&emsp;&emsp;&emsp;'vec2:&lt;attr&gt;'  (primitive attribute)              (VEC2F),<br>&emsp;&emsp;&emsp;'vec3:&lt;attr&gt;'  (primitive attribute)              (VEC3F),<br>&emsp;&emsp;&emsp;'Wp'           (state variable)                   (VEC3F)<br>&emsp;Examples:<br>&emsp;&emsp;albedo              : Albedo of all rendered materials <br>&emsp;&emsp;R.albedo            : Total reflection albedo <br>&emsp;&emsp;'spec'.MG.roughness : Roughness of all mirror and glossy lobes that have the 'spec' label</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.material_aov.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.material_aov.links heading=4-%}
    </p>
    <h3>math_filter</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=average(default)<br/>
          1=sum<br/>
          2=min<br/>
          3=max<br/>
          4=force_consistent_sampling<br/>
          5=closest<br/>
      <p class="scene-class-comments">the math filter over the pixel.<br>options include:<br>&emsp;average<br>&emsp;sum<br>&emsp;min<br>&emsp;max<br>&emsp;force_consistent_sampling : average of the first "min_adaptive_samples"<br>&emsp;closest                   : use sample with minimum z-depth</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.math_filter.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.math_filter.links heading=4-%}
    </p>
    <h3>output_type</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: flat
      <p class="scene-class-comments">Specifies the type of output.  Defaults to "flat", meaning a flat exr file.  "deep" will output a deep exr file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.output_type.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.output_type.links heading=4-%}
    </p>
    <h3>primitive_attribute</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">If "result" is "primitive attribute", this attribute specifies the particular primitive attribute to output.  Default channel name is based on primitive attribute name and type.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=FLOAT(default)<br/>
          1=VEC2F<br/>
          2=VEC3F<br/>
          3=RGB<br/>
      <p class="scene-class-comments">This attribute specifies the type of the attribute named with the "primitive attribute" setting.  This is required to uniquely specify the primitive attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute_type.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.primitive_attribute_type.links heading=4-%}
    </p>
    <h3>reference_render_output</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">If "result" is "variance aov", this attribute refers to another render output for which to calculate the pixel variance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.reference_render_output.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.reference_render_output.links heading=4-%}
    </p>
    <h3>result</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=beauty(default)<br/>
          1=alpha<br/>
          2=depth<br/>
          3=state variable<br/>
          4=primitive attribute<br/>
          5=time per pixel<br/>
          6=wireframe<br/>
          7=material aov<br/>
          8=light aov<br/>
          9=visibility aov<br/>
          10=variance aov<br/>
          11=weight<br/>
          12=beauty aux<br/>
          13=cryptomatte<br/>
          14=alpha aux<br/>
          15=display filter<br/>
      <p class="scene-class-comments">The result to output.  Available results: <br>&emsp;general results:<br>&emsp;&emsp;"beauty" - full render (R, G, B), <br>&emsp;&emsp;"alpha" - full render alpha channel (A), <br>&emsp;&emsp;"depth" - z distance from camera (Z), <br>&emsp;&emsp;"display filter" - output results from a display filter, <br>&emsp;aov results:<br>&emsp;&emsp;"state variable" - Built-in state variable, <br>&emsp;&emsp;"primitive attribute" - Procedural provided attributes, <br>&emsp;&emsp;"material aov" - Aovs provided via material expressions <br>&emsp;&emsp;"light aov" - Aovs provided via light path expressions <br>&emsp;&emsp;"visibility aov" - Fraction of light samples that hit light source<br>&emsp;&emsp;"variance aov" - Aovs calculated from the pixel variance of other aovs<br>&emsp;&emsp;"weight" - weight,<br>&emsp;&emsp;"beauty aux" - renderBuffer auxiliary sample data for adaptive sampling,<br>&emsp;&emsp;"cryptomatte" - cryptomatte,<br>&emsp;&emsp;"alpha aux" - alpha auxiliary sample data for adaptive sampling,<br>&emsp;diagnostic results:<br>&emsp;&emsp;"time per pixel" - Time per pixel heat map metric,<br>&emsp;&emsp;"wireframe" - Render as wireframe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.result.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.result.links heading=4-%}
    </p>
    <h3>resume_file_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">Name of input file for resume render start condition</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.resume_file_name.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.resume_file_name.links heading=4-%}
    </p>
    <h3>state_variable</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=P<br/>
          1=Ng<br/>
          2=N(default)<br/>
          3=St<br/>
          4=dPds<br/>
          5=dPdt<br/>
          6=dSdx<br/>
          7=dSdy<br/>
          8=dTdx<br/>
          9=dTdy<br/>
          10=Wp<br/>
          11=depth<br/>
          12=motionvec<br/>
      <p class="scene-class-comments">If "result" is "state variable", this attribute specifies the particular state variable result. <br>&emsp;"P" - position (P.X, P.Y, P.Z), <br>&emsp;"Ng" - geometric normal (Ng.X, Ng.Y, Ng.Z), <br>&emsp;"N" - normal (N.X, N.Y, N.Z), <br>&emsp;"St" - texture coordinates (St.X, St.Y), <br>&emsp;"dPds" - derivative of P w.r.t S (dPds.X, dPds.Y, dPds.Z), <br>&emsp;"dPdt" - derivative of P w.r.t T (dPdt.X, dPdt.Y, dPdt.Z), <br>&emsp;"dSdx" - s derivative w.r.t. x (dSdx), <br>&emsp;"dSdy" - s derivative w.r.t. y (dSdy), <br>&emsp;"dTdx" - t derivative w.r.t. x (dTdx), <br>&emsp;"dTdy" - t derivative w.r.t. y (dTdy), <br>&emsp;"Wp" - world position (Wp.X, Wp.Y, Wp.Z), <br>&emsp;"depth" - z distance from camera (Z), <br>&emsp;"motionvec" - 2D motion vector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.state_variable.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.state_variable.links heading=4-%}
    </p>
    <h3>visibility_aov</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: C[&lt;T.&gt;&lt;RS&gt;]*[&lt;R[DG]&gt;&lt;TD&gt;][LO]
      <p class="scene-class-comments">If "result" is "visibility aov", this attribute specifies a light path expression that defines the set of all paths usedto compute the visibility ratio.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.visibility_aov.images data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.render-output.RenderOutput.attributes.visibility_aov.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.render-output.RenderOutput-%}