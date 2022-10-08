---
sidebar_position: 6
---

# Utility

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```
- Register a network only event (experimental)
    - ```Utils:RegisterNetEvent(name, fn)```
        - Params
        ```
        ---@param name string event name
        ---@param fn function callback
        ```
- Set a cooldown
    - ```Utils:Cooldown(time,name)```
        - Params
        ```
        ---@param time number time in ms for the cooldown
        ---@param name string cool down name
        ```
- Is on cooldown
    - ```Utils:IsOnCooldown(name)```
        - Params
        ```
        ---@param name string cool down name
        ---@return boolean if the cool down is finished or not
        ```
- Disable inputs timed
    - ```Utils:DisableInputsTimed(inputs,time)```
        - Params
        ```
        ---@param inputs table the list of inputs to disable needs v.index and v.input
        ---@param time int amount of time in ms
        ---@return any void
        ```
- Fade out
    - ```Utils:FadeOut(duration,sync)```
        - Params
        ```
        ---@param duration int fadeout duration
        ---@param sync boolean if true it will be run in a thread
        ---@return any void
        ```
- Fade in
    - ```Utils:FadeIn(duration,sync)```
        - Params
        ```
        ---@param duration int fadein duration
        ---@param sync boolean if true it will be run in a thread
        ---@return any void
        ```
- Blur 
    - ```Utils:Blur(duration, sync)```
        - Params
        ```
        ---@param duration int Blur duration this is used for a *stress* effect so it wont stay in
        ---@param sync boolean if true it will be run in a thread
        ---@return any void
        ```