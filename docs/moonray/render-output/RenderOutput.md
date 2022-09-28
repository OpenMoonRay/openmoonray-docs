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
<summary class="scene-class-attr-group">General attributes</summary>

<h2>active</h2>
<b>Bool</b>  

Default value : True  

true enables, false disables render output.


<h2>camera</h2>
<b>Camera</b>  

Default value : None  

Camera to use for this output.  If not specified, defaults to the primary camera.


<h2>channel_format</h2>
<b>Int</b>  *enum*

- float = 0

- half = 1 (default)


The pixel encoding (bit depth and type) of the output channel.


<h2>channel_name</h2>
<b>String</b>  

Default value :   

Name of the output channel.  In the case of an empty channel name a sensible default name is chosen.


<h2>channel_suffix_mode</h2>
<b>Int</b>  *enum*

- auto = 0 (default)

- rgb = 1

- xyz = 2

- uvw = 3


When processing multi-channel outputs, how should channel names be suffixed?

	auto : a best guess suffix is chosen based on the type of output

	rgb  : .R, .G, .B

	xyz  : .X, .Y, .Z

	uvw  : .U, .V, .W


<h2>checkpoint_file_name</h2>
<b>String</b>  

Default value : checkpoint.exr  

Name of checkpoint output file.


<h2>checkpoint_multi_version_file_name</h2>
<b>String</b>  

Default value :   

Name of checkpoint output file under checkpoint file overwrite=off condition.


<h2>compression</h2>
<b>Int</b>  *enum*

- none = 0

- zip = 1 (default)

- rle = 2

- zips = 3

- piz = 4

- pxr24 = 5

- b44 = 6

- b44a = 7

- dwaa = 8

- dwab = 9


Compression used for file (or file part in the multi-part case). All render outputs that target the same image must specify the same compression.


<h2>cryptomatte_depth</h2>
<b>Int</b>  

Default value : 6  

Number of cryptomatte (id,coverage) data sets to output


<h2>denoise</h2>
<b>Bool</b>  

Default value : False  

Run optix denoiser before writing to disk


<h2>denoiser_input</h2>
<b>Int</b>  *enum*

- not an input = 0 (default)

- as albedo = 1

- as normal = 2


How to use this output as a denoiser input


<h2>display_filter</h2>
<b>67108864</b>  

Default value : None  

If "result" is "display filter", this attribute refers to a display filter object which is used to compute the output pixel values.


<h2>exr_dwa_compression_level</h2>
<b>Float</b>  

Default value : 85.0  

Compression level used for file with dwaa or dwab compression. All render outputs that target the same image must specify the same compression level.


<h2>exr_header_attributes</h2>
<b>Metadata</b>  

Default value : None  

Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}


<h2>file_name</h2>
<b>String</b>  

Default value : scene.exr  

Name of destination file.


<h2>file_part</h2>
<b>String</b>  

Default value :   

Name of sub-image if using a multi-part exr file.


<h2>lpe</h2>
<b>String</b>  

Default value :   

This attribute specifies a light path expression to output. For details on light path expression syntax see:

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

		'transmission' : C<TS>[DSG]+[<L.>O]


<h2>material_aov</h2>
<b>String</b>  

Default value :   

If "result" is "material aov", this attribute specifies a material aov expression to output.  The expression format is: 

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

		'spec'.MG.roughness : Roughness of all mirror and glossy lobes that have the 'spec' label


<h2>math_filter</h2>
<b>Int</b>  *enum*

- average = 0 (default)

- sum = 1

- min = 2

- max = 3

- force_consistent_sampling = 4

- closest = 5


the math filter over the pixel.

options include:

	average

	sum

	min

	max

	force_consistent_sampling : average of the first "min_adaptive_samples"

	closest                   : use sample with minimum z-depth


<h2>output_type</h2>
<b>String</b>  

Default value : flat  

Specifies the type of output.  Defaults to "flat", meaning a flat exr file.  "deep" will output a deep exr file.


<h2>primitive_attribute</h2>
<b>String</b>  

Default value :   

If "result" is "primitive attribute", this attribute specifies the particular primitive attribute to output.  Default channel name is based on primitive attribute name and type.


<h2>primitive_attribute_type</h2>
<b>Int</b>  *enum*

- FLOAT = 0 (default)

- VEC2F = 1

- VEC3F = 2

- RGB = 3


This attribute specifies the type of the attribute named with the "primitive attribute" setting.  This is required to uniquely specify the primitive attribute.


<h2>reference_render_output</h2>
<b>Renderoutput</b>  

Default value : None  

If "result" is "variance aov", this attribute refers to another render output for which to calculate the pixel variance.


<h2>result</h2>
<b>Int</b>  *enum*

- beauty = 0 (default)

- alpha = 1

- depth = 2

- state variable = 3

- primitive attribute = 4

- time per pixel = 5

- wireframe = 6

- material aov = 7

- light aov = 8

- visibility aov = 9

- variance aov = 10

- weight = 11

- beauty aux = 12

- cryptomatte = 13

- alpha aux = 14

- display filter = 15


The result to output.  Available results: 

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

		"wireframe" - Render as wireframe


<h2>resume_file_name</h2>
<b>String</b>  

Default value :   

Name of input file for resume render start condition


<h2>state_variable</h2>
<b>Int</b>  *enum*

- P = 0

- Ng = 1

- N = 2 (default)

- St = 3

- dPds = 4

- dPdt = 5

- dSdx = 6

- dSdy = 7

- dTdx = 8

- dTdy = 9

- Wp = 10

- depth = 11

- motionvec = 12


If "result" is "state variable", this attribute specifies the particular state variable result. 

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

	"motionvec" - 2D motion vector


<h2>visibility_aov</h2>
<b>String</b>  

Default value : C[<T.><RS>]*[<R[DG]><TD>][LO]  

If "result" is "visibility aov", this attribute specifies a light path expression that defines the set of all paths usedto compute the visibility ratio.


</details>

