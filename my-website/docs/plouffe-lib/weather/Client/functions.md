---
sidebar_position: 2
---

# Functions
- ChangeWeatherSync
    - Export 
    ```lua
    exports.plouffe_lib:ChangeWeatherSync(state)
    ```
    - Params 
        ```
        state : boolean 
        ```
    - If set to false the script wont change weather anymore

- ChangeTimeSync
    - Export 
    ```lua
    exports.plouffe_lib:ChangeTimeSync(state)
    ```
    - Params 
        ```
        state : boolean 
        ```
    - If set to false the script wont change weather time

- Refresh
    - Export 
    ```lua
    exports.plouffe_lib:Refresh(weather,time)
    ```
    - Params 
        ```
        weather : boolean 
        time : boolean 
        ```
    - Will refresh and force sync what is set to true

- Blackout
    - Export 
    ```lua
    exports.plouffe_lib:Blackout(state)
    ```
    - Params 
        ```
        state : boolean 
        ```
    - Will locally set blackout