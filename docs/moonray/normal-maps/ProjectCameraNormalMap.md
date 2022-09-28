---
title: ProjectCameraNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraNormalMap
**SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>aspect_ratio_source</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | from texture = 0 (default)
          
            | custom = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio</p>
        
      </p>
    
    <h3>custom_aspect_ratio</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">a custom aspect ratio for the projected texture</p>
        
      </p>
    
    <h3>normal_encoding</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | [0,1] = 0 (default)
          
            | [-1,1] = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]</p>
        
      </p>
    
    <h3>project_on_back_faces</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Toggles whether camera projections appear on back faces.</p>
        
      </p>
    
    <h3>projector</h3>
    <p>
      <b>Camera</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the camera to project from</p>
        
      </p>
    
    <h3>texture</h3>
    <p>
      <b>String</b>
      <i>filename</i>
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
        
      </p>
    
    <h3>use_reference_space</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">use reference space</p>
        
      </p>
    
  </p>
</details>

