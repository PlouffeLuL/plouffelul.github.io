---
sidebar_position: 1
---

# Configuration

# Tebex
- https://plouffe.tebex.io/category/1722508
# Discord
- https://discord.com/invite/xJVCY9AvvW
# Important

- These files needs to be configurated before the script usage
  - plouffe_lib/configs/client.lua
  - plouffe_lib/configs/server.lua
  
# Setr

- Locales 
  - Sets the locales languages, currently only "fr" and "eng" is supported.
  - You can add your own locales inside of locales folder and then use this file name.
  - ```setr plouffe_lib:locales "fr"```

- Framework 
  - Sets the framework to be used, currently "esx" or "qbcore" is supported. Refer to configs file for more information.
  - You can manually configure it for your own framework or any other. Refer to config files.
  - ```setr plouffe_lib:framework "ox"```

- Inventory Framework 
  - Sets the inventory to be used, currently only "ox", "esx" or "qbcore". Refer to configs file for more information.
  - ```setr plouffe_lib:inventoryFramework "ox"```

- Framework Logs 
  - functions la inventory.ReduceDurability are only compatible with ox_inventory and needs to be configure manually. Setting this convar to true will disable those logs.
  - You can manually configure it for your own inventory or any other. Refer to config files.
  - ```setr plouffe_lib:disableFrameWorkLogs "true"```

- Warnings
  - Events manager warning, this is mostly used when registering game events for rdr.
  - ```setr plouffe_lib:warnings "true"```

- Cache timer
  - The cache timer update, default is 10000 (10 seconds).
  - ```setr plouffe_lib:cahe_update 5000```
  - This would set the timer to 5 seconds

- Weather 
  - The lib comes with a decently optimised weather and time system
  - To activate it ```setr plouffe_lib:use_weater "true"```

- Debuging 
  - This activates the debuging functions of the script, mostly used for the zone manager.
  - ```setr plouffe_lib:debug "true"``` 
  - You will be able to use this commands
  - ```zone:draw```
  