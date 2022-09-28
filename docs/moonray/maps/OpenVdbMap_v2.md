---
title: OpenVdbMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# OpenVdbMap_v2
**MAP SHADER**

---

<details open>
  <summary class="scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>show_active_field</h3>
  <b>Bool</b>  
  
  default: False
  
  When enabled active/inactive field locations will be white/black, respectively
  
  
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>default_value</h3>
  <b>Rgb</b>  
  
  default: [ 0, 0, 0 ]
  
  A default value to use when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found
  
  
  <h3>grid_name</h3>
  <b>String</b>  
  
  default: 
  
  The name of the grid within the .vdb file from which to sample (hint: use openvdb_print to see contents of .vdb file). If no grid is specified, the first grid found in the .vdb will be used.  In cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])
  
  
  <h3>input_texture_coordinates</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  The world-space coordinate to use when 'texture coordinates' is set to 'input texture coordinates'
  
  
  <h3>interpolation</h3>
  <b>Int</b>  *enum*
  
  - point = 0
  
  - box = 1
  
  - quadratic = 2 (default)
  
  
  The type of interpolation to use when sampling the vdb
  
  
  <h3>openvdb_geometry</h3>
  <b>Geometry Vector</b>  
  
  default: []
  
  The OpenVdbGeometry object(s) from which to retrieve the .vdb filename and transform when 'vdb source' is set to 'from OpenVdbGeometry'
  
  
  <h3>show_warnings</h3>
  <b>Bool</b>  
  
  default: False
  
  Enables a warning message when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found
  
  
  <h3>texture</h3>
  <b>String</b>  *filename*
  
  default: 
  
  
  
  
  <h3>texture_coordinates</h3>
  <b>Int</b>  *enum*
  
  - position = 0 (default)
  
  - reference position = 1
  
  - input texture coordinates = 2
  
  
  Which coordinate source to use for the texture lookup
  
  
  <h3>vdb_source</h3>
  <b>Int</b>  *enum*
  
  - from texture = 0 (default)
  
  - from OpenVdbGeometry = 1
  
  
  Where to look for the vdb filename.  Choose 'from texture' to specify a .vdb filename directly via the 'texture' attribute.  Choose 'from OpenVdbGeometry' to use the .vdb filename and transform from an OpenVdbGeometry object in the scene using the 'openvdb geometry' attribute
  
  
  </p>
</details>

