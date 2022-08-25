**manhattan repo** README

# Guidelines for Content Contributors
## Markdown
Markdown is a lightweight markup language used to add basic formatting to plaintext documents.

## Jekyll and Github Pages
Jekyll uses Liquid templates and Markdown files to produce a complete, static website ready to be served by a web server. Jekyll has been adopted by GitHub Pages, a feature that enables us to host a website straight from our GitHub repository.

## Contributing Philosophy
When contributing content, don't worry about how the output will appear &#8212; the technology is handling that part! Rather, focus on writing _excellent content_. For help with Markdown sysntax, see [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/).

## Content Structure
There are three kinds of topics:
- _Concept_ topics present concepts, descriptions, and examples, that explain the background and context of a subject.
- _Task_ topics provide procedural information about how to do something, usually as a procedure consisting of steps.
- _Reference_ topics provide detailed facts or specifications, usually in the form of a table or list.

## Style Rules
### Grammar
Grammatical tactics to improve clarity.
* Use *present tense* whenever possible. 

  >This function ~~will create~~ creates any of the containers listed above.

* Use *second person* (you/me) to address the reader directly.

  >~~The reader~~ You can also read and write both formats from code using the `scene_rdl2` library.

### Typography
Visual cues indicating the type of information.
* Use **bold** for file names and file paths.

  >Sampling methods and points being used are specified in **moonray/lib/rendering/pbr/sampler/SamplingPreprocess.h**.

* Use _italics_ for emphasis and _term definitions_ (term followed by the definition _in parentheses_).
  > The two primary file formats _RDLA_ (readable text format) and _RDLB_ (binary format).

* Use `monospace` for references to code and for code blocks.

  > One-dimensional and two-dimensional samples are stored in contiguous arrays (`std::vector`).

  ```Lua
  BaseMaterial("/scene/sphere/base") {
    ["ior"] = 1.0,
    ["diffuse color"] = Rgb(0.8, 0.8, 0.2)
  }
  ```

* CAPITALIZE file extensions and keyboard keys.
  >Moonray uses a proprietary scene description format called RDL2. The two primary file formats RDLA (readable text format) and RDLB (binary format).
  >Press the ENTER key.
