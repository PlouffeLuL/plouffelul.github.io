---
sidebar_position: 1
---

# Cache

The default cache update timer is 10 seconds or when the current player ped changes
Timer can be set using a setr 

- Changing the timer
  ```
  setr plouffe_lib:cahe_update 5000
  ```

- Event name
  ```
  plouffe_lib:cache
  ```

- Structure
  ```
  data.ped : the current player ped
  data.pedCoords : the current player ped coords
  data.gameTimer : the game timer update using GetGameTimer()
  ```

- Example
  ```lua
  local ped = 0

  AddEventHandler('plouffe_lib:cache', function(data)
    ped = data.ped
  end)
  ```
