---
sidebar_position: 2
description: "Script exports"
---

# Exports

# Client

- Jail menu
    - Used to send a player to jail
```lua
exports.plouffe_jail:SendToJailMenu()
```

- Unjail menu
    - Used to remove a player from jail
```lua
exports.plouffe_jail:UnjailMenu()
```

- Comunity services menu
    - Used to send a player to comunity services
```lua
exports.plouffe_jail:ComservMenu()
```

- PlantBomb
    - Used to trigger the plant bomb part of the breakout
```lua
exports.plouffe_jail:PlantBomb()
```

# Server

- ReduceSentence
    - Used to reduce a player jail time
```lua
exports.plouffe_jail:ReduceSentence(playerId, amount)
```

- UpSentence
    - Used to raise a player jail time
```lua
exports.plouffe_jail:UpSentence(playerId, amount)
```

- Set
    - Used to set a player in jail
```lua
exports.plouffe_jail:Set(playerId, time)
```

- Remove
    - Used to remove a player from jail
```lua
exports.plouffe_jail:Remove("playerId", playerId)
```

- AddComServ
    - Used to give a player comunity services
```lua
exports.plouffe_jail:AddComServ(playerId, amount)
```

- RemoveComServ
    - Used to remove all of a player comunity services
```lua
exports.plouffe_jail:RemoveComServ("playerId", playerId)
```

- ReduceComserv
    - Used to reduce a player comunity services
```lua
exports.plouffe_jail:ReduceComserv("playerId", playerId, amount)
```

- Breakout
    - Used to trigger a breakout
```lua
exports.plouffe_jail:Breakout()
```