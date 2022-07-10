---
sidebar_position: 1
---

# Groups Setter

- Sets the player job groups
```
  RegisterNetEvent("esx:setjob", function(data)
    table.insert(Lib.Utils.playerGroups, {type = "job", group = data.name, subgroup = data.grade})
  end)
```

- Sets the player gang groups
```
  RegisterNetEvent("esx:setgang", function(data)
    table.insert(Lib.Utils.playerGroups, {type = "gang", group = data.name, subgroup = data.grade})
  end)
```

- Can be used for anything
```
  RegisterNetEvent("esx:setanything", function(data)
    table.insert(Lib.Utils.playerGroups, {type = "anything", group = data.name, subgroup = data.grade})
  end)
```