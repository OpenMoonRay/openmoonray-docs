---
title: GradientMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# GradientMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Additional properties attributes</summary>
  <p>
    
    <h3>symmetric</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Color A blends into Color B and then back into Color A from the start to the end point</p>
        
      </p>
    
    <h3>symmetric_center</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.5
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Shifts the center of the symmetric falloff</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Falloff properties attributes</summary>
  <p>
    
    <h3>falloff_bias</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.5
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Compresses the blending towards the start or end color</p>
        
      </p>
    
    <h3>falloff_end</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Shifts where the falloff ends</p>
        
      </p>
    
    <h3>falloff_end_intensity</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Adjust the intensity of the end color</p>
        
      </p>
    
    <h3>falloff_exponent</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Adjusts rate of blending</p>
        
      </p>
    
    <h3>falloff_start</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Shifts where the falloff starts</p>
        
      </p>
    
    <h3>falloff_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | none = 0
          
            | natural = 1 (default)
          
            | linear = 2
          
            | squared = 3
          
            | gaussian = 4
          
            | ease out = 5
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Falloff blend mode</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Gradient properties attributes</summary>
  <p>
    
    <h3>color_A</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Start color</p>
        
      </p>
    
    <h3>color_B</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">End color</p>
        
      </p>
    
    <h3>end</h3>
    <p>
      <b>Vec3f</b>
      
        
          default: [ 0, 1, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">End position in the chosen space</p>
        
      </p>
    
    <h3>object</h3>
    <p>
      <b>Geometry</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Use the provided object's transformation space (only used if object space is also specified)</p>
        
      </p>
    
    <h3>space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | render = 0 (default)
          
            | camera = 1
          
            | world = 2
          
            | screen = 3
          
            | object = 4
          
            | reference = 5
          
            | texture = 6
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The transformation space in which to perform the blending</p>
        
      </p>
    
    <h3>start</h3>
    <p>
      <b>Vec3f</b>
      
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Start position in the chosen space</p>
        
      </p>
    
  </p>
</details>

