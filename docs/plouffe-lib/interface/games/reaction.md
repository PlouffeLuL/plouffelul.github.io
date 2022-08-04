---
sidebar_position: 4
---

# Reaction

- Importing only reaction if you didnt import interface before
```lua
    local Reaction = exports.plouffe_lib:Get("Interface", "Reaction")
```

- Example usage
```lua
    local win = Reaction.New(data)
    print(win)
```

- Data structure 
```lua
    time : number -- time to complete the game in seconds
    amount : number -- total amount of rows
    speed : number -- the speed at wich the squares will move lower = faster
    errors : number -- Allowed number of errors
    clickTimer : number -- in MS the amount of time allowed to click the square
    wins : number -- the required of 'Good clicks' to win
    delay : delay -- delay before the game starts
```

- Test command if the lib is in debug mode 
```
testReaction
```