---
title: Template snippets
maths: 1  # add this if you want to use mathematical expressions

# only uncomment and use last-modified date post-first launch of MoonRay
# format is YYYY-MM-DD 00:00:00 +0000, e.g. 2025-02-14 00:00:00 +0000
last-modified-date: 2025-02-14 00:00:00 +0000
---

## This template is for various, potentially useful snippets

<!-- To create a 'standardized note' in a page -->
<!-- add example note here -->

##### To create a code snippet with C++ style formatting 

~~~ c++ 
// In the following problems, you can use the following single precision
// vector type. Fill in any methods or operators that you need.
class Vec3f
{
public:
    float x, y, z;

    // TODO: Add needed Vec3f methods here
};
~~~

##### To create a code snippet with Python style formatting

~~~ python
# a comment
import datetime

def get_or_create_user(session, model, **kwargs):
    instance = session.query(model).filter_by(twitter_user_id=kwargs["twitter_user_id"]).first()
	return instance
~~~

##### To create a snippet of command line text 

<div class="terminal" markdown="1">
`$ sudo apt-get update`
</div>

##### To split a list into side-by-side columns

<div class="thi-columns" markdown="1">
- item 1
- item 2
- item 3
- item 4
- item 5
- item 6
</div>

##### To Display a math block, wrap in "$"

$x^n + y^n = z^n$

##### To display a notification / warning box
 
{% include warning.html content="Warning's content" %}

##### To display an information box

{% include tip.html content="Info's content" %}

##### To add a table

| Name    | normalized      |
|----------|-----------------|
| Type:    | bool            |
| Default: | true            |
| Comment: | Set to 0, 1 or null

##### To display an image add ! and wrap the alt text in [ ]. Then wrap the link for the image in parentheses ()

![](images/sd-ior-wedge.gif)
