---
sidebar_position: 1
---

# Get group

- Importing Groups
```lua
    local Groups = exports.plouffe_lib:Get("Groups")
```

- Getting groups server side
```lua
    group : string

    Groups.GetGroupPlayers(group)
```

- Example usage 
```lua
    local polices = Groups.GetGroupPlayers("police")
    print(("There is currently %s polices"):format(polices.len))

    for playerId,_ in pairs(polices) do
        print(("%s is currently listed as a police"):format(GetPlayerName(playerId)))
    end
```