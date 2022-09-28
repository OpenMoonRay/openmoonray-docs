---
title: RenderOutput

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RenderOutput
**RENDEROUTPUT**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>active</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">true enables, false disables render output.</p>
      
    </p>
    
    <h3>camera</h3>
    <p>
      <b>Camera</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Camera to use for this output.  If not specified, defaults to the primary camera.</p>
      
    </p>
    
    <h3>channel_format</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | float = 0
        
          | half = 1 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The pixel encoding (bit depth and type) of the output channel.</p>
      
    </p>
    
    <h3>channel_name</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of the output channel.  In the case of an empty channel name a sensible default name is chosen.</p>
      
    </p>
    
    <h3>channel_suffix_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | auto = 0 (default)
        
          | rgb = 1
        
          | xyz = 2
        
          | uvw = 3
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">When processing multi-channel outputs, how should channel names be suffixed?

	auto : a best guess suffix is chosen based on the type of output

	rgb  : .R, .G, .B

	xyz  : .X, .Y, .Z

	uvw  : .U, .V, .W</p>
      
    </p>
    
    <h3>checkpoint_file_name</h3>
    <p>
      <b>String</b>
      
      
        default: checkpoint.exr
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of checkpoint output file.</p>
      
    </p>
    
    <h3>checkpoint_multi_version_file_name</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of checkpoint output file under checkpoint file overwrite=off condition.</p>
      
    </p>
    
    <h3>compression</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | none = 0
        
          | zip = 1 (default)
        
          | rle = 2
        
          | zips = 3
        
          | piz = 4
        
          | pxr24 = 5
        
          | b44 = 6
        
          | b44a = 7
        
          | dwaa = 8
        
          | dwab = 9
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Compression used for file (or file part in the multi-part case). All render outputs that target the same image must specify the same compression.</p>
      
    </p>
    
    <h3>cryptomatte_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 6
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Number of cryptomatte (id,coverage) data sets to output</p>
      
    </p>
    
    <h3>denoise</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Run optix denoiser before writing to disk</p>
      
    </p>
    
    <h3>denoiser_input</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | not an input = 0 (default)
        
          | as albedo = 1
        
          | as normal = 2
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">How to use this output as a denoiser input</p>
      
    </p>
    
    <h3>display_filter</h3>
    <p>
      <b>67108864</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "display filter", this attribute refers to a display filter object which is used to compute the output pixel values.</p>
      
    </p>
    
    <h3>exr_dwa_compression_level</h3>
    <p>
      <b>Float</b>
      
      
        default: 85.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Compression level used for file with dwaa or dwab compression. All render outputs that target the same image must specify the same compression level.</p>
      
    </p>
    
    <h3>exr_header_attributes</h3>
    <p>
      <b>Metadata</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}</p>
      
    </p>
    
    <h3>file_name</h3>
    <p>
      <b>String</b>
      
      
        default: scene.exr
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of destination file.</p>
      
    </p>
    
    <h3>file_part</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of sub-image if using a multi-part exr file.</p>
      
    </p>
    
    <h3>lpe</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">This attribute specifies a light path expression to output. For details on light path expression syntax see:

		https://github.com/imageworks/OpenShadingLanguage/wiki/OSL-Light-Path-Expressions

	Labels on scattering events are constructed from two parts: [ML.]LL Where:

		<ML> is the label attribute value of the material (if non-empty)

		<LL> is the lobe label assigned in the shader by the shader writer

	Labels on light events are set from the label attribute of the light.

	Additionally, a small set of pre-defined expressions are available:

		'caustic'      : CD[S]+[<L.>O]

		'diffuse'      : CD[<L.>O]

		'emission'     : CO

		'glossy'       : CG[<L.>O]

		'mirror'       : CS[<L.>O]

		'reflection'   : C<RS>[DSG]+[<L.>O]

		'translucent'  : C<TD>[DSG]+[<L.>O]

		'transmission' : C<TS>[DSG]+[<L.>O]</p>
      
    </p>
    
    <h3>material_aov</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "material aov", this attribute specifies a material aov expression to output.  The expression format is: 

	[('<GL>')+\.][('<ML>')+\.][('<LL>')+\.][(SS|R|T|D|G|M)+\.][fresnel\.]<property>. Where:

		<GL> is a label associated with the geometry 

		<ML> is a label associated with the material 

		<LL> is a lobe label 

		R means reflection side lobe 

		T means transmission side lobe 

		D means diffuse lobe category 

		G means glossy lobe category 

		M means mirror lobe category 

		SS means sub-surface component of the material 

		fresnel means to select the lobe's or sub-surface's fresnel 

		<property> can be one of: 

			'albedo'       (bsdf lobe | subsurface)           (RGB),

			'color'        (bsdf lobe | subsurface | fresnel) (RGB),

			'depth'        (state variable)                   (FLOAT),

			'dPds'         (state variable)                   (VEC3F),

			'dPdt'         (state variable)                   (VEC3F),

			'dSdx'         (state variable)                   (FLOAT),

			'dSdy'         (state variable)                   (FLOAT),

			'dTdx'         (state variable)                   (FLOAT),

			'dTdy'         (state variable)                   (FLOAT),

			'emission'     (bsdf)                             (RGB),

			'factor'       (fresnel)                          (FLOAT),

			'float:<attr>' (primitive attribute)              (FLOAT),

			'matte'        (bsdf lobe | subsurface)           (FLOAT),

			'motionvec'    (state variable)                   (VEC2F),

			'N'            (state variable)                   (VEC3F),

			'Ng'           (state variable)                   (VEC3F),

			'normal'       (bsdf lobe | subsurface)           (VEC3F),

			'P'            (state variable)                   (VEC3F),

			'pbr_validity' (bsdf lobe | subsurface)           (RGB),

			'radius'       (subsurface)                       (RGB),

			'rgb:<attr>'   (primitive attribute)              (RGB),

			'roughness'    (bsdf lobe) (fresnel)              (VEC2F),

			'St'           (state variable)                   (VEC2F),

			'vec2:<attr>'  (primitive attribute)              (VEC2F),

			'vec3:<attr>'  (primitive attribute)              (VEC3F),

			'Wp'           (state variable)                   (VEC3F)

	Examples:

		albedo              : Albedo of all rendered materials 

		R.albedo            : Total reflection albedo 

		'spec'.MG.roughness : Roughness of all mirror and glossy lobes that have the 'spec' label</p>
      
    </p>
    
    <h3>math_filter</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | average = 0 (default)
        
          | sum = 1
        
          | min = 2
        
          | max = 3
        
          | force_consistent_sampling = 4
        
          | closest = 5
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the math filter over the pixel.

