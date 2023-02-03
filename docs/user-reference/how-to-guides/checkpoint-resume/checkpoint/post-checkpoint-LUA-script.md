---
title: Post checkpoint LUA script
---
# Post checkpoint LUA script
---

You can specify LUA script which is executed just after every checkpoint file is created by
following scene variable.
```
["checkpoint_post_script"] = <filename>
```
default is empty and run post checkpoint script functionality is disabled.<br>
<br>
This LUA script is executed under freshly constructed LUA execution environment (lua_State) and
there is no way to access other LUA environment like RDLA parser and **on-resume script** execution
internally.<br>
This LUA script is executed by independent thread from MCRT threads by parallel if you set
`checkpoint_bg_write` = **true**. Otherwise, this LUA script is exclusively executed under all
MCRT threads are stopped when `checkpoint_bg_write` = **false**.<br>
<br>
moonray sets several different checkpoint related information as LUA's global variables.
All the information is stored inside associative array named as "**checkpoint**".
So LUA script can get checkpoint related information via global variable "**checkpoint**".
This is an current version of LUA associative array (item may vary depend on the moonray versions).<br>
<br>
You should **NOT** use **os.exit()** from **post-checkpoint** script. If you use **os.exit()** inside
the post checkpoint LUA script, moonray crash and you get stack-trace.<br>
<br>

## Post checkpoint LUA global variables

**associative item (=element) name** | **type** | **description**
---------- | ---------- | ----------
filename | string array | all checkpoint file names at this checkpoint output
tileSampleTotal | int	| total number of samples per tile (8 x 8 pixels)

<br>

## Example of post checkpoint LUA global variables
```
checkpoint = {
    tileSampleTotal = 1234,
    filename = {"/usr/pic1/test/A.exr", "/usr/pic1/test/B.exr", "/usr/pic1/test/C.exr" }
}
```
<br>

## Sample post checkpoint LUA script
This is a sample LUA script which just dump all "**checkpoint**" associative array members.
```
function showTable(indent, tbl)
    strIndent = function(indent)
        str = ""
        for i = 1, indent, 1 do str = str .. "  " end
        return str
    end
    elemSize = function(tbl)
        id = 0
        for key, val in pairs(tbl) do id = id + 1 end
        return id
    end
 
    if (tbl == nil) then
       return "not defined table";
    end
 
    str = "tbl size:" .. elemSize(tbl) .. " {\n"
    indent = indent + 1
    id = 0
    for key, val in pairs(tbl) do
        if (id ~= 0) then str = str .. "\n" end
        id = id + 1
        str = str .. strIndent(indent)
        if (type(key) == "number") then     str = str .. "[n:" .. key .. "]"
        elseif (type(key) == "string") then str = str .. "[s:" .. key .. "]"
        else                                str = str .. "[?:" .. key .. "]"
        end
 
        str = str .. " = "
 
        if (type(val) == "boolean") then     str = str .. "b:" .. tostring(val)
        elseif (type(val) == "number") then  str = str .. "n:" .. val
        elseif (type(val) == "string") then  str = str .. "s:" .. val
        elseif (type(val) == "table") then   str = str .. showTable(indent, val)
        else                                 str = str .. "Val=?(" .. val .. ")"
        end
    end
    if (id > 0) then str = str .. "\n" end
    indent = indent - 1
    str = str .. strIndent(indent) .. "}"
    return str
end
 
print(showTable(0, checkpoint))
```
