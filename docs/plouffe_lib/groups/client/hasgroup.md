---
sidebar_position: 2
---

# Has group

- Importing Groups
```lua
    local Groups = exports.plouffe_lib:Get("Groups")
```

- Checking if a player has a group client side
```lua
    groupType : string
    group : string
    subgroup : any -- Needs to match the setter
    
    Groups.HasGroup(groupType, group, subgroup)
```