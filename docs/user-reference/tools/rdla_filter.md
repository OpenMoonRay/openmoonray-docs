---
title: rdla_filter
---
# rdla_filter

rdla_filter is a command line tool that parses an rdla file using various options and writes out a new one.   Its main use is in debugging complex scenes where it can be used to reduce the scene to a minimal reproducable case of a bug.

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
Usage: rdla_filter [options] <input rdla file> <output rdla file>

   Required arguments:

           <input rdla file>   - Input rdla file to read and filter

           <output rdla file>  - Output filtered rdla file


Filters the assets in an rdla file.   Keeps only selected assets and their
dependents grouping them together in a logical and easy to follow ordering.
The scene variables, camera, layer, are retained in the output.   Other object
types are also retained based on the selected options.

Options:
  -h, --help            show this help message and exit
  --assets-to-keep=ASSETSTOKEEP
                        Space separated list of asset names to keep.  Use
                        quotes for multiple assets.  The asset names should be
                        the names of the geometry objects assigned in the
                        Layer of the input rdla file.  The full path can be
                        used, just a portion of it, or a regular expression
                        which could match multiple objects.
  --binary-split=BINARYSPLIT
                        Keep only half of the layer assignments.  A value of 0
                        keeps the first half and a value of 1 keeps the second
                        half
  --skip-identity       Skips writing node_xform parameter if its value is
                        identity
  --skip-default        Skips writing parameter if its value is the same as
                        the default value
  --replace-enums       If parameter is an enumerated list, replace integer
                        value with string
  --add-param-comments  Add help comments under parameters
  --add-reference-comments
                        Add comments above objects showing which objects
                        reference them
  --remove-xform-blur   Removes use of the blur() function on the node_xform
                        and keeps only the first motion step
  --round-values=ROUNDVALUES
                        Round float, Vec2, Vec3, and Rgb types to the
                        specified decimal place
  --use-variable-names  Assigns each object to a variable and refers to this
                        instead of the full name
  --replace-materials   Replaces all materials with DwaEmissiveMaterial
  --skip-metadata       Skips writing the MetaData object
  --skip-lights         Skips writing out lights
  --skip-render-outputs
                        Skips writing render outputs
  --skip-user-data      Skips writing user data
  --split-data=SPLITDATA
                        Splits data lines (i.e. Vec3, Vec2, Rgb vectors)
                        longer than the specified length
  --nice-and-clean      Applies the following options: --skip-identity,
                        --skip-default, --replace-enums, --round-values 5
  --minimal             Applies the following options: --nice-and-clean,
                        --replace-materials, --skip-lights, --skip-render-
                        outputs, --skip-user-data, --skip-metadata
```
