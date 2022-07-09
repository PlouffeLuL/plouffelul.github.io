---
sidebar_position: 7
---

# Uniques

# Importing Uniques
  ```lua
  local Callback = exports.plouffe_lib:Get("Uniques")
  ```
  This is used to make a basicly any script multicharacter compatible for any framework
  Lets say i use a multicharacter script that uses ```identifier``` and ```charid```

  That mean you cant identify your character with only a primary identifier.

  In this situation we could use
  ```lua
  Uniques.Set(playerId, ("%s_%s"):format(identifier, charid))
  ``` 

  In a situation where we are using a unique charid we could use 
  ```lua
  Uniques.Set(playerId, charid)
  ``` 
# Get
  - ```Uniques.Get(playerId)```
    - Params
      ```lua
      ---@params playerId int the player id to get the unique of
      ```
# Set
  - ```Uniques.Set(playerId, unique)```
    - Params
      ```lua
      ---@params playerId int the player id to get the unique of
      ---@params unique any the unique identifier
      ```
# Remove
  - ``` Uniques.Remove(playerId)```
    - Params
      ```lua
      ---@params playerId int the player id to get the unique of
      ```