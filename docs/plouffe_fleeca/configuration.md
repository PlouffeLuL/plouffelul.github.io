---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration
# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_fleeca

# Convars

|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_fleeca:gabzmap | setr plouffe_fleeca:gabzmap "true" | Will use the gabz mapping doors | string |
| plouffe_fleeca:qtarget | setr plouffe_fleeca:qtarget "true" | Will use the qtarget to loot and destroy loot | string |
| plouffe_fleeca:hack_item | setr plouffe_fleeca:hack_item ["card_fleeca:1", "laptop:1"] | 1x Card fleeca and 1x laptop will be nescessary to start the hack | item_name:amount |
| plouffe_fleeca:thermal_item | setr plouffe_fleeca:thermal_item ["thermal_charge:1"] | 1x thermal_charge will be nescessary to start the thermal | item_name:amount |
| plouffe_fleeca:lockpick_item | setr plouffe_fleeca:lockpick_item ["lockpick:1"] | 1x lockpick will be nescessary to start the lockpick | item_name:amount |
| plouffe_fleeca:money_item | set plouffe_fleeca:money_item "money_bag" | The name of your money item to be given once the money is stolen | string |
| plouffe_fleeca:money_item | set plouffe_fleeca:money_item "money_bag" | The name of your money item to be given once the money is stolen | string |
| plouffe_fleeca:use_money_metadata | set plouffe_fleeca:use_money_metadata "true" | If true the amount will be stored in metadata else it will be X amount of your money item | string |
| plouffe_fleeca:police_groups | set plouffe_fleeca:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | string |
| plouffe_fleeca:min_cops | set plouffe_fleeca:min_cops "4" | Minimum player in 'polices' groups required to start the robbery | string |
| plouffe_fleeca:global_rob_interval | set plouffe_fleeca:global_rob_interval "1" | Time in HOURS between ALL bank robberies | string |
| plouffe_fleeca:banks_rob_interval | set plouffe_fleeca:banks_rob_interval "12" | Time in HOURS until you can rob THIS bank again | string |
| plouffe_fleeca:add_money_interval | set plouffe_fleeca:add_money_interval "15" | Time in MINUTES between the time banks generate money | string |
| plouffe_fleeca:min_money_addition | set plouffe_fleeca:min_money_addition "2000" | Minimum money to be added when adding money to a bank | string |
| plouffe_fleeca:max_money_addition | set plouffe_fleeca:max_money_addition "5000" | Maximum money to be added when adding money to a bank | string |


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