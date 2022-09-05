---
sidebar_position: 1
---
# Configuration

# Dependencies
- plouffe_lib
- plouffe_doorlock
- plouffe_cayoloader

# Github
- https://github.com/PlouffeLuL/plouffe_cayorobbery

# Discord
- https://discord.com/invite/xJVCY9AvvW

# Convars
- plouffe_cayorobbery:qtarget
    - Example:
        - setr plouffe_cayorobbery:qtarget "true"
    - Description: 
        - Will use qtarget to loot

- plouffe_cayorobbery:thermal_item
    - Example:
        - set plouffe_cayorobbery:thermal_item "thermal_charge"
    - Description: 
        - The item name used to thermal the gates

- plouffe_cayorobbery:glass_cutter_item
    - Example:
        - set plouffe_cayorobbery:glass_cutter_item "thermal_glass_cutter"
    - Description: 
        - The item name used to cut the glass

- plouffe_cayorobbery:hack_item
    - Example:
        - set plouffe_cayorobbery:hack_item "usb_black"
    - Description: 
        - The item name used to start the robbery

- plouffe_cayorobbery:key_item
    - Example:
        - set plouffe_cayorobbery:key_item "cayo_keys"
    - Description: 
        - The item name used to open doors

- plouffe_cayorobbery:elevator_hack_item
    - Example:
        - set plouffe_cayorobbery:elevator_hack_item "laptop"
    - Description: 
        - The item name used to hack the elevator

- plouffe_cayorobbery:diamond_item
    - Example:
        - set plouffe_cayorobbery:diamond_item "huge_diamond"
    - Description: 
        - The item name of the diamond

- plouffe_cayorobbery:police_groups
    - Example:
        - set plouffe_cayorobbery:police_groups ["police", "sherif"]
    - Description: 
        - Groups to be detected as 'Police'

- plouffe_cayorobbery:min_cops
    - Example:
        - set plouffe_cayorobbery:min_cops "5"
    - Description: 
        - Minimum player in 'polices' groups required to start the robbery

- plouffe_cayorobbery:time_to_rob
    - Example:
        - set plouffe_cayorobbery:time_to_rob "1"
    - Description: 
        - Total time to complet the robbery in hours

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