options include:

	average

	sum

	min

	max

	force_consistent_sampling : average of the first "min_adaptive_samples"

	closest                   : use sample with minimum z-depth</p>
      
    </p>
    
    <h3>output_type</h3>
    <p>
      <b>String</b>
      
      
        default: flat
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Specifies the type of output.  Defaults to "flat", meaning a flat exr file.  "deep" will output a deep exr file.</p>
      
    </p>
    
    <h3>primitive_attribute</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "primitive attribute", this attribute specifies the particular primitive attribute to output.  Default channel name is based on primitive attribute name and type.</p>
      
    </p>
    
    <h3>primitive_attribute_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | FLOAT = 0 (default)
        
          | VEC2F = 1
        
          | VEC3F = 2
        
          | RGB = 3
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">This attribute specifies the type of the attribute named with the "primitive attribute" setting.  This is required to uniquely specify the primitive attribute.</p>
      
    </p>
    
    <h3>reference_render_output</h3>
    <p>
      <b>Renderoutput</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "variance aov", this attribute refers to another render output for which to calculate the pixel variance.</p>
      
    </p>
    
    <h3>result</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | beauty = 0 (default)
        
          | alpha = 1
        
          | depth = 2
        
          | state variable = 3
        
          | primitive attribute = 4
        
          | time per pixel = 5
        
          | wireframe = 6
        
          | material aov = 7
        
          | light aov = 8
        
          | visibility aov = 9
        
          | variance aov = 10
        
          | weight = 11
        
          | beauty aux = 12
        
          | cryptomatte = 13
        
          | alpha aux = 14
        
          | display filter = 15
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The result to output.  Available results: 

	general results:

		"beauty" - full render (R, G, B), 

		"alpha" - full render alpha channel (A), 

		"depth" - z distance from camera (Z), 

		"display filter" - output results from a display filter, 

	aov results:

		"state variable" - Built-in state variable, 

		"primitive attribute" - Procedural provided attributes, 

		"material aov" - Aovs provided via material expressions 

		"light aov" - Aovs provided via light path expressions 

		"visibility aov" - Fraction of light samples that hit light source

		"variance aov" - Aovs calculated from the pixel variance of other aovs

		"weight" - weight,

		"beauty aux" - renderBuffer auxiliary sample data for adaptive sampling,

		"cryptomatte" - cryptomatte,

		"alpha aux" - alpha auxiliary sample data for adaptive sampling,

	diagnostic results:

		"time per pixel" - Time per pixel heat map metric,

		"wireframe" - Render as wireframe</p>
      
    </p>
    
    <h3>resume_file_name</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Name of input file for resume render start condition</p>
      
    </p>
    
    <h3>state_variable</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | P = 0
        
          | Ng = 1
        
          | N = 2 (default)
        
          | St = 3
        
          | dPds = 4
        
          | dPdt = 5
        
          | dSdx = 6
        
          | dSdy = 7
        
          | dTdx = 8
        
          | dTdy = 9
        
          | Wp = 10
        
          | depth = 11
        
          | motionvec = 12
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "state variable", this attribute specifies the particular state variable result. 

	"P" - position (P.X, P.Y, P.Z), 

	"Ng" - geometric normal (Ng.X, Ng.Y, Ng.Z), 

	"N" - normal (N.X, N.Y, N.Z), 

	"St" - texture coordinates (St.X, St.Y), 

	"dPds" - derivative of P w.r.t S (dPds.X, dPds.Y, dPds.Z), 

	"dPdt" - derivative of P w.r.t T (dPdt.X, dPdt.Y, dPdt.Z), 

	"dSdx" - s derivative w.r.t. x (dSdx), 

	"dSdy" - s derivative w.r.t. y (dSdy), 

	"dTdx" - t derivative w.r.t. x (dTdx), 

	"dTdy" - t derivative w.r.t. y (dTdy), 

	"Wp" - world position (Wp.X, Wp.Y, Wp.Z), 

	"depth" - z distance from camera (Z), 

	"motionvec" - 2D motion vector</p>
      
    </p>
    
    <h3>visibility_aov</h3>
    <p>
      <b>String</b>
      
      
        default: C[<T.><RS>]*[<R[DG]><TD>][LO]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">If "result" is "visibility aov", this attribute specifies a light path expression that defines the set of all paths usedto compute the visibility ratio.</p>
      
    </p>
    
  </p>
</details>

