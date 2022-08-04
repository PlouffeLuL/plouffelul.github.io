---
sidebar_position: 5
---

# Moving squares

- Importing only moving squares if you didnt import interface before
```lua
    local MovingSquare = exports.plouffe_lib:Get("Interface", "MovingSquare")
```

- Example usage
```lua
    local win = MovingSquare.New(data)
    print(win)
```

- Data structure 
```lua
    time : number -- time to complete the game in seconds
    amount : number -- total amount of squares
    errors : number -- Allowed number of errors
    delay : delay -- delay before the game starts
```

- Test command if the lib is in debug mode 
```
MovingSquare
```