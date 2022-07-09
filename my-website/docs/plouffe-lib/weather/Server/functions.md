---
sidebar_position: 2
---

# Functions
- DoWeatherSync
    - Export 
    ```lua
    exports.plouffe_lib:DoWeatherSync()
    ```
    - Params 
        ```
        state : boolean 
        ```
    - Inverts the weather sync

- DoSyncTime
    - Export 
    ```lua
    exports.plouffe_lib:DoSyncTime()
    ```
    - Params 
        ```
        state : boolean 
        ```
    - Inverts the time sync

- SetTime
    - Export 
    ```lua
    exports.plouffe_lib:SetTime(hour,minute)
    ```
    - Params 
        ```
        hour : number
        minute : number
        ```
    - Sets time

- SetWeather
    - Export 
    ```lua
    exports.plouffe_lib:SetWeather(hour,minute)
    ```
    - Params 
        ```
        weather : string
        ```
    - Sets weather

- SetBlackout
    - Export 
    ```lua
    exports.plouffe_lib:SetBlackout(state)
    ```
    - Params 
        ```
        state : boolean 
        ```
    - Will globally set blackout