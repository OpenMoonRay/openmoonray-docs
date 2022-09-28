---
title: ToonMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ToonMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>crease_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 0, 0 ]  

Creases are sharp edges like corners in the geometry.


<h2>crease_scale</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

This attribute controls the thickness of creases.


<h2>crease_threshold</h2>
<b>Float</b>  *bindable*

Default value : 45.0  

This attribute sets the threshold angle (in degree units) to draw creases. The more the threshold angle is, the less the creases are traced.


<h2>fill_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>fill_color</b> needs to be written</p>


<h2>mode</h2>
<b>Int</b>  *enum*

- outline = 0

- crease = 1

- both = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>mode</b> needs to be written</p>


<h2>outline_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

Outlines are silhouettes of the geometry


<h2>outline_scale</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

This attribute controls the thickness of outlines.


<h2>outline_threshold</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

In most cases, the shader would trace an outline of a model well when this threshold is zero.


</details>

