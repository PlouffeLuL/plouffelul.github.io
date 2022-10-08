---
sidebar_position: 3
---

# Memory squares

- Importing only memory squares if you didnt import interface before
```lua
    local MemorySquares = exports.plouffe_lib:Get("Interface", "MemorySquares")
```

- Example usage
```lua
    local win = MemorySquares.New(data)
    print(win)
```

- Data structure 
```lua
    time : number -- time to complete the game in seconds
    amount : number -- if its 2 the game will be a 2x2
    solutionAmount : number -- needs to be lower than the total squares
    errors : number -- Allowed number of errors
    delay : delay -- delay before the game starts
```

- Test command if the lib is in debug mode 
```
MemorySquares
```