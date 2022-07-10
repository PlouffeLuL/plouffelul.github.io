---
sidebar_position: 8
---

# Mount

This event gets called when a player gets on a mount

- Event name
  ```
  plouffe_lib:mount
  ```

- Args
  ```
  1 : true if getting on mount false if leaving a mount
  2 : local entity id of the mount
  3 : seat ... the seat 
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:mount", function(state, mount, seat)
    if state then
      print(("Player is on mount %s in seat %s"):format(mount, seat))
    else
      print(("Player left mount %s was in seat %s"):format(mount, seat))
    end
  end)
  ```
