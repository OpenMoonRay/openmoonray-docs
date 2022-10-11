Generates Moonray class documentation by filling in a template using data obtained through the scene_rdl2 Python bindings.

rez-env moonshine jinja2 python-2
(scene_rdl2 bindings don't work with python-3 atm, because of an import issue)

Generate docs for a specific class: `./generate_doc -c DwaBaseMaterial -d docs`

Generate docs for all classes with the given interface: `./generate_doc -i LIGHT -d docs`

Generate docs for all classes: `./generate_doc -a -d docs`

Documentation for template format: [jinja](https://jinja.palletsprojects.com/en/3.1.x/templates/)


