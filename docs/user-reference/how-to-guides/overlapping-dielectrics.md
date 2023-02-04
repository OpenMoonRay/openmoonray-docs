---
title: Overlapping Dielectrics
---
# Overlapping Dielectrics
![Title Image]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/title.png)

How do you ensure that the index of refraction is correct, regardless of how many nested mediums a light ray enters? MoonRay employs a system of material tracking (as per "Simple Nested Dielectrics in Ray Traced Images") to ensure that overlapping materials with different indices of refraction refract light correctly. In order to correctly render these overlapping surfaces:

1. Model overlapping objects as *closed surfaces* that *intentionally overlap* each other
2. Assign a different material `priority` to each surface so the renderer can resolve the overlaps when tracing the rays

### Example

| Correct Setup | Incorrect Setup |
| ------------- | --------------- |
| ![Correct Setup]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/correct.png) | ![Incorrect Setup]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/incorrect.png) |

In the example below, you will see that each object is assigned a priority, where a lower number corresponds to a higher priority. Both glass and ice displace the liquid, and therefore have a higher priority. The liquid does not exist in the overlap areas because it is lower priority. 

![Example]({{site.baseurl}}/assets/images/user-reference/how-to-guides/overlapping-dielectrics/example.png)

In progress...
