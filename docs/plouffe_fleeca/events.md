---
sidebar_position: 3
description: "Script events"
---

# Events

# Try Lockpick
- Server > Client
- Used to trigger the lockpick function
```lua
TriggerClientEvent('plouffe_fleeca:tryLockpick', source)
```

# Try Thermal
- Server > Client
- Used to trigger the thermal charge function
```lua
TriggerClientEvent('plouffe_fleeca:tryThermal', source)
```

# Try Hack
- Server > Client
- Used to trigger the hacking function
```lua
TriggerClientEvent('plouffe_fleeca:tryHack', source)
```

# Try Destroy Loot
- Client > Client
- Used to trigger the TryDestroyLoot function
```lua
TriggerEvent('trolley:destroy')
```

# Try loot 
- Client > Client
- Used to trigger the TryLoot function
```lua
TriggerEvent('trolley:TryLoot')
```