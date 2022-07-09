---
sidebar_position: 5
---

# Melee combat

This event gets called when a player is engaging in melee combat

- Event name
  ```
  plouffe_lib:meleeCombat
  ```

- Args
  ```
  1 : true if the player is in melee combat false if he stopped
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:meleeCombat", function(state)
    if state then
      print("Player started melee combat")
    else
      print("Player ended melee combat")
    end
  end)
  ```
