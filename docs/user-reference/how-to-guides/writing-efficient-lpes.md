---
title: Writing Efficient LPEs
---
# Writing Efficient LPEs
---

Here are a few different ways to write LPEs such that MoonRay processes them efficiently.

### Avoid OR lists [ ]
MoonRay converts all of the LPE expressions into one large, tree-like structure. OR lists cause this tree to branch, which greatly increases the amount of time it takes to process the tree. 

### Use the exclusion symbol ^
One good way to decrease the number of possibilities MoonRay has to process is to use the exclusion symbol `^` instead of a long OR list. 

For example, suppose we wanted to exclude the `diffuse hair` lobe, and we were writing:

`["diffuse" "diffuse transmission"]`

What is *much* more efficient is to write it like this:

`<.D[^"diffuse hair"]>`

### Use groups <> where possible
MoonRay is optimized to look for groups -- anything that is not in a group will implicitly become a group in MoonRay. This is particularly a problem if you have an OR list outside of a group.

For instance, the expression I used earlier:

`["diffuse" "diffuse transmission"]`

Will internally become the equivalent:

`[<.."diffuse"> <.."diffuse transmission">]`

You will note that this adds a lot of wildcards (increasing complexity!). It would be better to write it like so:

`<..["diffuse" "diffuse transmission"]>`

As it will stay pretty much the same when we process it internally. 