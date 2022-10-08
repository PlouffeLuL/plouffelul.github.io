---
sidebar_position: 2
---

# Aiming

This event gets called when a player is aiming / free aiming

- Event name
  ```
  plouffe_lib:aiming
  ```

- Args
  ```
  1 : true if the player is aiming if he stopped aiming
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:aiming", function(state)
    if state then
      print("Player is free aiming")
    else
      print("Player stopped free aiming")
    end
  end)
  ```
