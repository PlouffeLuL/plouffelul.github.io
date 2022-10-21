---
sidebar_position: 2
description: "Script events"
---

# Events

# Client

- OnClothing
    - Client > Client
    - Called when a player tries to open the clothing menu
    - Pre-configured for es_extended, Qb-Core and ox_core
```lua
    AddEventHandler("plouffe_jail:onClothing", function()
        print("onClothing")
    end)
```

- OnYoga
    - Client > Client
    - Called when a player tries to do yoga
```lua
    AddEventHandler("plouffe_jail:onYoga", function()
        if not IsPedActiveInScenario(PlayerPedId()) then
            TaskStartScenarioInPlace(PlayerPedId(), "WORLD_HUMAN_YOGA", 0, true)
        end

        Wait(5000)

        ClearPedTasks(PlayerPedId())
    end)
```

# Global state

- jail_breakout

```lua
    AddStateBagChangeHandler("jail_breakout", "GlobalState", function(bagName,key,value,reserved,replicated)
        print("Breakout", value)
    end)
```