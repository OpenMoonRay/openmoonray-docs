---
title: HairLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairLayerMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>blend_color_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | RGB = 0 (default)
          
            | HSV = 1
          
            | HSL = 2
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Color space used when blending the two material's color parameters</p>
        
      </p>
    
    <h3>fallback_bssrdf</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | normalized diffusion = 0 (default)
          
            | dipole = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>extra_aovs</h3>
    <p>
      <b>Map</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
        
      </p>
    
    <h3>hair_material_A</h3>
    <p>
      <b>262144</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">foreground hair material</p>
        
      </p>
    
    <h3>hair_material_B</h3>
    <p>
      <b>262144</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">background hair material</p>
        
      </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">label used in material and light aovs</p>
        
      </p>
    
    <h3>mask</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">foreground hair material weight</p>
        
      </p>
    
    <h3>priority</h3>
    <p>
      <b>Int</b>
      
        
          default: 0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
        
      </p>
    
  </p>
</details>

