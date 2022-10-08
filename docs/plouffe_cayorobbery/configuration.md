---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib
- plouffe_doorlock
- plouffe_cayoloader

# Github
- https://github.com/PlouffeLuL/plouffe_cayorobbery

# Convars

|Name | Example | Description | Format |
| - |  - | - | - |
| plouffe_cayorobbery:qtarget | setr plouffe_cayorobbery:qtarget "true" | Will use qtarget to loot | string |
| plouffe_cayorobbery:thermal_item | set plouffe_cayorobbery:thermal_item "thermal_charge" | The item name used to thermal the gates | string |
| plouffe_cayorobbery:glass_cutter_item | set plouffe_cayorobbery:glass_cutter_item "thermal_glass_cutter" | The item name used to cut the glass | string |
| plouffe_cayorobbery:hack_item | set plouffe_cayorobbery:hack_item "usb_black" | The item name used to start the robbery | string |
| plouffe_cayorobbery:key_item | set plouffe_cayorobbery:key_item "cayo_keys" | The item name used to open doors | string |
| plouffe_cayorobbery:elevator_hack_item | set plouffe_cayorobbery:elevator_hack_item "laptop" | The item name used to hack the elevator | string |
| plouffe_cayorobbery:diamond_item | set plouffe_cayorobbery:diamond_item "huge_diamond" | The item name of the diamond | string |
| plouffe_cayorobbery:police_groups | set plouffe_cayorobbery:police_groups ["police", "sherif"] | Groups to be detected as 'Police' | json string[] |
| plouffe_cayorobbery:min_cops | set plouffe_cayorobbery:min_cops "5" | Minimum player in 'polices' groups required to start the robbery | string |
| plouffe_cayorobbery:time_to_rob | set plouffe_cayorobbery:time_to_rob "1" | Total time to complet the robbery in hours | string |

# Example config 

```
setr plouffe_cayorobbery:qtarget "true"
set plouffe_cayorobbery:thermal_item "thermal_charge"
set plouffe_cayorobbery:glass_cutter_item "thermal_glass_cutter"
set plouffe_cayorobbery:hack_item "usb_black"
set plouffe_cayorobbery:key_item "cayo_keys"
set plouffe_cayorobbery:elevator_hack_item "laptop"
set plouffe_cayorobbery:diamond_item "huge_diamond"
set plouffe_cayorobbery:police_groups ["police", "sherif"]
set plouffe_cayorobbery:min_cops "5"
set plouffe_cayorobbery:time_to_rob "1" # hours
```

# Items needed
- These items need to exist in your server for the script to work, you can find images in the files
    - 'h4_painting_01a'
    - 'h4_painting_01b'
    - 'h4_painting_01c'
    - 'h4_painting_01d'
    - 'h4_painting_01e'
    - 'h4_painting_01f'
    - 'h4_painting_01g'
    - 'h4_painting_01h'
    - 'vault_painting_01a'
    - 'vault_painting_01b'
    - 'vault_painting_01c'
    - 'vault_painting_01d'
    - 'vault_painting_01e'
    - 'vault_painting_01f'
    - 'vault_painting_01g'
    - 'vault_painting_01h'
    - 'vault_painting_01i'
    - 'vault_painting_01j'
# Important

- All the convars needs to be set for the script to work