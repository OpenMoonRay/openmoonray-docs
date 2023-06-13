# Shadow Terminators

<aside>
<p>See the research paper by Deshmukh and Green: <a href="https://research.dreamworks.com/wp-content/uploads/2020/08/talk_shadow_terminator.pdf">"Predictable and Targeted Softening of the Shadow Terminator"</a> </p>
</aside>
{: .info-aside}

Normal/bump mapping can be used to add surface detail missing from the base geometry. However, this results in a shading 
normal `Ns` that deviates from the true geometric normal `Ng` of the surface. This can cause harsh shadow terminator 
effects, as seen below. 

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/no-normal-mapping-cap.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/normal-mapping-cap.jpg' 
                               image_alt_after='no normal mapping applied' 
                               image_alt_before='normal mapping applied' 
                               position='47' %}
*Left: no normal mapping applied, no harsh terminators, right: normal mapping applied, causing harsh terminators*

![Harsh Shadow Terminator Graph]({{ "/assets/images/user-reference/how-to-guides/shadow-terminators/harsh-terminator-graph.png" | absolute_url }})
*Visualization of the harsh shadow terminator. The x-axis represents the angle (in radians) between `Ns` and `Ng`, and the 
y-axis represents the angle (in radians) between `Ns` and the incoming light direction `wi`. The purple color represents 
no visibility, while the yellow color represents full visibility.*

In order to mitigate these harsh termination effects, we provide a scene setting called *shadow_terminator_fix* that will 
soften the shadow terminators. There are four different options we provide, and they all have their tradeoffs.

## Targeted Shadow Terminator
This terminator preserves the shape of the lobe. This means it maintains its highlights, while
also softening the shadow terminators.

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/normal-mapping-cap.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/cap-targeted-terminator.jpg' 
                               image_alt_after='cap harsh terminator' 
                               image_alt_before='cap targeted terminator' 
                               position='47' %}
*Left: harsh terminator, right: targeted terminator*

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/ice-harsh-terminator.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/ice-targeted-terminator.jpg' 
                               image_alt_after='ice harsh terminator' 
                               image_alt_before='ice targeted terminator' 
                               position='50' %}
*Left: harsh terminator, right: targeted terminator*

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/harsh-terminator-graph.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/targeted-terminator-graph.png' 
                               image_alt_after='harsh terminator graph' 
                               image_alt_before='targeted terminator graph' 
                               position='50' %}
*You will see above that the shadow termination edge has softened, while also maintaining the existing visibility hemisphere.*

## Cosine Terminator
This terminator is based on Chang et al, "Taming the Shadow Terminator". It has no effect on the unoccluded part of the 
hemisphere, which is important, but it does dampen the BRDF response for small deviations from the geometric normal. 

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/normal-mapping-cap.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/cap-cosine-terminator.jpg' 
                               image_alt_after='cap harsh terminator' 
                               image_alt_before='cap cosine terminator' 
                               position='47' %}
*Left: harsh terminator, right: cosine terminator*

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/ice-harsh-terminator.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/ice-cosine-terminator.jpg' 
                               image_alt_after='ice harsh terminator' 
                               image_alt_before='ice cosine terminator' 
                               position='50' %}
*Left: harsh terminator, right: cosine terminator*

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/harsh-terminator-graph.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/cosine-terminator-graph.png' 
                               image_alt_after='harsh terminator graph' 
                               image_alt_before='cosine terminator graph' 
                               position='50' %}

## Sine Terminator
This terminator is a modification of Chang et al. 

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/harsh-terminator-graph.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/sine-terminator-graph.png' 
                               image_alt_after='harsh terminator graph' 
                               image_alt_before='sine terminator graph' 
                               position='50' %}

## GGX Terminator
This terminator is based on Estevez et al, "A Microfacet-Based Shadowing Function to Solve the Bump Terminator Problem".

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/normal-mapping-cap.jpg'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/cap-ggx-terminator.jpg' 
                               image_alt_after='cap harsh terminator' 
                               image_alt_before='cap ggx terminator' 
                               position='47' %}
*Left: harsh terminator, right: ggx terminator*

{% include image-comparer.html image_path_after='/assets/images/user-reference/how-to-guides/shadow-terminators/harsh-terminator-graph.png'
                               image_path_before='/assets/images/user-reference/how-to-guides/shadow-terminators/ggx-terminator-graph.png' 
                               image_alt_after='harsh terminator graph' 
                               image_alt_before='ggx terminator graph' 
                               position='50' %}