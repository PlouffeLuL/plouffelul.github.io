---
sidebar_position: 2
---

# Client callback

# Importing callbacks
  ```lua
  local Callback = exports.plouffe_lib:Get("Callback")
  ```

# Server
  ```lua
  Callback:ClientCallback(playerId,name,timeout,cb,...)
  ```
  - Params 
    ```lua
    ---@param playerId number player id to callback
    ---@param name string the callback name
    ---@param timeout number the maximum time for the callback to be accomplished
    ---@param cb function the function callback
    ---@param ... any the params to be sent to the callback
    ---@return any void
    ```
    - Example
      ```lua
        Callback:ClientCallback(playerId, "hello:world", 30, (data)
            print(data)
        end, "foo")
      ```

# Client 
  ```lua
  Callback:RegisterClientCallback(name,cb)
  ```
  - Params 
    ```lua
    ---@param playerId number player id to callback
    ---@param name string the callback name
    ---@param timeout number the maximum time for the callback to be accomplished
    ---@param cb function the function callback
    ---@param ... any the params to be sent to the callback
    ---@return any void
    ```
    - Example
      ```lua
        Callback:RegisterClientCallback("hello:world", function(cb,data)
            print(data)
            cb("bar")
        end)
      ```