**manhattan repo** README

# Guidelines for Content Contributors
## Markdown
Markdown is a lightweight markup language used to add formatting elements to plaintext text documents. 


[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## Jekyll and Github Pages

Jekyll uses Liquid templates and Markdown files to produce a complete, static website ready to be served by a web server.Jekyll is the engine behind GitHub Pages, a GitHub feature that allows users to host websites based on their GitHub repositories for no additional cost.


## Style Rules
### Headings
* Use _down-style capitalization_ (aka "sentence case") for headings. 
  
  <pre>## Adding pre-computed samples points to MoonRay</pre>

* Use *present tense* whenever possible. 

  This function ~~will create~~ creates any of the containers listed above.

* Use *second person* (you/me) to address the reader directly.

  ~~The reader~~ You can also read and write both formats from code using the `scene_rdl2` library.

* Use **bold** for file names and file paths.

  Sampling methods and points being used are specified in **moonray/lib/rendering/pbr/sampler/SamplingPreprocess.h**.

* Use _italics_ for emphasis and _term definitions_ (term followed by the definition _in parentheses_).

* Use `monospace` for references to code and for code blocks.

  One-dimensional and two-dimensional samples are stored in contiguous arrays (`std::vector`).

  ```Lua
  BaseMaterial("/scene/sphere/base") {
    ["ior"] = 1.0,
    ["diffuse color"] = Rgb(0.8, 0.8, 0.2)
  }
  ```

* Capitalize file extensions and keyboard keys.

  * Amorphous Volume is a volume shader specifically handling VDB files. 
  * Press the ENTER key.
