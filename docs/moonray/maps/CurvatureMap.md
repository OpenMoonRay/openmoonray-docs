---
title: CurvatureMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CurvatureMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>invert</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>mode</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  convex = 0 
    
    |  concave = 1 
    
    |  composite = 2 
    
    |  all = 3 (default) 
    
    
    <p>The composite mode outputs the composite of convex curvature and concave curvature as grayscale ((concave - convex) * 0.5) + 0.5. The all mode outputs the convex curvature in the red channel, concave curvature in the green channel, and composite of both curvatures in the blue channel.</p>
    
    
    <h3>power</h3>
    <b>Float</b>
    
    
    default: 0.5
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>scale</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>

