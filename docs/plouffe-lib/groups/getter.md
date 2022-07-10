---
sidebar_position: 2
---

# Groups Getter

- Checking if the player has a group
    - Using exports 
        - ```exports.plouffe_lib:hasGroup(group, subgroup)```
    - Using LocalPlayer state bag
        - Lets search for job police and grade 3
        ```
            if LocalPlayer.state.groups.job.group == "police" and LocalPlayer.state.groups.job.subgroup == 3 then
                return true
            end
        ```
        