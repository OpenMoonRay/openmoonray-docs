---
title: DwaSwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaSwitchMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>fallback_bssrdf</h2>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


If the two materials disagree on the type of bssrdf, this type will be used instead.


<h2>sss_trace_set</h2>
<b>Traceset</b>  

Default value : None  

By default, only the geometry associated with this material contributes to subsurface. The DwaSwitchMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>choice</h2>
<b>Int</b>  

Default value : 0  

which of the 64 inputs (0 to 63) to use


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>material0</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material0</b> needs to be written</p>


<h2>material1</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material1</b> needs to be written</p>


<h2>material10</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material10</b> needs to be written</p>


<h2>material11</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material11</b> needs to be written</p>


<h2>material12</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material12</b> needs to be written</p>


<h2>material13</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material13</b> needs to be written</p>


<h2>material14</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material14</b> needs to be written</p>


<h2>material15</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material15</b> needs to be written</p>


<h2>material16</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material16</b> needs to be written</p>


<h2>material17</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material17</b> needs to be written</p>


<h2>material18</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material18</b> needs to be written</p>


<h2>material19</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material19</b> needs to be written</p>


<h2>material2</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material2</b> needs to be written</p>


<h2>material20</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material20</b> needs to be written</p>


<h2>material21</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material21</b> needs to be written</p>


<h2>material22</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material22</b> needs to be written</p>


<h2>material23</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material23</b> needs to be written</p>


<h2>material24</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material24</b> needs to be written</p>


<h2>material25</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material25</b> needs to be written</p>


<h2>material26</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material26</b> needs to be written</p>


<h2>material27</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material27</b> needs to be written</p>


<h2>material28</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material28</b> needs to be written</p>


<h2>material29</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material29</b> needs to be written</p>


<h2>material3</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material3</b> needs to be written</p>


<h2>material30</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material30</b> needs to be written</p>


<h2>material31</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material31</b> needs to be written</p>


<h2>material32</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material32</b> needs to be written</p>


<h2>material33</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material33</b> needs to be written</p>


<h2>material34</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material34</b> needs to be written</p>


<h2>material35</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material35</b> needs to be written</p>


<h2>material36</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material36</b> needs to be written</p>


<h2>material37</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material37</b> needs to be written</p>


<h2>material38</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material38</b> needs to be written</p>


<h2>material39</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material39</b> needs to be written</p>


<h2>material4</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material4</b> needs to be written</p>


<h2>material40</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material40</b> needs to be written</p>


<h2>material41</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material41</b> needs to be written</p>


<h2>material42</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material42</b> needs to be written</p>


<h2>material43</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material43</b> needs to be written</p>


<h2>material44</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material44</b> needs to be written</p>


<h2>material45</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material45</b> needs to be written</p>


<h2>material46</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material46</b> needs to be written</p>


<h2>material47</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material47</b> needs to be written</p>


<h2>material48</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material48</b> needs to be written</p>


<h2>material49</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material49</b> needs to be written</p>


<h2>material5</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material5</b> needs to be written</p>


<h2>material50</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material50</b> needs to be written</p>


<h2>material51</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material51</b> needs to be written</p>


<h2>material52</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material52</b> needs to be written</p>


<h2>material53</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material53</b> needs to be written</p>


<h2>material54</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material54</b> needs to be written</p>


<h2>material55</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material55</b> needs to be written</p>


<h2>material56</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material56</b> needs to be written</p>


<h2>material57</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material57</b> needs to be written</p>


<h2>material58</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material58</b> needs to be written</p>


<h2>material59</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material59</b> needs to be written</p>


<h2>material6</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material6</b> needs to be written</p>


<h2>material60</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material60</b> needs to be written</p>


<h2>material61</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material61</b> needs to be written</p>


<h2>material62</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material62</b> needs to be written</p>


<h2>material63</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material63</b> needs to be written</p>


<h2>material7</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material7</b> needs to be written</p>


<h2>material8</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material8</b> needs to be written</p>


<h2>material9</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>material9</b> needs to be written</p>


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

