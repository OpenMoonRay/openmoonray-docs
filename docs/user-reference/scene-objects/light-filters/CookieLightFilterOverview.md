---
Why the name? Cookie is a nickname for Cucoloris - a device used in live action lighting to create shadow patterns.

The cookie light filter projects a pattern from either an orthographic or perspective camera. The filter takes as 
its input a Moonray map shader, so any of the image generators, noise, checkerboard, image map will work.

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_1.png" | absolute_url }}){: style="width: 400px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_2.png" | absolute_url }}){: style="width: 400px"} |
|--------------------------------------------------------------|---|
| Cookie light filter. | Example render using the light filter. |

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_ortho.png" | absolute_url }}){: style="width: 400px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_ortho_render.png" | absolute_url }}){: style="width: 400px"}
|--------------------------------------------------------------|---|
| Orthographic projection. | Example render using orthographic projection. |

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_perspective.png" | absolute_url }}){: style="width: 400px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_perspective_render.png" | absolute_url }}){: style="width: 400px"}
|--------------------------------------------------------------|---|
| Perspective projection. | Example render using perspective projection. |

The cookie texture inherits the wrap mode on the map shader, e.g. "extend" or "repeat":

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_wrap_extend.png" | absolute_url }}){: style="width: 400px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/CookieLightFilter/cookie_wrap_repeat.png" | absolute_url }}){: style="width: 400px"}
|--------------------------------------------------------------|---|
| "extend" wrap mode. | "repeat" wrap mode. |

