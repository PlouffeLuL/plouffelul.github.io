---
sidebar_position: 7
---

# Weapon

This event gets called when a player equips a weapon or is disarmed

- Event name
  ```
  plouffe_lib:weapon
  ```

- Args
  ```
  1 : weapon hash
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:weapon", function(weaponHash)
    print(("Player equiped weapon %s"):format(weaponHash))
  end)
  ```
