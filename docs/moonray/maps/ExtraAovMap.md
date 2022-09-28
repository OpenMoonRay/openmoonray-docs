---
title: ExtraAovMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ExtraAovMap
**MAP SHADER**

---

<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  Bind the root of a map shader network that you want evaluated as an extra aov
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  Sets the LPE label that is used for the extra aov
  
  
  <h3>post_scatter</h3>
  <b>Bool</b>  
  
  default: False
  
  If true, accumulate this aov when scattering off the surface as an indirect ray (after the LPE scatter transition event, after path throughput multiplication), rather than when the surface is first intersected.  The purpose of this setting is to efficiently capture information from all rays that leave a surface that could potentially intersect and trigger aov evaluation on other surfaces.
  
  
  </p>
</details>

