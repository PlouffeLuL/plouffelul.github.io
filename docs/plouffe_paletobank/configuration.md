---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration
# Dependencies
- plouffe_lib
- plouffe_doorlock

# Github
- https://github.com/PlouffeLuL/plouffe_paletobank

# Convars
|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_paletobank:gabzmap | setr plouffe_paletobank:gabzmap "true" | Will use the gabz mapping doors | string |
| plouffe_paletobank:qtarget | setr plouffe_paletobank:qtarget "true" | Will use the qtarget to loot and destroy loot | string |
| plouffe_paletobank:hack_item | setr plouffe_paletobank:hack_item ["card_fleeca:1", "laptop:1"] | 1x Card fleeca and 1x laptop will be nescessary to start the hack | item_name:amount |
| plouffe_paletobank:lockpick_item | setr plouffe_paletobank:lockpick_item ["thermal_charge:1"] | 1x thermal_charge will be nescessary to start the thermal | item_name:amount |
| plouffe_paletobank:money_item | set plouffe_paletobank:money_item "money_bag" | The name of your money item to be given once the money is stolen | string |
| plouffe_paletobank:use_money_metadata | set plouffe_paletobank:use_money_metadata "true" | If true the amount will be stored in metadata else it will be X amount of your money item | string |
| plouffe_paletobank:police_groups | set plouffe_paletobank:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | string |
| plouffe_paletobank:min_cops | set plouffe_paletobank:min_cops "5" | Minimum player in 'polices' groups required to start the robbery | string |
| plouffe_paletobank:rob_interval | set plouffe_paletobank:rob_interval "1" | Time in HOURS between robberies | string |
| plouffe_paletobank:add_money_interval | set plouffe_paletobank:add_money_interval "15" | Time in MINUTES between the time banks generate money | string |
| plouffe_paletobank:min_money_addition | set plouffe_paletobank:min_money_addition "2000" | Minimum money to be added when adding money to a bank | string |
| plouffe_paletobank:max_money_addition | set plouffe_paletobank:max_money_addition "5000" | Maximum money to be added when adding money to a bank | string |
| plouffe_paletobank:max_bank_money | set plouffe_paletobank:max_bank_money "500000" | Maximum money to be avaible in the bank | string |
| plouffe_paletobank:time_to_hack | set plouffe_paletobank:time_to_hack "10" # seconds | The allowed delay between the two hacks to be completed in seconds | string |
| plouffe_paletobank:time_until_door_opens | set plouffe_paletobank:time_until_door_opens "10" # Minutes | The time after the door opens once the hack is completed in minutes | string |

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