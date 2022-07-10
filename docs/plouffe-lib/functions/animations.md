---
sidebar_position: 1
---

# Animations

- Importing Utils
```lua
  local Utils = exports.plouffe_lib:Get("Utils")
```

- Stoping a forced anim
```lua
  Utils:StopAnim()
```

- Starting an animation
```lua
  time : number 
  dict : string 
  anim : string 
  flag : number
  entry : float
  exit : float
  duration : number
  loop : boolean -- if the animation should be force looped
  unarm : boolean
  disableInputs : boolean -- if so 30,31,36,21 will be disabled
  prop : table -- conaining model, bonne, off1, off2, off3, rot1, rot2, rot3
  fx : table -- not used currently
  params : table conaining target ped

  Utils:PlayAnim(time,dict,anim,flag,entry,exit,duration,loop,unarm,disableInputs,prop,fx,params)
```