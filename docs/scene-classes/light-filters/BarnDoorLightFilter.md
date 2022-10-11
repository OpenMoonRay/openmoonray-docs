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
  <summary class="scene-class-attr-group">Properties attributes</summary>
  <p>
    
    <h3>color</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-comment">Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow</p>
      
    </p>
    
    <h3>density</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">fades the filter effect. 0=no effect (like having no filter), 1=full effect</p>
      
    </p>
    
    <h3>edge</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)</p>
      
    </p>
    
    <h3>edge_scale_bottom</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">scale factor for bottom edge</p>
      
    </p>
    
    <h3>edge_scale_left</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">scale factor for left edge</p>
      
    </p>
    
    <h3>edge_scale_right</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">scale factor for right edge</p>
      
    </p>
    
    <h3>edge_scale_top</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">scale factor for top edge</p>
      
    </p>
    
    <h3>invert</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">swap application of filter from inside the Barn Door to outside</p>
      
    </p>
    
    <h3>mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | analytical = 0 (default)
        
          | physical = 1
        
      
        <p class="scene-class-attr-comment">analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.</p>
      
    </p>
    
    <h3>node_xform</h3>
    <p>
      <b>Mat4d</b>
      <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="scene-class-attr-comment">transform of the filter</p>
      
    </p>
    
    <h3>pre_barn_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="scene-class-attr-comment">distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect</p>
      
    </p>
    
    <h3>pre_barn_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | black = 0
        
          | white = 1
        
          | default = 2 (default)
        
      
        <p class="scene-class-attr-comment">force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)</p>
      
    </p>
    
    <h3>projector_focal_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 30.0
      
        <p class="scene-class-attr-comment">distance of the flap opening from the projector origin. Ignored for orthographic projection</p>
      
    </p>
    
    <h3>projector_height</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">height of the frustum at distance 1.0</p>
      
    </p>
    
    <h3>projector_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | perspective = 0 (default)
        
          | orthographic = 1
        
      
        <p class="scene-class-attr-comment">projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.</p>
      
    </p>
    
    <h3>projector_width</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">width of the frustum at distance 1.0</p>
      
    </p>
    
    <h3>radius</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)</p>
      
    </p>
    
    <h3>rotation</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees</p>
      
    </p>
    
    <h3>size_bottom</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">additional size on bottom edge</p>
      
    </p>
    
    <h3>size_left</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">additional size on left edge</p>
      
    </p>
    
    <h3>size_right</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">additional size on right edge</p>
      
    </p>
    
    <h3>size_top</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">additional size on top edge</p>
      
    </p>
    
    <h3>use_light_xform</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">attach to the light (in the -Z direction) and ignore node_xform</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>on</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>

