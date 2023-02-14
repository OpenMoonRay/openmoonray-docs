---
title: Overlapping Dielectrics
---
# Overlapping Dielectrics
![Title Image]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/title.png)

How do you ensure that the index of refraction is correct, regardless of how many nested mediums a light ray enters? MoonRay employs a system of material tracking (as per "Simple Nested Dielectrics in Ray Traced Images") to ensure that overlapping materials with different indices of refraction refract light correctly. In order to correctly render these overlapping surfaces:

1. Model overlapping objects as *closed surfaces* that *intentionally overlap* each other
2. Assign a different material `priority` to each surface so the renderer can resolve the overlaps when tracing the rays. This defaults to 0 (no material priority).

### Example

| Correct Setup | Incorrect Setup |
| ------------- | --------------- |
| ![Correct Setup]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/correct.png) | ![Incorrect Setup]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/incorrect.png) |

In the example walkthrough below, you will see that each object is assigned a priority, where a lower number corresponds to a higher priority. Both glass and ice displace the liquid, and therefore have a higher priority. The liquid does not exist in the overlap areas because it is lower priority, and MoonRay ignores intersections with lower priority surfaces. 

**Step 1**
![Example Part 1]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt1.png)

**Step 2**
![Example Part 2]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt2.png)

**Step 3**
![Example Part 3]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt3.png)

**Step 4**
![Example Part 4]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt4.png)

**Step 5**
![Example Part 5]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt5.png)

**Step 6**
![Example Part 6]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt6.png)

**Step 7**
![Example Part 7]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt7.png)

**Step 8**
![Example Part 8]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt8.png)

**Step 9**
![Example Part 9]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example_pt9.png)
