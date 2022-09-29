---
title: VdbVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbVolume
**ROOTSHADER SHADER VOLUMESHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Optical Properties attributes</summary>
  <p>
    
    <h3>anisotropy</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.</p>
      
    </p>
    
    <h3>color_mult</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">A multiplier further applied to the color.</p>
      
    </p>
    
    <h3>incandescence_gain_mult</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">A multiplier further applied to the incandescence gain.</p>
      
    </p>
    
    <h3>opacity_gain_mult</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">A multiplier further applied to the opacity gain.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>bake_divisions</h3>
    <p>
      <b>Int</b>
      
      
        default: 100
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Divide widest axis by this many divisions</p>
      
    </p>
    
    <h3>bake_resolution_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | default = 0 (default)
        
          | divisions = 1
        
          | voxel size = 2
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Toggle method to specify grid resolution of baked density grid.<br>		default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions<br>		divisions: specify number of divisions.<br>		voxel size: specify voxel size.</p>
      
    </p>
    
    <h3>bake_voxel_size</h3>
    <p>
      <b>Float</b>
      
      
        default: 10.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Size of voxel in world space</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">label used in light aovs</p>
      
    </p>
    
    <h3>surface_opacity_threshold</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      
    </p>
    
  </p>
</details>

