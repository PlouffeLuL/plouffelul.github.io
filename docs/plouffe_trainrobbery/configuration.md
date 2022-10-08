---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_trainrobbery

# Convars
|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_trainrobbery:qtarget | setr plouffe_trainrobbery:qtarget "true" | Will use qtarget to loot crates | string |
| plouffe_trainrobbery:start_item | set plouffe_trainrobbery:start_item "train_tracker" | The item needed to start the robbery | string |
| plouffe_trainrobbery:bomb_item | set plouffe_trainrobbery:bomb_item "anfo_bomb" | The item needed to exploded the train | string |
| plouffe_trainrobbery:time_until_loot | set plouffe_trainrobbery:time_until_loot "10" | In minutes the amount of time players have to wait until they can loot the train | string |
| plouffe_trainrobbery:police_groups | set plouffe_trainrobbery:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | json string[] |
| plouffe_trainrobbery:min_cops | set plouffe_trainrobbery:min_cops "5" | Minimum amount of police to start | string |
| plouffe_trainrobbery:train_interval | set plouffe_trainrobbery:train_interval "24" | In hours the amount of time between robbery | string |
| plouffe_trainrobbery:train_speed | set plouffe_trainrobbery:train_speed "10" | the speed of the train from 1 to 40 **  | string |

**Sync issues**
- If you are having sync issue a speed of 1 will make it less likely to desync
- 40 of speed is funny and hard 

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