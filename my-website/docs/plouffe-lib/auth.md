---
sidebar_position: 8
---

# Auth

# Importing Auth
  ```lua
  local Auth = exports.plouffe_lib:Get("Auth")
  ```

# Events
- Call 
```lua
Auth:Events(playerId,eventName,timer)
```
- Params 
    ```
    playerId : int
    eventName : string
    timer : number (default 1 for 1 second)
    ```
- Returns 
  ```
  allowAcces : boolean
  ```
- Usage 
  - Allow for the protection of spamming of events
- Example
  - Alot of us knows about the esx police blips event that has been abused alot to make servers crash by spamming it.
  - Using it like this  
  ```
  RegisterNetEvent("esx:policeblips", function()
    local playerId = source

    if not Auth:Events(playerId,"esx:policeblips") then
      return DropPlayer(player, "spammed esx blips")
    end
  end)
  ```
  - Would protect this event from crashing the server

# Register
- Call 
```lua
Auth:Register(playerId)
```
- Params 
    ```
    playerId : int 
    ```
- Returns 
  ```
  isRegistered : boolean
  auth key : string
  ```
- Usage 
  - Generate a unique 'authentification key' asigned to a resource for a player.

# Validate
- Call 
```lua
Auth:Validate(playerId,auth)
```
- Params 
  ```lua
  playerId : int 
  auth : string
  ```
- Returns 
  ```lua
  isValid : boolean
  ```
- Usage 
  - Validate a unique 'authentification key' asigned to a resource for a player.
