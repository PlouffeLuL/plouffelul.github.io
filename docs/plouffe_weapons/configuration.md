---
sidebar_position: 1
description: "Required script configuration"
---
# Configuration

# Dependencies
- plouffe_lib

# Github
- https://github.com/PlouffeLuL/plouffe_weapons

# Convars
|Name | Example | Description | Format | Notes |
| - |  - | - | - | - |
| plouffe_weapons:removeDrops | set plouffe_weapons:removeDrops "true" | Simply remove weapons drops without the use of a frame thread | string | |
| plouffe_weapons:forceHeadshot | set plouffe_weapons:forceHeadshot "true" | Force headshots | string | 1 |
| plouffe_weapons:customCrosshair | set plouffe_weapons:customCrosshair "true" | Use custom crosshair | string | 2 |
| plouffe_weapons:tazerEffects | set plouffe_weapons:tazerEffects "true" | Realistic and progressive effect to the tazer | string | |
| plouffe_weapons:antiAimBoost | set plouffe_weapons:antiAimBoost "true" | stop player from being able to 'aimboost' | string | 3 |
| plouffe_weapons:useWeaponsOnBack | set plouffe_weapons:useWeaponsOnBack "true" | string | 4 |
| plouffe_weapons:gsr | set plouffe_weapons:gsr "true" | Use items or go in water to wash your gsr | string | |
| plouffe_weapons:clean_gsr_items | set plouffe_weapons:clean_gsr_items ["gsr_purel"] | Items people can use to wash gsr | json string[] | |
| plouffe_weapons:tazer_ammo_items | set plouffe_weapons:tazer_ammo_items ["tazer_clip:1"] | Items that can be used to recharge tazer | item_name:ammo_value | 5 |

# Notes
- 1 
    - Will force headshots to work even for people wearing helmets
    - Makes it so people dont run everywhere with fucking helmets in rp
    - Makes it obvious when people are using cheats like no headshot

- 2 
    - Will remove the default crosshair and replace it with a small white dot that dosent show red when over a target
    - Will also force people to disable 'On kill' effects so their screen dosent 'Flash' when killing someone
    - Once again usefull for rp
- 3 
    - For thoses you who dont know when crouched or in certain condition you can spamm your aim and sprint button to boost your movement. Frequently known as A-D spamm.

- 4 
    - Add weapons on back
    - Supports custom position for any specific weapons and specific groups (Ex: polices can have SMG on chest while other jobs have it on back)
    - Supoorts modular and addon weapons 
    - Supports active attachements (Qb and Ox (you need my branch of ox to have this functionnality has my pr was refused on ox_inventory) i'll try to figure something to do a work around after the release)
    - When i refer to active attachements i mean that if you have a weapon with an attachement on it you will also see it on your weapon when its on your back so if lets say silencers are illegal in your server you can see  people with them. (not the best example i know)
    - Preconfigured for ESX, QbCore and Ox_core

- 5
    - Setting this will enable the tazer clips, if you dont set this it wont work.
# Example config 

```
set plouffe_weapons:removeDrops "true"
set plouffe_weapons:forceHeadshot "true"
set plouffe_weapons:customCrosshair "true"
set plouffe_weapons:tazerEffects "true"
set plouffe_weapons:useWeaponsOnBack "true"
set plouffe_weapons:antiAimBoost "true"
set plouffe_weapons:gsr "true"
set plouffe_weapons:clean_gsr_items ["gsr_purel"]
set plouffe_weapons:tazer_ammo_items ["tazer_clip:1"]

```

# Important

- All the convars needs to be set for the script to work