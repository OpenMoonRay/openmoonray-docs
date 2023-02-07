---
title: Post checkpoint LUA script
---
# Post checkpoint LUA script
---

You can specify a LUA script to be executed after every checkpoint file is created, with the following setting:

```lua
["checkpoint_post_script"] = <filename>
```

The default value is empty, which disables post checkpoint LUA script functionality.

When enabled, the LUA script is executed under a freshly constructed LUA execution environment (lua_State) and there is no way to access any other LUA environment, such as the internal RDLA parser and on-resume LUA scripts.

The LUA script is executed on a parallel, independent thread from MCRT rendering threads if the _checkpoint_bg_write_ setting is true.  Otherwise, the LUA script is executed exclusively after all MCRT threads are stopped, when _checkpoint_bg_write_ = false.

MoonRay sets several different checkpoint related information as part of the LUA' execution environment'ss global variables.  This information is stored inside an associative array named "checkpoint", so that the LUA script can query checkpoint related information via the global variable "checkpoint".

Note: you should _not_ use {% highlight lua %}os.exit(){% endhighlight %} from your post-checkpoint script, as that would cause MoonRay to crash.

## Post checkpoint LUA global variables

associative array name = "checkpoint"

**associative item (=element) name** | **type** | **description**
---------- | ---------- | ----------
filename | string array | all checkpoint file names at this checkpoint output
tileSampleTotal | int	| total number of samples per tile (8 x 8 pixels)


## Example of post checkpoint LUA global variables
```lua
checkpoint = {
    tileSampleTotal = 1234,
    filename = {"/usr/pic1/test/A.exr", "/usr/pic1/test/B.exr", "/usr/pic1/test/C.exr" }
}
```


## Sample post checkpoint LUA script
This is a sample LUA script which prints all "checkpoint" associative array members.
```lua
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
