---
sidebar_position: 1
---
# Configuration
# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_fleeca

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_fleeca:gabzmap
    - Example:
        - setr plouffe_fleeca:gabzmap "true"
    - Description: 
        - Will use the gabz mapping doors

- plouffe_fleeca:qtarget
    - Example:
        - setr plouffe_fleeca:qtarget "true"
    - Description: 
        - Will use the qtarget to loot and destroy loot

- plouffe_fleeca:hack_item
    - Example:
        - setr plouffe_fleeca:hack_item ["card_fleeca:1", "laptop:1"]
    - Description: 
        - 1x Card fleeca and 1x laptop will be nescessary to start the hack
    - Format
        - item_name:amount 
        - This ["usb_green:3"] would make it so 3 usb_green is nescessary

- plouffe_fleeca:thermal_item
    - Example:
        - setr plouffe_fleeca:thermal_item ["thermal_charge:1"]
    - Description: 
        - 1x thermal_charge will be nescessary to start the thermal
    - Format
        - item_name:amount 
        - This ["thermal_charge:10"] would make it so 10 thermal_charge is nescessary

- plouffe_fleeca:lockpick_item
    - Example:
        - setr plouffe_fleeca:lockpick_item ["lockpick:1"]
    - Description: 
        - 1x lockpick will be nescessary to start the lockpick
    - Format
        - item_name:amount 
        - This ["lockpick:10"] would make it so 10 lockpick is nescessary

- plouffe_fleeca:money_item
    - Example:
        - set plouffe_fleeca:money_item "money_bag"
    - Description: 
        - The name of your money item to be given once the money is stolen

- plouffe_fleeca:use_money_metadata
    - Example:
        - set plouffe_fleeca:use_money_metadata "true"
    - Description: 
        - If true the amount will be stored in metadata else it will be X amount of your money item

- plouffe_fleeca:police_groups
    - Example:
        - set plouffe_fleeca:police_groups ["police", "sherif"]
    - Description: 
        - Groups to be detected as 'Police'

- plouffe_fleeca:min_cops
    - Example:
        - set plouffe_fleeca:min_cops "4"
    - Description: 
        - Minimum player in 'polices' groups required to start the robbery

- plouffe_fleeca:global_rob_interval
    - Example:
        - set plouffe_fleeca:global_rob_interval "1"
    - Description: 
        - Time in HOURS between ALL bank robberies

- plouffe_fleeca:banks_rob_interval
    - Example:
        - set plouffe_fleeca:banks_rob_interval "12"
    - Description: 
        - Time in HOURS until you can rob THIS bank again

- plouffe_fleeca:add_money_interval
    - Example:
        - set plouffe_fleeca:add_money_interval "15"
    - Description: 
        - Time in MINUTES between the time banks generate money

- plouffe_fleeca:min_money_addition
    - Example:
        - set plouffe_fleeca:min_money_addition "2000"
    - Description: 
        - Minimum money to be added when adding money to a bank

- plouffe_fleeca:max_money_addition
    - Example:
        - set plouffe_fleeca:max_money_addition "5000"
    - Description: 
        - Maximum money to be added when adding money to a bank


# Example config 

```
setr plouffe_fleeca:gabzmap "true"
setr plouffe_fleeca:qtarget "true"
setr plouffe_fleeca:hack_item ["card_fleeca:1", "laptop:1"]
setr plouffe_fleeca:lockpick_item ["lockpick:1"]
setr plouffe_fleeca:thermal_item ["thermal_charge:1"]
set plouffe_fleeca:money_item "money_bag"
set plouffe_fleeca:use_money_metadata "true"
set plouffe_fleeca:police_groups ["police", "sherif"]
set plouffe_fleeca:min_cops "4"
set plouffe_fleeca:global_rob_interval "1" # Hours
set plouffe_fleeca:banks_rob_interval "12" # Hours
set plouffe_fleeca:add_money_interval "15" # Minutes
set plouffe_fleeca:min_money_addition "2000"
set plouffe_fleeca:max_money_addition "5000"
```

# Important

- All the convars needs to be set for the script to work
- By default the max money in each fleeca is 200k, you can change that value for each banks in the serverConfig file