---
sidebar_position: 3
---

# EventCallback

This allows you to create a callback for a game event instead of using game events (Situational but usefull)

- Example
  ```lua
  CreateThread(function()
    exports.plouffe_lib:EventCallback("EVENT_ENTITY_DAMAGED", function(data)
      print("Callback, EVENT_ENTITY_DAMAGED", json.encode(data))
    end, true)
  end)
  ```
