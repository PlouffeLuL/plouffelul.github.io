---
sidebar_position: 3
---

# Notifications

- Importing only Notifications if you didnt import interface before
```lua
    local Notifications = exports.plouffe_lib:Get("Interface", "Notifications")
```

- Show
```lua
    Notifications.Show({
        style : string -- succes, error, info
        time : number -- MS if no persistentId or provided the notification will be removed after <default is 5000>
        persistentId : string -- Unique identifier 
        header : string -- <optional>
        message : string -- <optional>
    })
```

- Remove
```lua
    id : string -- unique identifier used initialy
    Notifications.Remove(id)
```

- Test command if the lib is in debug mode 
```
    RegisterCommand("notification", function(s,a,r)
        Notifications.Show({
            style = a[1],
            persistentId = a[2];
            time = 5000,
            header = a[3] and "Mecano",
            message = "Vous avez réparé le véhicule"
        })
    end)

    RegisterCommand("removenotification", function(s,a,r)
        Notifications.Remove(a[1])
    end)
```