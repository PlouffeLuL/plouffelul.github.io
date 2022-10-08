---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_shopsrobbery

# Convars

|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_shopsrobbery:lockpick_items | setr plouffe_shopsrobbery:lockpick_items ["lockpick:1"] | 1x lockpick will be nescessary to start the thermal | item_name:amount |
| plouffe_shopsrobbery:money_item | set plouffe_shopsrobbery:money_item "money" | The name of your money item to be given once the money is stolen | string |
| plouffe_shopsrobbery:add_money_interval | set plouffe_shopsrobbery:add_money_interval "15" | Time in MINUTES between the time banks generate money | string |
| plouffe_shopsrobbery:min_money_addition | set plouffe_shopsrobbery:min_money_addition "200" | Minimum money to be added when adding money to a shop | string |
| plouffe_shopsrobbery:max_money_addition | set plouffe_shopsrobbery:max_money_addition "500" | Maximum money to be added when adding money to a shop | string |
| plouffe_shopsrobbery:max_shops_money | set plouffe_shopsrobbery:max_shops_money "5000" | Maximum money to be avaible in the shop | string |

# Example config 

```
setr plouffe_trainrobbery:qtarget "true"
set plouffe_trainrobbery:start_item "train_tracker"
set plouffe_trainrobbery:bomb_item "anfo_bomb"
set plouffe_trainrobbery:time_until_loot "10" #minutes
set plouffe_trainrobbery:police_groups ["police", "sherif"]
set plouffe_trainrobbery:min_cops "5"
set plouffe_trainrobbery:train_interval "24" # hours
set plouffe_trainrobbery:train_speed "20" # from 1 to 40
```

# Important

- All the convars needs to be set for the script to work