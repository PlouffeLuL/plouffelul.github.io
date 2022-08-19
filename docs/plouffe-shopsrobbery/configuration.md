---
sidebar_position: 1
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_shopsrobbery

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_shopsrobbery:lockpick_items
    - Example:
        - setr plouffe_shopsrobbery:lockpick_items ["lockpick:1"]
    - Description: 
        - 1x lockpick will be nescessary to start the thermal
    - Format
        - item_name:amount 
        - This ["lockpick:10"] would make it so 10 lockpick is nescessary

- plouffe_shopsrobbery:money_item
    - Example:
        - set plouffe_shopsrobbery:money_item "money"
    - Description: 
        - The name of your money item to be given once the money is stolen

- plouffe_shopsrobbery:add_money_interval
    - Example:
        - set plouffe_shopsrobbery:add_money_interval "15"
    - Description: 
        - Time in MINUTES between the time banks generate money

- plouffe_shopsrobbery:min_money_addition
    - Example:
        - set plouffe_shopsrobbery:min_money_addition "200"
    - Description: 
        - Minimum money to be added when adding money to a shop

- plouffe_shopsrobbery:max_money_addition
    - Example:
        - set plouffe_shopsrobbery:max_money_addition "500"
    - Description: 
        - Maximum money to be added when adding money to a shop

- plouffe_shopsrobbery:max_shops_money
    - Example:
        - set plouffe_shopsrobbery:max_shops_money "5000"
    - Description: 
        - Maximum money to be avaible in the shop

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