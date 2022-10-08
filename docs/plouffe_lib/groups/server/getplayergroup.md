---
sidebar_position: 2
---

# Get player group

- Importing Groups
```lua
    local Groups = exports.plouffe_lib:Get("Groups")
```

- Getting player groups server side
```lua
    playerId : number 
    groupType : string <optional> -- if not used it will return the player groups object
    
    Groups:GetPlayerGroups(playerId, groupType)
```

- Structure 
```lua
    grouptype = {
        group = group, 
        subgroup = subgroup
    }
```