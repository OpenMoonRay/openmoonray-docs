---
title: Template snippets

# uncomment if you want MathJax formatting available
maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

## This template is for various, potentially useful snippets

<!-- To create a 'standardized note' in a page -->
<!-- add example note here -->

##### Syntax highlighting

You can insert any block of code you want with a syntax highlight effect like below

Available languages : `python`, `c++`, `c++`, `latex`, `html`, `css`, `javascript`, `shell`, etc. 


Wrap the block like so,

{% raw% }
~~~ c++
bool
intersectSphere(const Vec3f &rayOrigin, const Vec3f &rayDir,
                const Vec3f &sphereLoc, float sphereRadius,
                Vec3f *hitPoint)
{
    // TODO: write this function
}
~~~
{% endraw %}

~~~ c++
bool
intersectSphere(const Vec3f &rayOrigin, const Vec3f &rayDir,
                const Vec3f &sphereLoc, float sphereRadius,
                Vec3f *hitPoint)
{
    // TODO: write this function
}
~~~


##### A snippet of shell text 
~~~ shell
$ moonray_gui -in scene.rdla -in scene.rdlb -out scene.exr
~~~

##### A keyboard key

Insert a keyboard key like this <kbd>Ctrl</kbd> + <kbd>B</kbd>, just use `<kbd>Ctrl</kbd>`.


##### To display a math block, wrap in "$"

$x^n + y^n = z^n$

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$


##### To add a table

| Name    | normalized      |
|----------|-----------------|
| Type:    | bool            |
| Default: | true            |
| Comment: | Set to 0, 1 or null

##### To display an image add ! and wrap the alt text in [ ]. Then wrap the link for the image in parentheses ()

![](../images/sd-ior-wedge.gif)
