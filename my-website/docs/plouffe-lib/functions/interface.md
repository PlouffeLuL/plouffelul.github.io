---
sidebar_position: 3
---

# Interface

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Text 3D
    ```
    coords : vector3
    text : string
    r : number
    g : number
    b : number
    alpha : number
    ```

    ```lua
    Utils:DrawText3D(coords,text,scale,r,g,b,alpha)
    ```

- Text 2D
    ```
    x : number
    y : number
    txt : string
    scale : number
    r : number
    g : number
    b : number
    alpha : number
    ```

    ```lua
    Utils:DrawText2D(x,y,txt,scale,r,g,b,alpha)
    ```
