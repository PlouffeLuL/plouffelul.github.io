---
sidebar_position: 7
---

# Vehicle

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Get seat coords 
    - ```Utils:GetSeatCoords(ped)```
        - Params
        ```
        ---@param ped int the ped to get seatcoords of
        ---@return vector3 Coords of the seat or coords of the ped
        ```

- Get props
    - ```Utils:GetVehicleProps(vehicle)```
        - Params
        ```
        ---@param vehicle integrer vehicleId
        ---@return table containing all vehicle props
        ```

- Set props
    - ```Utils:SetVehicleProps(vehicle, props)```
        - Params
        ```
        ---@param vehicle int vehicleId
        ---@param props table containing all vehicle props
        ```