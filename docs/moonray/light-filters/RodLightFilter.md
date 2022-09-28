---
title: RodLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RodLightFilter
**LIGHTFILTER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Properties attributes</summary>
  <p>
    
    <h3>color</h3>
    <b>Rgb</b>
    
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">filter color. Scales the light within the volume. For each color channel, 0=full shadow, 1=no shadow</p>
      
    
    <h3>density</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">fades the filter effect. 0=no effect (like having no filter), 1=full effect</p>
      
    
    <h3>depth</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">depth of the base box (before radius and edge)</p>
      
    
    <h3>edge</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">size of transition zone from the rounded box to the outside</p>
      
    
    <h3>height</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">height of the base box (before radius and edge)</p>
      
    
    <h3>intensity</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">scalar for multiplying the color. 0=black 1=color</p>
      
    
    <h3>invert</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">swap application of filter from inside the volume to outside</p>
      
    
    <h3>node_xform</h3>
    <b>Mat4d</b>
    <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">transform of the filter</p>
      
    
    <h3>radius</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">radius by which to expand the base box into a rounded box</p>
      
    
    <h3>ramp_in_distances</h3>
    <b>FloatVector</b>
    
      
        default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">input distance for ramp control</p>
      
    
    <h3>ramp_interpolation_types</h3>
    <b>IntVector</b>
    
      
        default: <scene_rdl2.__scene_rdl2__.IntVector object at >
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">interpolation types for ramp control</p>
      
    
    <h3>ramp_out_distances</h3>
    <b>FloatVector</b>
    
      
        default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">remapped distances for ramp control</p>
      
    
    <h3>width</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">width of the base box (before radius and edge)</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>on</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
  </p>
</details>

