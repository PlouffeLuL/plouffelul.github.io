---
sidebar_position: 2
---

# Progress

- Importing only Progress if you didnt import interface before
```lua
    local Progress = exports.plouffe_lib:Get("Interface", "Progress")
```

- Circle
```lua
    local finished = Progress.Circle(data, cb)
    -- I was to lazy to make data structure so i'll do it another time
```

- Cancel
```lua
    Progress.Cancel()
```

- Test command if the lib is in debug mode 
```
circleProgress
```