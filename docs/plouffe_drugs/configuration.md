---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_drugs

# Convars
|Name | Example | Description | Format | Notes |
| - |  - | - | - | - |
| plouffe_drugs:qtarget | setr plouffe_drugs:qtarget "true" | - Will use qtarget to loot
| plouffe_drugs:water_items | set plouffe_drugs:water_items ["purifiedwater:60", "water:20"] | - purifiedwater will add 60 % water value to the plant | item_name:percent_amount |
| plouffe_drugs:fert_items | plouffe_drugs:fert_items ["quality_fert:60", "fert:20"] | - quality_fert will add 60 % fert value to the plant | item_name:percent_amount |
| plouffe_drugs:plants_items | set plouffe_drugs:plants_items ["plantpot:1", "weed_seed:1"] | - 1x plantpot and 1x weed_seed will be nescessary to plant  item_name:amount |
| plouffe_drugs:weed_item | set plouffe_drugs:weed_item "weed" | - The name of your item to be considered weed | string |
| plouffe_drugs:weed_growth_time | set plouffe_drugs:weed_growth_time "4320" # minutes | - The time required for a plant to get to full maturity in minutes | string |
| plouffe_drugs:seed_item | set plouffe_drugs:seed_item "weed_seed" | - The name of your item to be considered seed | string | 1 |
| plouffe_drugs:allow_advanced_data | set plouffe_drugs:allow_advanced_data "true" | - This will allow the 'Data' option in the plants menu | string | 2 |
| plouffe_drugs:table_items | set plouffe_drugs:table_items ["methtable:1"] | - 1x methtable will be nescessary to place a meth table | item_name:amount |
| plouffe_drugs:meth_item | set plouffe_drugs:meth_item "meth" | - The name of your item to be considered meth | string |
| plouffe_drugs:meth_amount | set plouffe_drugs:meth_amount "20" | - The amount of meth to be given after cooking meth | string |
| plouffe_drugs:airdrop_items | set plouffe_drugs:airdrop_items ["money:10000"] | - 10000x money will be nescessary to call a airdrop | item_name:amount |
| plouffe_drugs:drop_interval | set plouffe_drugs:drop_interval "3" # hours | - The time in hours between players can call an airdrop | string |
| plouffe_drugs:coke_item | set plouffe_drugs:coke_item "coke" | - The name of your item to be considered coke | string |
| plouffe_drugs:coke_amount | set plouffe_drugs:coke_amount "500" | - The amount of coke to be given after looting an airdrop | string |

# Notes
- 1
    - Will be given when harvesting female plants
    - Does not need to be set, if this convar is not set the plants wont give seeds.
- 2
    - Recommend only for dev / debuging purpose

# Example config 

```
setr plouffe_drugs:qtarget "true"
set plouffe_drugs:water_items ["purifiedwater:60", "water:20"]
set plouffe_drugs:fert_items ["quality_fert:60", "fert:20"]
set plouffe_drugs:plants_items ["plantpot:1", "weed_seed:1"]
set plouffe_drugs:weed_item "weed"
set plouffe_drugs:weed_growth_time "4320" # minutes
set plouffe_drugs:seed_item "weed_seed"
set plouffe_drugs:allow_advanced_data "true"
set plouffe_drugs:table_items ["methtable:1"]
set plouffe_drugs:meth_item "meth"
set plouffe_drugs:meth_amount "20"
set plouffe_drugs:airdrop_items ["money:10000"]
set plouffe_drugs:drop_interval "3" # hours
set plouffe_drugs:coke_item "coke"
set plouffe_drugs:coke_amount "500"
```

# Important

- All the convars needs to be set for the script to work