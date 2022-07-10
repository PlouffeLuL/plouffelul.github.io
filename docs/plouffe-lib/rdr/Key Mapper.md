---
sidebar_position: 2
---

# Key Mapper

The key mapper allows to have a similar system to the fivem key mapping and lets you have a wrapper for all your keybinds.

- Exports
  - Registering a key
  ```lua
  --- @param commandString string command string 
  --- @param description string description of the keybind (if we ever make a ui for those keybinds to allow in game modification we would show this description)
  --- @param inputType string keybord or mouse (Currently not supported i only added it for further implementation by cfx of the key mapper so it would be easier to migrate to it)
  --- @param inputKey string Key input
  --- @return boolean if the keybind has been succesfully registered
  ```
  ```lua
  exports.plouffe_lib:RegisterKeyMapping(commandString, description, inputType, inputKey, modifier)
  ```
  - Removing a key 
  ```lua
  --- @param commandString string command string 
  --- @param inputKey string Key input
  --- @return boolean if the keybind has been succesfully removed
  ```
  ```lua
  exports.plouffe_lib:RemoveKeyMapping(commandString, inputKey)
  ```

  - Example usage
  ```lua
  RegisterCommand("test_keymapper", function(s,a,r)
    if a[1] then
      exports.plouffe_lib:RemoveKeyMapping("kek", "G")
    else
      exports.plouffe_lib:RegisterKeyMapping("kek", "stupid kek", "keyboard", "G", "SHIFT")
      exports.plouffe_lib:RegisterKeyMapping("idk", "stupid idk", "keyboard", "F")

      RegisterCommand("+idk", function()
        print("+idk")
      end)

      RegisterCommand("-idk", function()
        print("-idk")
      end)

      RegisterCommand("+kek", function()
        print("+kek")
      end)

      RegisterCommand("-kek", function()
        print("-kek")
      end)
    end
  end)
  ```