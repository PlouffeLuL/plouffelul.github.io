---
sidebar_position: 6
---

# Item interaction

This event gets called when a player is starting or finishing an item interaction.

- Event name
  ```
  plouffe_lib:itemInteraction
  ```

- Args
  ```
  1 : true when the player starts an item interaction false when its finished
  2 : the interaction hash
  3 : the entity linked to the interaction 
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:itemInteraction", function(state, interactionHash, entity)
    if state then
      print(("Player started item interaction %s with entity %s "):format(interactionHash, entity))
    else
      print(("Player ended item interaction %s with entity %s "):format(interactionHash, entity))
    end
  end)
  ```
