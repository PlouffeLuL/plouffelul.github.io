---
sidebar_position: 1
---

# Register
```lua
local registered, reason = exports.plouffe_lib:Register(data)
```
- Params 
    - name
        - Type: string
        - Unique identifier of a created zone
    - label
        - Type: string
        - Will be formated to the key used in the keymap if it isnt nil
        - Is not of any use of the 'isZone' param is not true
    - isZone
        - Type: boolean
        - If you want to use the ui or use the zonemap event needs to be true
    - distance 
        - Type: number
        - If you're coords arent a table this will be used to identify the distance from the center
    - zMax
        - Type: number
        - Absolute Z maximum
    - zMin 
        - Type: number
        - Absolute Z minimum   
    - coords 
        - Type: table with multiples vector3 or table with x,y,z, vector3, table with x,y,z
        - Examples: 
            - coords = vector3(0,0,0)
            - coords = {x = 0.0, y = 0.0, z = 0.0}
            - coords = {
                {x = 0.0, y = 0.0, z = 0.0},
                {x = 0.0, y = 0.0, z = 0.0},
                {x = 0.0, y = 0.0, z = 0.0}
            }
            - coords = {
                vector3(0,0,0),
                vector3(0,0,0),
                vector3(0,0,0),
                vector3(0,0,0),
                vector3(0,0,0)
            }
    - params
        - Type: table
        - this data will be send in the event when triggered
    - groups
        - Type: table
        - Examples: 
            - groups = {'police'}
            - groups = {police = true}
            - groups = {police = {1,2,3,4}}
            - groups = {police = {['1'] = true}
    - vehicle
        - Type: boolean
        - true = only accesible in a vehicle
    - keyMap
        - Type: table
        - Examples = {
            key = 'E', 
            event ='some_event'
        }
    - zoneMap
        - Type: table
        - Examples = {
            inEvent = 'inZone' , 
            outEvent = 'exitZone'
        }
    - ped
        - Type: table
        - Examples = {
            model = type: string, 
            coords = type: vector3 or table with xyz, 
            heading = type: number
        }
# Raw examples 
```
    local data = {
        name = "(optional) type: string, if you're not using it you wont be able to acces this zone with exports as its used as main identifier and it will be overriden if you restart your resource this SHOULD REALLY BE USED",
        label = "(optional) type: string, will be formated to the key used in the keymap if it isnt nil",
        isZone = "(optional) type: boolean if you want to use the ui or use the zonemap event needs to be true",
        distance = "(optional) type: number",
        zMax = "(optional) type: number",
        zMin = "(optional) type: number",
        coords = "type: table with multiples vector3 or table with x,y,z, vector3, table with x,y,z",
        params = "(optional) type: table ex: {kekers = true}, this data will be send in the event when triggered",
        groups = "(optional) type: table ex: {'police'}, {police = true}, {police = {1,2,3,4}}, police = {['1'] = true}, uses groups identity and subgroups. Subgroups are unlimited and can be used with any dataType. They are subject to what you set your group has with the setter.",
        vehicle = "(optional) type: boolean ex: true = only accesible in a vehicle ",
        keyMap = "(optional) type: table, ex: {key = type: string ex: 'E', event = type: string ex: 'some_event'}",
        zoneMap = "(optional) type: table, ex: {inEvent = type: string ex: 'inZone_hospital' , outEvent = type: string ex: 'extiZone_hospital'}",
        ped = "(optional) type: table, ex: {model = type: string, coords = type: vector3 or table with xyz, heading = type: number}"
    }

    ---@return registered boolean If the zone has been properly registered
    ---@return reason string the reason why the zone hasnt been registered
    local registered, reason = exports.plouffe_lib:Register(data)
```