---
---
# Metadata

-   [Introduction](#Metadata-Introduction)

-   [Attributes](#Metadata-Attributes)

    -   [name](#Metadata-name)

    -   [type](#Metadata-type)

    -   [value](#Metadata-value)

-   [Example for .rdla](#Metadata-Examplefor.rdla)

 

# Introduction

Metadata is a list of attributes, their types, and their values. It is
often used to specify arbitrary image header data.

# Attributes

## name

| **Name:**    | name     |
|--------------|----------|
| **Type:**    | *string* |
| **Default:** | ""       |

## type

| **Name:**    | type     |
|--------------|----------|
| **Type:**    | *string* |
| **Default:** | ""       |

## value

| **Name:**    | value    |
|--------------|----------|
| **Type:**    | *string* |
| **Default:** | ""       |

# Example for .rdla

Metadata("/Scene/exrheader") {  
{"a_color_render_transform", "int", "27"},  
{"a_format", "int", "77"},  
{"a_res", "float", "1.0"},  
{"uuid", "string", "9f42ed44-e509-11e7-9902-9457a5ef7e3e"},  
}
