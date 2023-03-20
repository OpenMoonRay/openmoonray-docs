---
title: SwitchDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SwitchDisplacement
{%-include overview.html data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.gallery data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bound padding defines how much to extend the bounding box of the object. keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). setting the bound padding too large will consume more memory and tessellation time.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.bound_padding.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.bound_padding.links heading=4-%}
    </p>
    <h3>choice</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Which of the 64 inputs (0 to 63) to use, values greater than 63 get cycled back to be in [0,63]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.choice.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.choice.links heading=4-%}
    </p>
    <h3>displacement0</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement0.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement0.links heading=4-%}
    </p>
    <h3>displacement1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement1.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement1.links heading=4-%}
    </p>
    <h3>displacement10</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement10.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement10.links heading=4-%}
    </p>
    <h3>displacement11</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement11.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement11.links heading=4-%}
    </p>
    <h3>displacement12</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement12.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement12.links heading=4-%}
    </p>
    <h3>displacement13</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement13.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement13.links heading=4-%}
    </p>
    <h3>displacement14</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement14.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement14.links heading=4-%}
    </p>
    <h3>displacement15</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement15.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement15.links heading=4-%}
    </p>
    <h3>displacement16</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement16.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement16.links heading=4-%}
    </p>
    <h3>displacement17</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement17.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement17.links heading=4-%}
    </p>
    <h3>displacement18</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement18.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement18.links heading=4-%}
    </p>
    <h3>displacement19</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement19.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement19.links heading=4-%}
    </p>
    <h3>displacement2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement2.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement2.links heading=4-%}
    </p>
    <h3>displacement20</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement20.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement20.links heading=4-%}
    </p>
    <h3>displacement21</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement21.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement21.links heading=4-%}
    </p>
    <h3>displacement22</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement22.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement22.links heading=4-%}
    </p>
    <h3>displacement23</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement23.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement23.links heading=4-%}
    </p>
    <h3>displacement24</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement24.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement24.links heading=4-%}
    </p>
    <h3>displacement25</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement25.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement25.links heading=4-%}
    </p>
    <h3>displacement26</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement26.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement26.links heading=4-%}
    </p>
    <h3>displacement27</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement27.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement27.links heading=4-%}
    </p>
    <h3>displacement28</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement28.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement28.links heading=4-%}
    </p>
    <h3>displacement29</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement29.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement29.links heading=4-%}
    </p>
    <h3>displacement3</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement3.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement3.links heading=4-%}
    </p>
    <h3>displacement30</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement30.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement30.links heading=4-%}
    </p>
    <h3>displacement31</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement31.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement31.links heading=4-%}
    </p>
    <h3>displacement32</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement32.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement32.links heading=4-%}
    </p>
    <h3>displacement33</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement33.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement33.links heading=4-%}
    </p>
    <h3>displacement34</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement34.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement34.links heading=4-%}
    </p>
    <h3>displacement35</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement35.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement35.links heading=4-%}
    </p>
    <h3>displacement36</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement36.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement36.links heading=4-%}
    </p>
    <h3>displacement37</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement37.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement37.links heading=4-%}
    </p>
    <h3>displacement38</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement38.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement38.links heading=4-%}
    </p>
    <h3>displacement39</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement39.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement39.links heading=4-%}
    </p>
    <h3>displacement4</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement4.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement4.links heading=4-%}
    </p>
    <h3>displacement40</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement40.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement40.links heading=4-%}
    </p>
    <h3>displacement41</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement41.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement41.links heading=4-%}
    </p>
    <h3>displacement42</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement42.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement42.links heading=4-%}
    </p>
    <h3>displacement43</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement43.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement43.links heading=4-%}
    </p>
    <h3>displacement44</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement44.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement44.links heading=4-%}
    </p>
    <h3>displacement45</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement45.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement45.links heading=4-%}
    </p>
    <h3>displacement46</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement46.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement46.links heading=4-%}
    </p>
    <h3>displacement47</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement47.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement47.links heading=4-%}
    </p>
    <h3>displacement48</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement48.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement48.links heading=4-%}
    </p>
    <h3>displacement49</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement49.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement49.links heading=4-%}
    </p>
    <h3>displacement5</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement5.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement5.links heading=4-%}
    </p>
    <h3>displacement50</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement50.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement50.links heading=4-%}
    </p>
    <h3>displacement51</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement51.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement51.links heading=4-%}
    </p>
    <h3>displacement52</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement52.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement52.links heading=4-%}
    </p>
    <h3>displacement53</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement53.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement53.links heading=4-%}
    </p>
    <h3>displacement54</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement54.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement54.links heading=4-%}
    </p>
    <h3>displacement55</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement55.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement55.links heading=4-%}
    </p>
    <h3>displacement56</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement56.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement56.links heading=4-%}
    </p>
    <h3>displacement57</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement57.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement57.links heading=4-%}
    </p>
    <h3>displacement58</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement58.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement58.links heading=4-%}
    </p>
    <h3>displacement59</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement59.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement59.links heading=4-%}
    </p>
    <h3>displacement6</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement6.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement6.links heading=4-%}
    </p>
    <h3>displacement60</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement60.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement60.links heading=4-%}
    </p>
    <h3>displacement61</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement61.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement61.links heading=4-%}
    </p>
    <h3>displacement62</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement62.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement62.links heading=4-%}
    </p>
    <h3>displacement63</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement63.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement63.links heading=4-%}
    </p>
    <h3>displacement7</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement7.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement7.links heading=4-%}
    </p>
    <h3>displacement8</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement8.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement8.links heading=4-%}
    </p>
    <h3>displacement9</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement9.images data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.SwitchDisplacement.attributes.displacement9.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.displacement.SwitchDisplacement-%}