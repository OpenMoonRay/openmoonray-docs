---
title: UsdUVTexture

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdUVTexture
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>bias</h3>
    <b>Rgb</b>
    
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Bias to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      
    
    <h3>fallback</h3>
    <b>Rgb</b>
    
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Fallback value used when texture can not be read.</p>
      
    
    <h3>file</h3>
    <b>String</b>
    <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Path to the texture</p>
      
    
    <h3>scale</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Scale to be applied to all components of the texture.  output = textureValue * scale + bias</p>
      
    
    <h3>sourceColorSpace</h3>
    <b>Int</b>
    <i>enum</i>
      
          | raw = 0
        
          | sRGB = 1
        
          | auto = 2 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Flag indicating the color space in which the source texture is encoded.</p>
      
    
    <h3>st</h3>
    <b>Vec2f</b>
    <i>bindable</i>
      
        default: [ 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Texture coordinate to use to fetch this texture.</p>
      
    
    <h3>udim_files</h3>
    <b>StringVector</b>
    
      
        default: []
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>udim_max_v</h3>
    <b>Int</b>
    
      
        default: 10
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">udim maximum v value</p>
      
    
    <h3>udim_values</h3>
    <b>IntVector</b>
    
      
        default: <scene_rdl2.__scene_rdl2__.IntVector object at >
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>wrapS</h3>
    <b>Int</b>
    <i>enum</i>
      
          | black = 0
        
          | clamp = 1
        
          | repeat = 2
        
          | mirror = 3
        
          | useMetadata = 4 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Wrap mode when reading this texture.</p>
      
    
    <h3>wrapT</h3>
    <b>Int</b>
    <i>enum</i>
      
          | black = 0
        
          | clamp = 1
        
          | repeat = 2
        
          | mirror = 3
        
          | useMetadata = 4 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Wrap mode when reading this texture.</p>
      
    
  </p>
</details>

