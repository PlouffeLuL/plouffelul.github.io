---
sidebar_position: 4
---

# Menu

- Importing only menu if you didnt import interface before
```lua
    local Menu = exports.plouffe_lib:Get("Interface", "Menu")
```

- Show
```lua
    local option_clicked = Menu.Open(data : object of options)
```

- Option structure
```lua
    header : string
    text : string
    event : string -- Client event to be triggered when clicked `this` is passed as param 0
    serverEvent : string -- Server event to be triggered when clicked `this` is passed as param 0
    export : string -- export to be called when clicked `this` is passed as param 0
```

- Test command if the lib is in debug mode 
```
    exports("testMenu", function (data)
        print(json.encode(data, {indent = true}))
    end)

    RegisterCommand("menuuu", function()
        local clicked = Menu.Open({
            {
                header = "Voir vos locations",
                text = "Vous montre toutes vos locations active",
                export = "plouffe_lib:testMenu"
            },
            {
                header = "Prendre une location",
                text = "Vous permet de louer un véhicule"
            },
            {
                header = "Header 3",
                text = "Text 3"
            }
        })
    end)
```