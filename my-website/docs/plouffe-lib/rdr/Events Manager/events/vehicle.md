---
sidebar_position: 9
---

# Vehicle

This event gets called when a player gets on or in a vehicle

- Event name
  ```
  plouffe_lib:vehicle
  ```

- Args
  ```
  1 : true if getting in or on a vehicle false if leaving a vehicle
  2 : local entity id of the vehicle
  3 : seat ... the seat 
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:vehicle", function(state, vehicle, seat)
    if state then
      print(("Player entered vehicle %s in seat %s"):format(vehicle, seat))
    else
      print(("Player left vehicle %s was in seat %s"):format(vehicle, seat))
    end
  end)
  ```
