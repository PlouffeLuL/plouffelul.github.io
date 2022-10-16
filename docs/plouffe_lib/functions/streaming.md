---
sidebar_position: 5
---

# Streaming

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Loading an Fx asset
    - ```Utils.AssureFxAsset(asset,ignoreRemove)```
        - Params
        ```
        ---@param asset string asset name
        ---@param ignoreRemove boolean to remove the asset after one second
        ---@return boolean if the asset was succesfully loaded
        ```
- Loading a model
    - ```Utils.AssureModel(model,ignoreRemove)```
        - Params
        ```
        ---@param model string model name
        ---@param ignoreRemove boolean to remove the model after one second
        ---@return boolean if the model was succesfully loaded
        ```
- Loading an animation dictionary
    - ```Utils.AssureAnim(dict,ignoreRemove)```
        - Params
        ```
        ---@param dict string dict name
        ---@param ignoreRemove boolean to remove the dict after one second
        ---@return boolean if the dict was succesfully loaded
        ```
- Loading an animation set
    - ```Utils.AssureAnimSet(dict,ignoreRemove)```
        - Params
        ```
        ---@param dict string dict name
        ---@param ignoreRemove boolean to remove the dict after one second
        ---@return boolean if the dict was succesfully loaded
        ```