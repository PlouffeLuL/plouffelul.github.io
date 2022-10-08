---
sidebar_position: 3
description: "Script exports"
---

# Exports
  - The index data is the unique name/index you set the door with when registering it.

# Client
  # OpenAutomated
  - exports.plouffe_doorlock:OpenAutomated(index)

# Server
  # UpdateDoorState
  ```lua
    ---@param index string -- unique name/index you set the door with when registering it
    ---@param state boolean -- lock = true, unlock = false
    exports.plouffe_doorlock:UpdateDoorState(index, state)
  ```

  # UpdateDoorStateTable
  ```lua
    ---@param list array<string> -- array of indexes
    ---@param state boolean -- lock = true, unlock = false
    exports.plouffe_doorlock:UpdateDoorStateTable(list,state)
  ```
  # RegisterDoor
  ```lua
    ---@param name string -- index / name
    ---@param data table -- use the appropriate data structure
    ---@param isAutomated boolean -- if the door is an automated door or not
    exports.plouffe_doorlock:RegisterDoor(name, data, isAutomated)
  ```
