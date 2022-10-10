---
title: DwaEmissiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaEmissiveMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
    
    <h3>presence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the energy emitted from this material</p>
      
    </p>
    
    <h3>show_emission</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disable emission</p>
      
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
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">label used in material and light aovs</p>
      
    </p>
    
    <h3>priority</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    </p>
    
  </p>
</details>

