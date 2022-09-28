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
<summary class="scene-class-attr-group">General attributes</summary>

<h2>invert</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>invert</b> needs to be written</p>


<h2>mode</h2>
<b>Int</b>  *enum*

- convex = 0

- concave = 1

- composite = 2

- all = 3 (default)


The composite mode outputs the composite of convex curvature and concave curvature as grayscale ((concave - convex) * 0.5) + 0.5. The all mode outputs the convex curvature in the red channel, concave curvature in the green channel, and composite of both curvatures in the blue channel.


<h2>power</h2>
<b>Float</b>  

Default value : 0.5  

<p class="scene-class-attr-missing">Documentation for the attribute <b>power</b> needs to be written</p>


<h2>scale</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>scale</b> needs to be written</p>


</details>

