---
sidebar_position: 2
---

# Vehicle

- Event name
  ```
  plouffe_lib:inVehicle
  ```

- Args
  ```
  1 : true if the player entered a vehicle and false if left a vehicle
  2 : local entity id of the vehicle
  ```

- Example
  ```
  local isInVehicle = false

  AddEventHandler('plouffe_lib:inVehicle', function(inVehicle, vehicle)
    isInVehicle = inVehicle 

    CreateThread(function()
      while isInVehicle do
        Wait(1000)
        print(("Player is currently inside a vehicle, entity id is: %s"):format(vehicle))
      end
    end)
  end)
  ```
