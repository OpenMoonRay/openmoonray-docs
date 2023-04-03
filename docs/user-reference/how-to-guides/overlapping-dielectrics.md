---
title: Overlapping Dielectrics
---
# Overlapping Dielectrics
![Title Image]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/title.png" | absolute_url }})

How do you ensure that the index of refraction is correct, regardless of how many nested or overlapping mediums a light ray enters?  Some common situations are:

1. Beverages in glassware, with floating ice.
2. Bubbles in transparent solids or liquids.
3. Overlapping materials with different indices of refraction.

These situations require careful setup to avoid incorrect refraction.

For example, if you have an ice cube floating in liquid in a glass, do you:
1. Just model the top surface of the liquid?
2. Try to cut out the ice cube from the liquid?
3. Model the liquid as a closed surface and try to precisely match the interfaces between glass and ice?
4. What about numerical precision problems at the interfaces where some intersections might be ignored due to ray bias?
5. How do you tell Moonray how to track the different IORs properly as rays traverse the interfaces?
6. Overlapping?
7. Ugh!

MoonRay employs a system of material tracking to ensure that overlapping materials with different indices of refraction refract light correctly. In order to correctly render these overlapping surfaces you must:

1. Model overlapping objects as *closed surfaces* that *intentionally overlap* each other
2. Assign a different material `priority` to each material so the renderer can resolve the overlaps when tracing the rays. This priority is simply a `priority` attribute on each material that defaults to 0 (no material priority).

With this scheme, the modeling of interfaces no longer needs to be exact (intentional overlap!). 
No cutting out of shapes is needed.  Only the highest priority material exists at any point in space when tracing rays.  Moonray will ignore “invalid” ray-surface intersections based on priority.

The key to making this work is a material list that tracks materials as rays enter/exit geometry.  The highest
priority material in the list is the current material (and current index of refraction.)  Moonray can use this
information to skip false intersections / ignore lower priority geometry.

<aside>
<p>See the associated paper here: Schmidt, Charles & Budge, Brian. (2002). Simple Nested Dielectrics in Ray Traced Images.</p>
</aside>
{: .info-aside}


### Example

| Correct Setup | Incorrect Setup |
| ------------- | --------------- |
| ![Correct Setup]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/correct.png" | absolute_url }}) | ![Incorrect Setup]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/incorrect.png" | absolute_url }}) |

In the example walkthrough below, you will see that each object is assigned a priority, where a lower number corresponds to a higher priority. Both glass and ice displace the liquid, and therefore have a higher priority. The liquid does not exist in the overlap areas because it is lower priority, and MoonRay ignores intersections with lower priority surfaces. 

**Step 1**
![Example Part 1]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt1.png" | absolute_url }})

**Step 2**
![Example Part 2]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt2.png" | absolute_url }})

**Step 3**
![Example Part 3]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt3.png" | absolute_url }})

**Step 4**
![Example Part 4]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt4.png" | absolute_url }})

**Step 5**
![Example Part 5]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt5.png" | absolute_url }})

**Step 6**
![Example Part 6]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt6.png" | absolute_url }})

**Step 7**
![Example Part 7]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt7.png" | absolute_url }})

**Step 8**
![Example Part 8]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt8.png" | absolute_url }})

**Step 9**
![Example Part 9]({{ "/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt9.png" | absolute_url }})

If you don’t specify a `priority` attr on a Material, it will default to “0” (no priority) and all of the “false” intersections in the example above will become “true” intersections and be shaded.

If you don’t have any overlapping dielectric materials, you don’t need to specify priorities.
