---
sidebar_position: 3
---

# Events

# plouffe_drugs:on_airdrop
- Called on server and client side (localy) when calling an airdrop
- Air drop data is stored in GlobalState.active_air_drop

```
AddEventHandler('plouffe_drugs:on_airdrop', function()
    -- Send a police alert ?
    -- Send a gang alert ?
end)
```
