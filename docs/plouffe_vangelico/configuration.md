---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_vangelico

# Convars
|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_vangelico:use_guards | set plouffe_vangelico:use_guards "true" | If the script should create the guards inside or not | string |
| plouffe_vangelico:hack_loot | set plouffe_vangelico:hack_loot "card_fleeca" | The item to be given the player once the hack is finished (set amount to 0 if you dont want it) | string |
| plouffe_vangelico:hack_loot_amount | set plouffe_vangelico:hack_loot_amount "1" | The amount of the set item to be given the player once the hack is finished (set to 0 if you dont want it) | string |
| plouffe_vangelico:grinder_item_name | set plouffe_vangelico:grinder_item_name "grinder" | The nescesary item to start the grinder minigame (will also look for the disc name item) | string |
| plouffe_vangelico:grinder_disc_name | set plouffe_vangelico:grinder_disc_name "grinder_disc" | The item to be consumed when the player fails the grinder minigame | string |
| plouffe_vangelico:loots | setr plouffe_vangelico:loots ["diamond"] | The possibles items to find when looting | json string[] |
| plouffe_vangelico:min_loots | set plouffe_vangelico:min_loots "1" | The minimum amount of possible items to find | string |
| plouffe_vangelico:max_loots | set plouffe_vangelico:max_loots "5" | The maximum amount of possible items to find | string |
| plouffe_vangelico:police_groups | set plouffe_vangelico:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | string |
| plouffe_vangelico:min_cops | set plouffe_vangelico:min_cops "5" | Minimum player in 'polices' groups required to start the robbery | string |
| plouffe_vangelico:rob_interval | set plouffe_vangelico:rob_interval "1" | Time in HOURS between robberies | string |
| plouffe_vangelico:allowed_time_to_rob | set plouffe_vangelico:allowed_time_to_rob "1" | Allowed time in HOURS to finish looting | string |

# Example config
```
set plouffe_vangelico:use_guards "true"
set plouffe_vangelico:hack_loot "card_fleeca"
set plouffe_vangelico:hack_loot_amount "1"
set plouffe_vangelico:grinder_item_name "grinder"
set plouffe_vangelico:grinder_disc_name "grinder_disc"
set plouffe_vangelico:loots [
    "diamond",
    "diamond_ring",
    "gold_chain",
    "gold_ring",
    "gold_watch",
    "silver_watch"
]
set plouffe_vangelico:min_loots "1"
set plouffe_vangelico:max_loots "5"
set plouffe_vangelico:police_groups ["police", "sherif"]
set plouffe_vangelico:min_cops "5"
set plouffe_vangelico:rob_interval "1" # Hours
set plouffe_vangelico:allowed_time_to_rob "1" # Hours
```

# Important

- All the convars needs to be set for the script to work