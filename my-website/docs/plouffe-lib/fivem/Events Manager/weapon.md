---
sidebar_position: 3
---

# Weapon

- Event name
  ```
  plouffe_lib:hasWeapon
  ```

- Args
  ```
  1 : true if the player equiped a weapon or false if player is disarmed
  2 : currently equiped weapon hash
  ```

- Example
  ```
  local weaponEquiped = false

  AddEventHandler("plouffe_lib:hasWeapon", function(hasWeapon, weaponHash)
    weaponEquiped = hasWeapon

    CreateThread(function()
      while weaponEquiped do
        Wait(1000)
        print(("Player is holding weapon hash: %s"):format(weaponHash))
      end
    end)
  end)
  ```
