---
sidebar_position: 1
---

# Encryption

- Importing only encryption if you didnt import interface before
```lua
    local Encryption = exports.plouffe_lib:Get("Interface", "Encryption")
```

- Example usage
```lua
    local win = Encryption.New(data)
    print(win)
```

- Data structure 
```lua
    update : number -- <default is 12> The delay before each shuffle
    string : string -- <default is "numbers"> can be one of thoses ["hieroglyphs", "chinese", "numbers", "symbols", "alphabet"]
    maxTimer : number -- <default is 30> max amount of time to complete the game
```

- Test command if the lib is in debug mode 
```
testEncryption
```