---
sidebar_position: 1
---

# Server callback

# Importing callbacks
  ```lua
  local Callback = exports.plouffe_lib:Get("Callback")
  ```

# Server
  ```lua
  Callback:RegisterServerCallback(name,cb)
  ```
  - Params 
    ```lua
    ---@param name string the callback name
    ---@param cb function the callback function
    ---@return any void
    ```
    - Example
      ```lua
      Callback:RegisterServerCallback("hello:world", function(playerId, cb, data)
        print(data)
        cb("bar")
      end)
      ```

# Client

  - Sync
    ```lua
    Callback:Sync(name,...)
    ```

    - Params 
      ```lua
        ---@param name string callback name  
        ---@param ... any agrs to be sent
        ---@return any callback response
      ```

      - Example 
        ```lua
          local data = Callback:Sync("hello:world", "foo")
          print(data)
        ```

  - Await 
    ```lua
    Callback:Await(name,cb,...)
    ```

    - Params 
      ```lua
      ---@param name string callback name  
      ---@param cb function the callback function to be called when its done
      ---@param ... any agrs to be sent
      ---@return any void
      ```
      - Example 
        ```lua
        Callback:Await("hello:world", function(data)
          print(data)
        end, "foo")
        ```