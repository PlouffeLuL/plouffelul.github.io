---
sidebar_position: 5
---

# Dialog

- Importing only dialog if you didnt import interface before
```lua
    local Dialog = exports.plouffe_lib:Get("Interface", "Dialog")
```

- Show
```lua
    local inputs = Dialog.Open(data : object of options)
    print(inputs.size) -- Will return what was input at id 'size'
```

- Option structure
```lua
    id : string -- unique identifier
    header : string
    placeholder : string
```

- Test command if the lib is in debug mode 
```
    RegisterCommand("testDialog", function()
        local data = Dialog.Open({
            {
                id = "size",
                header = "Penis size",
                placeholder = "12 pouces"
            },
            {
                id = "hi",
                header = "What is chade",
                placeholder = "g"
            },
            {
                header = "Vincent",
                placeholder = "On top"
            },
            {
                id = "twich",
                header = "What is Twich",
                placeholder = "A waste of time"
            }
        })
    end)
```