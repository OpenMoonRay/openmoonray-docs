---
title: UsdPreviewSurface

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPreviewSurface
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>clearcoat</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Second specular lobe amount. The color is white.</p>
      
    </p>
    
    <h3>clearcoatRoughness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.00999999977648
      
        <p class="scene-class-attr-comment">Roughness for the second specular lobe.</p>
      
    </p>
    
    <h3>diffuseColor</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0.18, 0.18, 0.18 ]
      
        <p class="scene-class-attr-comment">When using metallic workflow this is interpreted as albedo.</p>
      
    </p>
    
    <h3>displacement</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Displacement in the direction of the normal.</p>
      
    </p>
    
    <h3>emissiveColor</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">Emissive component.</p>
      
    </p>
    
    <h3>extra_aovs</h3>
    <p>
      <b>Map</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    </p>
    
    <h3>ior</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.5
      
        <p class="scene-class-attr-comment">Index of Refraction to be used for translucent objects and objects with specular components, including the clearcoat if clearcoat &gt; 0.</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">label used in material and light aovs</p>
      
    </p>
    
    <h3>metallic</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Use 1 for metallic surfaces and 0 for non-metallic.  If metallic is 1, then both F0 (reflectivity at 0 degree incidence) and edge F90 reflectivity will simply be the Albedo.  If metallic is 0, then Albedo is ignored in the calculation of F0 and F90; F0 is derived from ior via ( (1-ior)/(1+ior) )^2 and F90 is white. In between, we interpolate.</p>
      
    </p>
    
    <h3>normal</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
      
        default: [ 0, 0, 1 ]
      
        <p class="scene-class-attr-comment">Expects normal in tangent space [(-1,-1,-1), (1,1,1)]</p>
      
    </p>
    
    <h3>occlusion</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Ignored by Moonray</p>
      
    </p>
    
    <h3>opacity</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">When opacity is 1.0 then the geometry is fully opaque, if it is smaller than 1.0 then the geometry is translucent, when it is 0 the geometry is transparent. Note that even a fully transparent object still receives lighting as, for example, perfectly clear glass still has a specular response.</p>
      
    </p>
    
    <h3>opacityThreshold</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="scene-class-attr-comment">The opacityThreshold input is useful for creating geometric cut-outs based on the opacity input. A value of 0.0 indicates that no masking is applied to the opacity input, while a value greater than 0.0 indicates that rendering of the surface is limited to the areas where the opacity is greater or equal to that value.</p>
      
    </p>
    
    <h3>priority</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    </p>
    
    <h3>roughness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.5
      
        <p class="scene-class-attr-comment">Roughness for the specular lobe. The value ranges from 0 to 1, which goes from a perfectly specular surface at 0.0 to maximum roughness of the specular lobe.</p>
      
    </p>
    
    <h3>specularColor</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">Specular color to be used. This is the color at 0 incidence. Edge color is assumed white. Transition between the two colors according to Schlick fresnel approximation.</p>
      
    </p>
    
    <h3>useSpecularWorkflow</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Metalness workflow = 0 (default)
        
          | Specular workflow = 1
        
      
        <p class="scene-class-attr-comment">This node can fundamentally operate in two modes : Specular workflow where you provide a texture/value to the 'specularColor' input. Or, Metallic workflow where you provide a texture/value to the 'metallic' input.</p>
      
    </p>
    
  </p>
</details>

