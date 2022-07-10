---
sidebar_position: 1
---

# Configuration

# Important

- These files needs to be configurated before the script usage
  - plouffe_lib/configs/client.lua
  - plouffe_lib/configs/server.lua
  
# Setr

- Gamemode 
  - Sets the game mode for the lib.
  - ```setr plouffe_lib:gamemode "rdr3"```

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
  