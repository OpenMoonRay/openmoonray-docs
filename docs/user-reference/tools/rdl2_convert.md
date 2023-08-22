---
title: rdl2_convert
---
# rdl2_convert

rdl2_convert is the command-line utility for converting rdl2 files between ASCII and binary formats

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
$ rdl2_convert -h
Usage: rdl2_convert [options] <input file> <output file>
Converts RDL2 files between ASCII and binary formats.

Options:
  -h [ --help ]              Print help message
  -i [ --in ] arg            Input file (.rdla | .rdlb)
  -o [ --out ] arg           Output file (.rdla | .rdlb)
  -e [ --elements ] arg (=0) Number of ascii array elements per-line, 
                             0=unlimited
  -d [ --dso_path ] arg      The path to the dsos
```

