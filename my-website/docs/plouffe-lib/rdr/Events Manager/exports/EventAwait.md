---
sidebar_position: 4
---

# EventAwait

This allows to create a promise to catch data from a game event

- Example
  ```lua
  CreateThread(function()
    local data = exports.plouffe_lib:EventAwait("EVENT_ENTITY_DAMAGED")
    print("Promise, EVENT_ENTITY_DAMAGED", json.encode(data, {indent = true}))
  end)
  ```
