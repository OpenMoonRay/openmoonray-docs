---
title: TransformNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformNormalMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
    
    <h3>input_normal</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">input normal in either tangent or render space</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>decode_input_normal</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">decode the input normal if it's in tangent space [0,1] -> [-1,1]</p>
      
    
    <h3>transform</h3>
    <b>Int</b>
    <i>enum</i>
      
          | tangent to render = 0 (default)
        
          | render to tangent = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">transform to apply to the normals</p>
      
    
  </p>
</details>

