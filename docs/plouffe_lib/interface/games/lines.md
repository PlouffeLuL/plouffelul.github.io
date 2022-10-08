---
sidebar_position: 2
---

# Lines
- This is extremly experimental and im not 100% sure it will work on any screen resolution

- Importing only lines if you didnt import interface before
```lua
    local Lines = exports.plouffe_lib:Get("Interface", "Lines")
```

- Example usage
```lua
    local win = Lines.New(data)
    print(win)
```

- Data structure 
```lua
    time : number -- <default is infinite> in seconds
    maxMoves : number -- <default is infinite>
    points : number -- <default is 15> the amounts of points in the game
```

- Test command if the lib is in debug mode 
```
testLines
```