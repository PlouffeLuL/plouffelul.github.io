---
sidebar_position: 1
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_trainrobbery

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_trainrobbery:qtarget
    - Example:
        - setr plouffe_trainrobbery:qtarget "true"
    - Description: 
        - Will use qtarget to loot crates

- plouffe_trainrobbery:start_item
    - Example:
        - set plouffe_trainrobbery:start_item "train_tracker"
    - Description: 
        - The item needed to start the robbery

- plouffe_trainrobbery:bomb_item
    - Example:
        - set plouffe_trainrobbery:bomb_item "anfo_bomb"
    - Description: 
        - The item needed to exploded the train

- plouffe_trainrobbery:time_until_loot
    - Example:
        - set plouffe_trainrobbery:time_until_loot "10"
    - Description: 
        - In minutes the amount of time players have to wait until they can loot the train
    
- plouffe_trainrobbery:police_groups
    - Example:
        - set plouffe_trainrobbery:police_groups ["police", "sherif"]
    - Description: 
        - Groups to be detected as 'Police'

- plouffe_trainrobbery:min_cops
    - Example:
        - set plouffe_trainrobbery:min_cops "5"
    - Description: 
        - Minimum amount of police to start

- plouffe_trainrobbery:train_interval
    - Example:
        - set plouffe_trainrobbery:train_interval "24"
    - Description: 
        - In hours the amount of time between robbery

- plouffe_trainrobbery:train_speed
    - Example:
        - set plouffe_trainrobbery:train_speed "10"
    - Description: 
        - the speed of the train from 1 to 40
        - If you are having sync issue a speed of 1 will make it less likely to desync
        - 40 of speed is funny and hard 
# Example config 

```
set plouffe_shopsrobbery:lockpick_items ["lockpick:1"]
set plouffe_shopsrobbery:money_item "money"
set plouffe_shopsrobbery:add_money_interval "15" # Minutes
set plouffe_shopsrobbery:min_money_addition "200"
set plouffe_shopsrobbery:max_money_addition "500"
set plouffe_shopsrobbery:max_shops_money "5000"
```
# Important

- All the convars needs to be set for the script to work