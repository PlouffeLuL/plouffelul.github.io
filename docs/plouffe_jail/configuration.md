---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_jail

# Convars
|Name | Example | Description | Format |
| - |  - | - | - |
|police_groups| set plouffe_jail:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | json string[] |
|max_jail_time| set plouffe_jail:max_jail_time 120 | Max jail to be sentenced | number |
|buyable_items| set plouffe_jail:buyable_items ["phone:5", "weapon_bat:10"] | Items buyable with reputation | item_name:required_reputation |
|max_com_serv| set plouffe_jail:max_com_serv 200 | Maximum comunity services a player is allowed | number |
|com_serv_punition| set plouffe_jail:com_serv_punition 100 |Jail time to give the player if he gets over the maximum comunity services | number |
|max_com_serv_sentence| set plouffe_jail:max_com_serv_sentence 200 | Max comunity services allowed to be sentenced | number |
|breakout| set plouffe_jail:breakout true | Allow jail breakout or not | boolean |
|breakout_item| set plouffe_jail:breakout_item "thermal_charge" | Item to be used when doing the breakout | string |
|breakout_cooldown| set plouffe_jail:breakout_cooldown 12 | Time in hours between all breakouts | number |
|min_breakout_cops| set plouffe_jail:min_breakout_cops 2 | Cops needed to be allowed to do a breakout | number |
|plouffe_doorlock| set plouffe_jail:plouffe_doorlock true | If you're using my doorlock script | boolean |
# Example config 

```
set plouffe_jail:police_groups ["police", "sherif"]
set plouffe_jail:max_jail_time 120
set plouffe_jail:buyable_items ["phone:5", "weapon_bat:10"]
set plouffe_jail:max_com_serv 200
set plouffe_jail:com_serv_punition 100
set plouffe_jail:max_com_serv_sentence 200
set plouffe_jail:breakout true
set plouffe_jail:breakout_item "thermal_charge"
set plouffe_jail:breakout_cooldown 12
set plouffe_jail:min_breakout_cops 2
set plouffe_jail:plouffe_doorlock true
```

# Important

- All the convars needs to be set for the script to work