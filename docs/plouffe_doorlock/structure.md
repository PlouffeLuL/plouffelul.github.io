---
sidebar_position: 2
description: "Data structure"
---

# Structure

# Regular door Example
- Add an object including this data structure to the ``Doors.DoorList`` table in serverConfig.lua.
- You can also use ``exports.plouffe_doorlock:RegisterDoor()`` **Server side only**

```lua
  davispd_entry_front = { -- The index/name needs to be unique 
		lock = true,
    interactCoords = { -- List of coords from where you can interact with the door
			{coords = vector3(380.7673034668, -1593.4407958984, 30.051382064819), maxDst = 2.0}
		},
		doors = { -- List of doors, to handle
			{model = 1670919150, coords = vector3(379.78421020508, -1592.6057128906, 30.201282501221)},
			{model = 618295057, coords = vector3(381.77600097656, -1594.2769775391, 30.201282501221)}
		},
    access = {
		  groups = {
			  police = {rankMin = 0, rankMax = 7}, -- Police in server rank 0 to rank 7 
			  policeoff = {rankMin = 0, rankMax = 7}, -- Police off service rank 0 to rank 7 
        police = {rankSpecific = 7} -- Can be set to a specific rank only
			}
    }
  }
```

# Automated door Example (Do not use if you dont know 100% what you are doing)
- Add an object including this data structure to the ``Doors.Automated`` table in serverConfig.lua.
- You can also use ``exports.plouffe_doorlock:RegisterDoor()`` **Server side only**

```lua
  fleeca_vinewood_vault = { -- The index/name needs to be unique 
		model = 2121050683, -- Entity model
		heading = {
      close = 249.86596679688, -- Closed heading
      open = 160.0, -- Opened heading
      modifier = -0.01 -- Opening speed
    },
		coords = vector3(313, -282, 55) -- Door coords
	}
```