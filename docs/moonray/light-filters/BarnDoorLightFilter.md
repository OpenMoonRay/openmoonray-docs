---
title: BarnDoorLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BarnDoorLightFilter
**LIGHTFILTER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Properties attributes</summary>
  <p>
    
    <h3>color</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 1, 1 ]
      
        <p>Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow</p>
      
    
    <h3>density</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>fades the filter effect. 0=no effect (like having no filter), 1=full effect</p>
      
    
    <h3>edge</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)</p>
      
    
    <h3>edge_scale_bottom</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>scale factor for bottom edge</p>
      
    
    <h3>edge_scale_left</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>scale factor for left edge</p>
      
    
    <h3>edge_scale_right</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>scale factor for right edge</p>
      
    
    <h3>edge_scale_top</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>scale factor for top edge</p>
      
    
    <h3>invert</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p>swap application of filter from inside the Barn Door to outside</p>
      
    
    <h3>mode</h3>
    <b>Int</b>
    <i>enum</i>
      
          | analytical = 0 (default)
        
          | physical = 1
        
      
        <p>analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.</p>
      
    
    <h3>node_xform</h3>
    <b>Mat4d</b>
    <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p>transform of the filter</p>
      
    
    <h3>pre_barn_distance</h3>
    <b>Float</b>
    
      
        default: 0.5
      
        <p>distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect</p>
      
    
    <h3>pre_barn_mode</h3>
    <b>Int</b>
    <i>enum</i>
      
          | black = 0
        
          | white = 1
        
          | default = 2 (default)
        
      
        <p>force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)</p>
      
    
    <h3>projector_focal_distance</h3>
    <b>Float</b>
    
      
        default: 30.0
      
        <p>distance of the flap opening from the projector origin. Ignored for orthographic projection</p>
      
    
    <h3>projector_height</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>height of the frustum at distance 1.0</p>
      
    
    <h3>projector_type</h3>
    <b>Int</b>
    <i>enum</i>
      
          | perspective = 0 (default)
        
          | orthographic = 1
        
      
        <p>projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.</p>
      
    
    <h3>projector_width</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>width of the frustum at distance 1.0</p>
      
    
    <h3>radius</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)</p>
      
    
    <h3>rotation</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees</p>
      
    
    <h3>size_bottom</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>additional size on bottom edge</p>
      
    
    <h3>size_left</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>additional size on left edge</p>
      
    
    <h3>size_right</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>additional size on right edge</p>
      
    
    <h3>size_top</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>additional size on top edge</p>
      
    
    <h3>use_light_xform</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>attach to the light (in the -Z direction) and ignore node_xform</p>
      
    
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

