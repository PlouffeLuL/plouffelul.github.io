---
sidebar_position: 1
---

# Text ui

- Importing only TextUi if you didnt import interface before
```lua
    local TextUi = exports.plouffe_lib:Get("Interface", "TextUi")
```

- Show
```lua
    TextUi.Show({
        message : string -- ... your message
        id : string -- unique identifier
        color : string -- needs to be css compatible
    })
```

- Hide
```lua
    TextUi.Hide({
        id : string -- unique identifier
    })
```

- Change
```lua
    TextUi.Change({
        message : string -- ... your message
        id : string -- unique identifier
        color : string -- needs to be css compatible
    })
```

- Test command if the lib is in debug mode 
```
showTextUi
hideTextUi
changeTextUi
```