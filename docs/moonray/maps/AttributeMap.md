---
title: AttributeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AttributeMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Primitive Attribute attributes</summary>
  <p>
    
    <h3>primitive_attribute_name</h3>
    <b>String</b>
    
    
    default: Cd
    
    <p>the name of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
    
    
    <h3>primitive_attribute_type</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  float = 0 
    
    |  vec2f = 1 
    
    |  vec3f = 2 
    
    |  rgb = 3 (default) 
    
    |  int = 4 
    
    
    <p>the type of primitive attribute to display when attribute 'map type' is set to 'primitive attribute'</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>color</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>input color - preferably a connected map</p>
    
    
    <h3>default_value</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>default value to display when the requested attribute is not available</p>
    
    
    <h3>map_type</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  primitive attribute = 0 (default) 
    
    |  position = 1 
    
    |  texture st = 2 
    
    |  shading normal = 3 
    
    |  geometric normal = 4 
    
    |  dpds = 5 
    
    |  dpdt = 6 
    
    |  dnds = 7 
    
    |  dndt = 8 
    
    |  map color = 9 
    
    |  hair surface P = 12 
    
    |  hair surface N = 13 
    
    |  hair surface st = 14 
    
    |  hair closest surface st = 15 
    
    |  id = 16 
    
    |  velocity = 17 
    
    |  acceleration = 18 
    
    |  motionvec = 19 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>warn_when_unavailable</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>Whether or not to issue a warning when the requested attribute is unavailable</p>
    
    
  </p>
</details>

