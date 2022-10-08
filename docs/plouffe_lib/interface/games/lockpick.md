---
sidebar_position: 6
---

# Lockpick

- Importing only moving lockpick if you didnt import interface before
```lua
    local Lockpick = exports.plouffe_lib:Get("Interface", "Lockpick")
```

- Example usage
```lua
    local win = Lockpick.New(data)
    print(win)
```

- Data structure 
```lua
    amount : number -- total amount of checkes
    range : number -- size of the skill check range
    maxKeys : number -- 1 to 9, the keys to be used on keyboard
```

- Test command if the lib is in debug mode 
```
testLockpick
```