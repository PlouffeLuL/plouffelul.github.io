---
sidebar_position: 1
---
# Configuration
# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_paletobank

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_paletobank:gabzmap
    - Example:
        - setr plouffe_paletobank:gabzmap "true"
    - Description: 
        - Will use the gabz mapping doors

- plouffe_paletobank:qtarget
    - Example:
        - setr plouffe_paletobank:qtarget "true"
    - Description: 
        - Will use the qtarget to loot and destroy loot

- plouffe_paletobank:hack_item
    - Example:
        - setr plouffe_paletobank:hack_item ["card_fleeca:1", "laptop:1"]
    - Description: 
        - 1x Card fleeca and 1x laptop will be nescessary to start the hack
    - Format
        - item_name:amount 
        - This ["usb_green:3"] would make it so 3 usb_green is nescessary

- plouffe_paletobank:lockpick_item
    - Example:
        - setr plouffe_paletobank:lockpick_item ["thermal_charge:1"]
    - Description: 
        - 1x thermal_charge will be nescessary to start the thermal
    - Format
        - item_name:amount 
        - This ["thermal_charge:10"] would make it so 10 thermal_charge is nescessary

- plouffe_paletobank:money_item
    - Example:
        - set plouffe_paletobank:money_item "money_bag"
    - Description: 
        - The name of your money item to be given once the money is stolen

- plouffe_paletobank:use_money_metadata
    - Example:
        - set plouffe_paletobank:use_money_metadata "true"
    - Description: 
        - If true the amount will be stored in metadata else it will be X amount of your money item

- plouffe_paletobank:police_groups
    - Example:
        - set plouffe_paletobank:police_groups ["police", "sherif"]
    - Description: 
        - Groups to be detected as 'Police'

- plouffe_paletobank:min_cops
    - Example:
        - set plouffe_paletobank:min_cops "5"
    - Description: 
        - Minimum player in 'polices' groups required to start the robbery

- plouffe_paletobank:rob_interval
    - Example:
        - set plouffe_paletobank:rob_interval "1"
    - Description: 
        - Time in HOURS between robberies

- plouffe_paletobank:add_money_interval
    - Example:
        - set plouffe_paletobank:add_money_interval "15"
    - Description: 
        - Time in MINUTES between the time banks generate money

- plouffe_paletobank:min_money_addition
    - Example:
        - set plouffe_paletobank:min_money_addition "2000"
    - Description: 
        - Minimum money to be added when adding money to a bank

- plouffe_paletobank:max_money_addition
    - Example:
        - set plouffe_paletobank:max_money_addition "5000"
    - Description: 
        - Maximum money to be added when adding money to a bank

- plouffe_paletobank:max_bank_money
    - Example:
        - set plouffe_paletobank:max_bank_money "500000"
    - Description: 
        - Maximum money to be avaible in the bank

- plouffe_paletobank:time_to_hack
    - Example:
        - set plouffe_paletobank:time_to_hack "10" # seconds
    - Description: 
        - The allowed delay between the two hacks to be completed in seconds

- plouffe_paletobank:time_until_door_opens
    - Example:
        - set plouffe_paletobank:time_until_door_opens "10" # Minutes
    - Description: 
        - The time after the door opens once the hack is completed in minutes

# Example config 

```
setr plouffe_paletobank:gabzmap "true"
setr plouffe_paletobank:qtarget "true"
setr plouffe_paletobank:hack_item ["card_fleeca:1", "laptop:1"]
setr plouffe_paletobank:thermal_item ["thermal_charge:1"]
set plouffe_paletobank:money_item "money_bag"
set plouffe_paletobank:use_money_metadata "true"
set plouffe_paletobank:police_groups ["police", "sherif"]
set plouffe_paletobank:min_cops "4"
set plouffe_paletobank:rob_interval "1" # Hours
set plouffe_paletobank:add_money_interval "15" # Minutes
set plouffe_paletobank:min_money_addition "2000"
set plouffe_paletobank:max_money_addition "5000"
set plouffe_paletobank:max_bank_money "500000"
set plouffe_paletobank:time_to_hack "10" # seconds
set plouffe_paletobank:time_until_door_opens "10" # Minutes
```

# Important

- All the convars needs to be set for the script to work
- By default the max money in each fleeca is 200k, you can change that value for each banks in the serverConfig file