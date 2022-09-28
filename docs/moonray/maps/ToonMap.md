---
title: ToonMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ToonMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>crease_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 1, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Creases are sharp edges like corners in the geometry.</p>
        
      </p>
    
    <h3>crease_scale</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">This attribute controls the thickness of creases.</p>
        
      </p>
    
    <h3>crease_threshold</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 45.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">This attribute sets the threshold angle (in degree units) to draw creases. The more the threshold angle is, the less the creases are traced.</p>
        
      </p>
    
    <h3>fill_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | outline = 0
          
            | crease = 1
          
            | both = 2 (default)
          
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>outline_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Outlines are silhouettes of the geometry</p>
        
      </p>
    
    <h3>outline_scale</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">This attribute controls the thickness of outlines.</p>
        
      </p>
    
    <h3>outline_threshold</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">In most cases, the shader would trace an outline of a model well when this threshold is zero.</p>
        
      </p>
    
  </p>
</details>

