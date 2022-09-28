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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>fallback_bssrdf</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - normalized diffusion = 0 (default)
    
    - dipole = 1
    
    - random walk = 2
    
    
    <p>If the two materials disagree on the type of bssrdf, this type will be used instead.</p>
    
    
    <h3>sss_trace_set</h3>
    <b>Traceset</b>
    
    
    default: None
    
    <p>By default, only the geometry associated with this material contributes to subsurface. The DwaSwitchMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>choice</h3>
    <b>Int</b>
    
    
    default: 0
    
    <p>which of the 64 inputs (0 to 63) to use</p>
    
    
    <h3>extra_aovs</h3>
    <b>Map</b>
    
    
    default: None
    
    <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
    
    
    <h3>label</h3>
    <b>String</b>
    
    
    default: 
    
    <p>label used in material and light aovs</p>
    
    
    <h3>material0</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material1</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material10</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material11</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material12</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material13</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material14</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material15</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material16</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material17</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material18</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material19</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material2</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material20</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material21</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material22</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material23</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material24</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material25</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material26</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material27</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material28</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material29</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material3</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material30</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material31</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material32</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material33</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material34</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material35</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material36</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material37</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material38</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material39</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material4</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material40</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material41</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material42</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material43</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material44</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material45</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material46</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material47</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material48</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material49</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material5</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material50</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material51</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material52</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material53</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material54</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material55</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material56</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material57</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material58</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material59</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material6</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material60</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material61</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material62</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material63</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material7</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material8</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>material9</h3>
    <b>Dwabaselayerable</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>priority</h3>
    <b>Int</b>
    
    
    default: 0
    
    <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
    
    
  </p>
</details>

