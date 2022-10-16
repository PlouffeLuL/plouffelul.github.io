---
sidebar_position: 2
---

# Entity wrapper

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Raychecks
    - These functions are very similar one to anothers and are alway calling a raycheck
        - The x,y,z params are optional, default is (0.0, 3.0, 0.0)
            - Utils.GetVehicleInFront(x,y,z)
            - Utils.GetPedInFront(x,y,z)
        - You can also use 
            - Utils.RayCheck(entityType,flag,x,y,z)
            - This is what the two other functions are using
        
- Getters 
    - These functions get the closest entity of type
        - Params are always 
            - Coords (if nil it will use the current pedcoords)
        - Will always return 
            - entity or nil
            - distance or 1000.0 if not entity
        - ```Utils.GetClosestPickup(coords)```
        - ```Utils.GetClosestObject(coords)```
        - ```Utils.GetClosestPed(coords)```
        - ```Utils.GetClosestPlayer(coords)```
        - ```Utils.GetClosestVehicle(coords)```

- Deleters 
    - These functions will delete specified entities
        - Params are always 
            - Coords
            - Distance
        - ```Utils.DeletePed(coords,distance)```
        - ```Utils.DeleteVehicle(coords,distance)```
        - ```Utils.DeleteObject(coords,distance)```
        - ```Utils.DeletePickup(coords,distance)```

- Wrappers 
    - These functions will return an array containing specified entities
        - ```Utils.GetPeds()```
        - ```Utils.GetPickups()```
        - ```Utils.GetObjects()```
        - ```Utils.GetVehicles()```