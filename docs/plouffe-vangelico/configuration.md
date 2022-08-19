---
sidebar_position: 1
---
# Configuration

# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_vangelico

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_shopsrobbery:use_guards
    - Example:
        - set plouffe_vangelico:use_guards "true"
    - Description: 
        - If the script should create the guards inside or not

- plouffe_shopsrobbery:hack_loot
    - Example:
        - set plouffe_vangelico:hack_loot "card_fleeca"
    - Description: 
        - The item to be given the player once the hack is finished (set amount to 0 if you dont want it)

- plouffe_shopsrobbery:hack_loot_amount
    - Example:
        - set plouffe_vangelico:hack_loot_amount "1"
    - Description: 
        - The amount of the set item to be given the player once the hack is finished (set to 0 if you dont want it)

- plouffe_shopsrobbery:grinder_item_name
    - Example:
        - set plouffe_vangelico:grinder_item_name "grinder"
    - Description: 
        - The nescesary item to start the grinder minigame (will also look for the disc name item)

- plouffe_shopsrobbery:grinder_disc_name
    - Example:
        - set plouffe_vangelico:grinder_disc_name "grinder_disc"
    - Description: 
        - The item to be consumed when the player fails the grinder minigame

- plouffe_vangelico:loots
    - Example:
        - setr plouffe_vangelico:loots [
            "diamond",
            "diamond_ring",
            "gold_chain",
            "gold_ring",
            "gold_watch",
            "silver_watch"
        ]
    - Description: 
        - The possibles items to find when looting

- plouffe_shopsrobbery:min_loots
    - Example:
        - set plouffe_vangelico:min_loots "1"
    - Description: 
        - The minimum amount of possible items to find

- plouffe_shopsrobbery:max_loots
    - Example:
        - set plouffe_vangelico:max_loots "5"
    - Description: 
        - The maximum amount of possible items to find

- plouffe_vangelico:police_groups
    - Example:
        - set plouffe_vangelico:police_groups ["police", "sherif"]
    - Description: 
        - Groups to be detected as 'Police'

- plouffe_vangelico:min_cops
    - Example:
        - set plouffe_vangelico:min_cops "5"
    - Description: 
        - Minimum player in 'polices' groups required to start the robbery

- plouffe_vangelico:rob_interval
    - Example:
        - set plouffe_vangelico:rob_interval "1"
    - Description: 
        - Time in HOURS between robberies

- plouffe_vangelico:allowed_time_to_rob
    - Example:
        - set plouffe_vangelico:allowed_time_to_rob "1"
    - Description: 
        - Allowed time in HOURS to finish looting

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