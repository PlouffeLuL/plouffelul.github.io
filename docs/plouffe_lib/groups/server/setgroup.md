---
sidebar_position: 1
---

# Groups Setter

- Importing Groups
```lua
  local Groups = exports.plouffe_lib:Get("Groups")
```

- Setting a player group
```lua
  playerId : number
  groupType : string
  group : string
  subgroup : string or number
    
  Groups:Set(playerId, groupType, group, subgroup)
```