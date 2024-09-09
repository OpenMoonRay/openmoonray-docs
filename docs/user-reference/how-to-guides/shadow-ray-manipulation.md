# Shadow Ray Manipulation

Suppose your scene is set inside a cave, and you want ambient light infused throughout your cave. An ideal 
solution might be to place an environment light outside of the cave and "ignore" your cave for the purposes of shadowing. 
There are, in fact, a number of reasons you might wish to ignore occluding geometry: to bring more light in, to avoid 
self-shadowing, to prevent non-hero objects from casting distracting shadows, and so on. 

MoonRay provides a number of different controls that allow us to ignore occluding objects:

- [shadow_ray_epsilon](#shadow-ray-epsilon)
- [min_shadow_distance](#min-shadow-distance)
- [max_shadow_distance](#max-shadow-distance)
- [clear_radius](#clear-radius)

## What are shadow rays?

At each shading point in the scene, we must determine whether (and how much) the point is in shadow. The way we measure 
this is by shooting a <span id="definition">shadow ray</span> toward the point we've sampled on the light. If our 
shadow ray intersects with some geometry in the scene before it reaches the light, it's considered to be *in shadow*, 
and the radiance we might have added from the light is discarded. We shoot as many shadow rays as there are light samples.

![Shadow Ray Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/shadow-rays.png" | absolute_url }})
*In this example, we have a shading point **p**, a RectLight, and a pink sphere geometry in between. In order to 
determine how much p is in shadow, we shoot (in this case, four) shadow rays toward the RectLight and find that two 
intersect with the pink geometry. Therefore, our point is partially in shadow.*

Each of our shadow ray settings allow us to ignore shadow-casting objects by shortening the shadow rays, ensuring that 
they do not find intersections with geometry within a certain distance. While the mechanism is similar for each 
attribute, they differ in the following ways:

- They either move the **start** or **end** of the shadow ray
- They measure distance from either the **shading point** or the **light intersection**
- They are defined either on a **per-geometry basis** or a **per-light basis**

## Shadow Ray Epsilon

The <span id="definition">shadow_ray_epsilon</span> attribute effectively establishes a radius around the shading point 
within which no objects can cast shadows. It does this by moving the origin of the shadow ray the specified distance 
away from any shading point, preventing it from finding the nearby intersections. 

| Moves the **start** of the shadow ray | Measures distance from the **shading point** | Defined on the **geometry** |
| ------------------------------------- | -------------------------------------------- | --------------------------- |
|                                       |                                              |                             |

![Shadow Ray Epsilon Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/shadow_ray_epsilon.png" | absolute_url }})
*In this example, we have a shading point **p**, a RectLight, and a pink sphere geometry in between. We have a  
shadow_ray_epsilon set to 5 units. We therefore move the origin of the shadow ray 5 units from the shading point, which 
means we don't find the intersection with the pink geometry.*

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/sre.mp4" | absolute_url }}" alt="Shadow Ray Epsilon Video Example">
    </video>
</figure>
*In this scene, you see a ground plane and a few thin cubes arranged in a stair-stepping pattern above it. In the upper 
right, we have a green light casting blue shadows, and in the upper middle, we have a blue light casting green shadows. 
A shadow_ray_epsilon is set on the ground plane geometry. Note that, as shadow_ray_epsilon increases, and the origins of 
the shadow rays start to miss the stair stepping geometry, all shadows on the ground plane start to disappear. The 
shadows on the stair-stepping geometry are unaffected because this setting applies **only** to the ground plane geometry.*

## Min Shadow Distance

The <span id="definition">min_shadow_distance</span> attribute is identical to shadow_ray_epsilon, *except* that it 
applies to a specific *light* instead of a *geometry*.

| Moves the **start** of the shadow ray | Measures distance from the **shading point** | Defined on the **light** |
| ------------------------------------- | -------------------------------------------- | ------------------------ |
|                                       |                                              |                          |

![Min Shadow Distance Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/min_shadow_distance.png" | absolute_url }})
*You can see that the mechanism for min_shadow_distance is identical to shadow_ray_epsilon. However, it's applied to the 
light instead of the geometry, so we see it affect shadow rays from all geometry in the scene.*

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/min_sd.mp4" | absolute_url }}" alt="Min Shadow Distance Video Example">
    </video>
</figure>
*In this scene, you see a ground plane and a few thin cubes arranged in a stair-stepping pattern above it. In the upper 
right, we have a green light casting blue shadows, and in the upper middle, we have a blue light casting green shadows. 
A min_shadow_distance is set on the green light on the right. Note that, as min_shadow_distance increases, all of the blue 
shadows cast by the green light start to disappear. The green shadows cast by the blue light are unaffected, as this 
setting applies **only** to the shadow rays cast toward the green light.*

## Shadow Ray Epsilon vs. Min Shadow Distance
|                         |                                       |                                              |                             |
|-------------------------|---------------------------------------|----------------------------------------------|-----------------------------|
| **shadow ray epsilon**  | Moves the **start** of the shadow ray | Measures distance from the **shading point** | Defined on the **geometry** |
| **min shadow distance** | Moves the **start** of the shadow ray | Measures distance from the **shading point** | Defined on the **light**    |

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/sre_vs_msd.mp4" | absolute_url }}" alt="Shadow Ray Epsilon vs Min Shadow Distance Video Example">
    </video>
</figure>
*In this scene, you see a ground plane and a few thin cubes arranged in a stair-stepping pattern above it. In the upper 
right, we have a green light casting blue shadows, and in the upper middle, we have a blue light casting green shadows. 
A min_shadow_distance is set on the green light on the right, and a shadow_ray_epsilon is set on the ground plane. As both 
increase at equal rates, you'll notice that shadow_ray_epsilon clears more and more shadows on the ground plane, while 
min_shadow_distance clears more and more of the blue shadows cast by the green light, regardless of geometry.*

## Max Shadow Distance

The <span id="definition">max_shadow_distance</span> attribute establishes a radius around the shading point *outside of 
which* objects don't cast shadows. It does this by moving the *end* of any shadow ray the specified distance away from 
the shading point.

| Moves the **end** of the shadow ray | Measures distance from the **shading point** | Defined on the **light** |
| ----------------------------------- | -------------------------------------------- | ------------------------ |
|                                     |                                              |                          |

![Max Shadow Distance Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/max_shadow_distance.png" | absolute_url }})
*In this image, our RectLight has a max_shadow_distance of 5 units. That means we only want to include any occluder 
intersections a **maximum** of 5 units from the shading point in all directions. We've therefore established a sphere 
of influence **outside of which** all intersections with occluding geometry are ignored.*

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/max_sd.mp4" | absolute_url }}" alt="Max Shadow Distance Video Example">
    </video>
</figure> 
*In this scene, you see a ground plane and a few thin cubes arranged in a stair-stepping pattern above it. In the upper 
right, we have a green light casting blue shadows, and in the upper middle, we have a blue light casting green shadows. 
A max_shadow_distance is set on the green light on the right. Note that, as max_shadow_distance increases, and the ends of 
the shadow rays start to pass the stair-stepping geometry, the shadows cast by the green light start to appear. Again, 
note that the green shadows are unaffected, as max_shadow_distance is set on a per-light basis.*

## Min vs Max Shadow Distance

|                         |                                       |                                              |                          |
|-------------------------|---------------------------------------|----------------------------------------------|--------------------------|
| **min_shadow_distance** | Moves the **start** of the shadow ray | Measures distance from the **shading point** | Defined on the **light** |
| **max shadow distance** | Moves the **end** of the shadow ray   | Measures distance from the **shading point** | Defined on the **light** |

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/min_v_max_sd.mp4" | absolute_url }}" alt="Min Versus Max Shadow Distance Video Example">
    </video>
</figure>

## Clear Radius

The <span id="definition">clear_radius</span> attribute establishes a radius around the *light* within which objects 
cannot cast shadows. It does this by moving the *end* of the shadow ray the specified distance away from the light. 

| Moves the **end** of the shadow ray | Measures distance from the **light intersection** | Defined on the **light** |
| ----------------------------------- | ------------------------------------------------- | ------------------------ |
|                                     |                                                   |                          |

![Clear Radius Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/clear_radius.png" | absolute_url }})
*In this example, our clear radius is set to 5 units. This means that any intersections with occluders within 5 units of 
the light intersection point will be ignored. We do this by moving the end of the shadow ray 5 units from the light 
intersection point.*

<figure>
    <video controls loop muted>
      <source src="{{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/clear_radius.mp4" | absolute_url }}" alt="Clear Radius Video Example">
    </video>
</figure>
*In this scene, you see a ground plane and a few thin cubes arranged in a stair-stepping pattern above it. In the upper 
right, we have a green light casting blue shadows, and in the upper middle, we have a blue light casting green shadows. 
A clear_radius is set on the green light on the right. Note that, as clear_radius increases, and the ends of the shadow 
rays start to move closer and closer to their origins, the shadows start to clear.*

## Combining All Attributes

How do all of these attributes work together? Well, there are a few different scenarios:

1. Both attributes move the **origin** of the shadow ray (shadow_ray_epsilon, min_shadow_distance). We take the **maximum** 
distance between the two. ![Moving the Origin of the Shadow Ray Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/move_start.png" | absolute_url }}) *On the left, we start with applying a shadow_ray_epsilon of 2 to the blue geometry. 
However, when we apply the min_shadow_distance of 4, we take the max distance, and end up with a shadow ray origin 4 
units from the shading point.* 

2. Both attributes move the **end** of the shadow ray (max_shadow_distance, clear_radius). We take the **minimum** 
distance between the two. ![Moving the End of the Shadow Ray Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/move_end.png" | absolute_url }}) *On the left, we start with applying a clear_radius of 2 to the light. Let's assume our 
shadow ray is 5 units long. That means the end of the shadow ray is now 3 units from the shading point. When we apply 
a max_shadow_distance of 2 units (on the right), we take the minimum, and end up moving the end of the shadow ray 2 
units from the shading point.*

3. One attribute moves the **origin** of the shadow ray, and one moves the **end**. We move both the start and end of 
the ray accordingly. If either the start or the end of the ray overlaps the other, we end up with a shadow ray with zero 
length (since we can't have negative length), so we ignore *all* occluders along the ray. ![Moving the Start and End of the Ray Example]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/move_start_and_end1.png" | absolute_url }}) *On the 
left, we start by applying a clear_radius of 2. On the right, we then add a min_shadow_distance of 1. We simply move the 
start and end of the shadow ray the appropriate distances.* ![Moving the Start and End of the Ray Example 2]({{ "/assets/images/user-reference/how-to-guides/shadow-ray-manipulation/move_start_and_end2.png" | absolute_url }}) *On the left, we once again apply a 
clear radius of 2. On the right, we then apply a min_shadow_distance of 4. Let's again assume the ray is of length 5. 
The start and end of the ray now overlap each other, leaving us with a shadow ray of length zero.

### Shadow Ray Attributes Quick Reference
| Shadow Ray Epsilon | Min Shadow Distance | Max Shadow Distance | Clear Radius |
| ------------------ | ------------------- | ------------------- | ------------ |
| Moves the **start** of the shadow ray | Moves the **start** of the shadow ray | Moves the **end** of the shadow ray | Moves the **end** of the shadow ray |
| Measures distance from the **shading point** | Measures distance from the **shading point** | Measures distance from the **shading point** | Measures distance from the **light intersection** |
| Defined on the **geometry** | Defined on the **light** | Defined on the **light** | Defined on the **light** |