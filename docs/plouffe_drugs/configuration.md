---
sidebar_position: 1
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_drugs

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_drugs:qtarget
    - Example:
        - setr plouffe_drugs:qtarget "true"
    - Description: 
        - Will use qtarget to loot

- plouffe_drugs:water_items
    - Example:
        - set plouffe_drugs:water_items ["purifiedwater:60", "water:20"]
    - Description: 
        - purifiedwater will add 60 % water value to the plant
        - water will add 20% water value to the plant
    - Format
        - item_name:amount 

- plouffe_drugs:fert_items
    - Example:
        - plouffe_drugs:fert_items ["quality_fert:60", "fert:20"]
    - Description: 
        - quality_fert will add 60 % fert value to the plant
        - fert will add 20% fert value to the plant
    - Format
        - item_name:amount 

- plouffe_drugs:plants_items
    - Example:
        - set plouffe_drugs:plants_items ["plantpot:1", "weed_seed:1"]
    - Description: 
        - 1x plantpot and 1x weed_seed will be nescessary to plant
    - Format
        - item_name:amount 

- plouffe_drugs:weed_item
    - Example:
        - set plouffe_drugs:weed_item "weed"
    - Description: 
        - The name of your item to be considered weed
        - Will be given when harvesting plants

- plouffe_drugs:weed_growth_time
    - Example:
        - set plouffe_drugs:weed_growth_time "4320" # minutes
    - Description: 
        - The time required for a plant to get to full maturity in minutes

- plouffe_drugs:seed_item
    - Example:
        - set plouffe_drugs:seed_item "weed_seed"
    - Description: 
        - The name of your item to be considered seed
        - Will be given when harvesting female plants
        - Does not need to be set, if this convar is not set the plants wont give seeds.

- plouffe_drugs:allow_advanced_data
    - Example:
        - set plouffe_drugs:allow_advanced_data "true"
    - Description: 
        - This will allow the 'Data' option in the plants menu
        - Recommend only for dev / debuging purpose 

- plouffe_drugs:table_items
    - Example:
        - set plouffe_drugs:table_items ["methtable:1"]
    - Description: 
        - 1x methtable will be nescessary to place a meth table
    - Format
        - item_name:amount 

- plouffe_drugs:meth_item
    - Example:
        - set plouffe_drugs:meth_item "meth"
    - Description: 
        - The name of your item to be considered meth
        - Will be given when cooking meth

- plouffe_drugs:meth_amount
    - Example:
        - set plouffe_drugs:meth_amount "20"
    - Description: 
        - The amount of meth to be given after cooking meth

- plouffe_drugs:airdrop_items
    - Example:
        - set plouffe_drugs:airdrop_items ["money:10000"]
    - Description: 
        - 10000x money will be nescessary to call a airdrop
    - Format
        - item_name:amount 

- plouffe_drugs:drop_interval
    - Example:
        - set plouffe_drugs:drop_interval "3" # hours
    - Description: 
        - The time in hours between players can call an airdrop

- plouffe_drugs:coke_item
    - Example:
        - set plouffe_drugs:coke_item "coke"
    - Description: 
        - The name of your item to be considered coke
        - Will be given when looting an airdrop

- plouffe_drugs:coke_amount
    - Example:
        - set plouffe_drugs:coke_amount "500"
    - Description: 
        - The amount of coke to be given after looting an airdrop

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