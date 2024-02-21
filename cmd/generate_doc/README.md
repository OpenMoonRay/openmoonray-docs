Generates Moonray class documentation by filling in a template using data obtained through the scene_rdl2 Python
bindings.

Be sure to include the following packages in your rez-env cmd:
```bash
rez-env moonshine_usd jinja2
```

If your doc changes require your locally built scene_rdl2, make sure to include your local version in the rez-env
command (and note that for some SceneClasses, moonray inherits from scene_rdl2, so you may also need to build moonray).

Usage is as follows. In each case, <docs_path> should be the path to your openmoonray-docs/docs folder (probably `../../docs/`)

Generate docs for a specific class: `./generate_doc -c DwaBaseMaterial -d <docs_path>`

Generate docs for all classes with the given interface: `./generate_doc -i LIGHT -d <docs_path>`

Generate docs for all classes: `./generate_doc -a -d <docs_path>`

Documentation for template format: [jinja](https://jinja.palletsprojects.com/en/3.1.x/templates/)


