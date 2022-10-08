---
sidebar_position: 3
---

# Aiming in air

This event gets called when a player is aiming in air using R (i think is the default key) using ``0x8785E6E40C7A8819`` native.

- Event name
  ```
  plouffe_lib:aimingInAir
  ```

- Args
  ```
  1 : true if the player is aiming in air false if he stopped aiming in air
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:aimingInAir", function(state)
    if state then
      print("Player is aiming in air")
    else
      print("Player is not aiming in air anymore")
    end
  end)
  ```
