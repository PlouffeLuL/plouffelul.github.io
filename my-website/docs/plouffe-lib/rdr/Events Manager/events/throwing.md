---
sidebar_position: 4
---

# Throwing

This events gets called when ever the player is throwing an object or a throwable

- Event name
  ```
  plouffe_lib:throwing
  ```

- Args
  ```
  1 : hash of the throwable
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:throwing", function(throwableHash)
    print(("Player just threw %s "):format(throwableHash))
  end)
  ```
