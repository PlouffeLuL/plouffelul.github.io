---
sidebar_position: 10
---

# Seat

This event gets called when a switches seat on a mount or in a vehicle

- Event name
  ```
  plouffe_lib:seat
  ```

- Args
  ```
  1 : current seat
  2 : last seat
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:seat", function(currentSeat, oldSeat)
    print(("Player switched seat from %s to %s"):format(oldSeat, currentSeat))
  end)
  ```
