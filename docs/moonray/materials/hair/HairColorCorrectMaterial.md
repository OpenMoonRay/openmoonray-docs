---
title: HairColorCorrectMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairColorCorrectMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="scene-class-attr-group">Hue/Sat/Gain attributes</summary>
  <p>
  
  <h3>gain</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  multiplies the input channels by the specified value
  
  
  <h3>hue_shift</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  shifts the hue of the input (spectrum range is 0-1)
  
  
  <h3>saturation</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the input below 1.0 and adds saturation above 1.0
  
  
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">TMI attributes</summary>
  <p>
  
  <h3>TMI</h3>
  <b>Rgb</b>  
  
  default: [ 0, 0, 0 ]
  
  T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 
  
  
  <h3>TMI_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  enables the TMI parameters
  
  
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result
  
  
  <h3>input_hair_material</h3>
  <b>262144</b>  
  
  default: None
  
  <p class="scene-class-attr-missing">No documentation available</p>
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  label used in material and light aovs
  
  
  <h3>mix</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  how much of the overall color correct to mix in
  
  
  <h3>on</h3>
  <b>Bool</b>  
  
  default: True
  
  Enable/disable all color corrections
  
  
  <h3>priority</h3>
  <b>Int</b>  
  
  default: 0
  
  The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.
  
  
  </p>
</details>

