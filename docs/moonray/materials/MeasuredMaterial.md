---
title: MeasuredMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# MeasuredMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Diffuse attributes</summary>
  <p>
    
    <h3>diffuse</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_factor</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_filename</h3>
    <b>String</b>
    <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_hue_shift</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>diffuse_saturation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
    
    <h3>specular</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_factor</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_filename</h3>
    <b>String</b>
    <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_hue_shift</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>specular_saturation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>anisotropic_direction</h3>
    <b>Vec2f</b>
    
      
        default: [ 1, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>casts_caustics</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>extra_aovs</h3>
    <b>Map</b>
    
      
        default: None
      
        <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    
    <h3>input_normal</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>input_normal_dial</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>input_normal_space</h3>
    <b>Int</b>
    
      
        default: 0
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>label</h3>
    <b>String</b>
    
      
        default: 
      
        <p>label used in material and light aovs</p>
      
    
    <h3>priority</h3>
    <b>Int</b>
    
      
        default: 0
      
        <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    
  </p>
</details>

