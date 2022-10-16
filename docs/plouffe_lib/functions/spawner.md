---
sidebar_position: 4
---

# Entity Creation

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Spawning a ped
    - ```Utils.SpawnPed(model,coords,heading,networked,mission,ignoreRemoveModel)```
        - Params
        ```
        ---@param model string ped model
        ---@param coords vector3 spawn coords
        ---@param heading number spawn heading
        ---@param networked boolean IsNetworked
        ---@param mission boolean IsMission
        ---@param ignoreRemoveModel boolean to remove the model after one second
        ---@return entityId ped that was created
        ```

- Spawning a vehicle
    - ```Utils.SpawnVehicle(model,coords,heading,networked,mission,giveKeys,ignoreRemoveModel)```
        - Params
        ```
        ---@param model text ped model
        ---@param coords vector3 spawn coords
        ---@param heading number spawn heading
        ---@param networked boolean IsNetworked
        ---@param mission boolean IsMission
        ---@param giveKeys boolean give car keys
        ---@param ignoreRemoveModel boolean to remove the model after one second
        ---@return entityId vehicle that was created
        ```

- Spawning an object
    - ```Utils.CreateProp(model,coords,heading,networked,mission,ignoreRemoveModel)```
        - Params
        ```
        ---@param model text ped model
        ---@param coords vector3 spawn coords
        ---@param heading number spawn heading
        ---@param networked boolean IsNetworked
        ---@param mission boolean IsMission
        ---@param ignoreRemoveModel boolean to remove the model after one second
        ---@return entityId ped that was created
        ```