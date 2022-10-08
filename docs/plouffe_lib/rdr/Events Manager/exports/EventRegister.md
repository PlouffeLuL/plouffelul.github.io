---
sidebar_position: 1
---

# EventRegister

This is used to catch one of the game events like ``EVENT_ENTITY_DAMAGED``
Has long as the event has not been registered it wont be emited.

- Registering the event
  ```
  exports.plouffe_lib:EventRegister("EVENT_ENTITY_DAMAGED")
  ```

- Removing the event
  ```
  exports.plouffe_lib:EventRemove("EVENT_ENTITY_DAMAGED")
  ```
  - __If the event has been registered 5 times it needs to be removed 5 times.__

- Event name to catch this event
  ```
  plouffe_lib:EVENT_ENTITY_DAMAGED
  ```

- Structure
  ```
  Situational to the event your are registering you should know this before using this.
  ```

- Example
  ```lua
  AddEventHandler("plouffe_lib:EVENT_ENTITY_DAMAGED", function(data)
    print("EVENT_ENTITY_DAMAGED", json.encode(data, {indent = true}))
  end)
  ```

- List of the games events
  ```
  	Events = {
		{name = 'EVENT_BUCKED_OFF', group = 0, size = 3},
		{name = 'EVENT_CALCULATE_LOOT', group = 0, size = 26},
		{name = 'EVENT_CALM_PED', group = 0, size = 4},
		{name = 'EVENT_CARRIABLE_UPDATE_CARRY_STATE', group = 0, size = 5},
		{name = 'EVENT_CARRIABLE_PROMPT_INFO_REQUEST', group = 0, size = 6},
		{name = 'EVENT_CARRIABLE_VEHICLE_STOW_START', group = 0, size = 5},
		{name = 'EVENT_CARRIABLE_VEHICLE_STOW_COMPLETE', group = 0, size = 3},
		{name = 'EVENT_CHALLENGE_GOAL_COMPLETE', group = 0, size = 1},
		{name = 'EVENT_CHALLENGE_GOAL_UPDATE', group = 0, size = 1},
		{name = 'EVENT_CHALLENGE_REWARD', group = 0, size = 3},
		{name = 'EVENT_CONTAINER_INTERACTION', group = 0, size = 4},
		{name = 'EVENT_CRIME_CONFIRMED', group = 0, size = 3},
		{name = 'EVENT_DAILY_CHALLENGE_STREAK_COMPLETED', group = 0, size = 1},
		{name = 'EVENT_ENTITY_BROKEN', group = 0, size = 9},
		{name = 'EVENT_ENTITY_DAMAGED', group = 0, size = 9},
		{name = 'EVENT_ENTITY_DESTROYED', group = 0, size = 9},
		{name = 'EVENT_ENTITY_DISARMED', group = 0, size = 4},
		{name = 'EVENT_ENTITY_EXPLOSION', group = 0, size = 6},
		{name = 'EVENT_ENTITY_HOGTIED', group = 0, size = 3},
		{name = 'EVENT_HEADSHOT_BLOCKED_BY_HAT', group = 0, size = 2},
		{name = 'EVENT_HELP_TEXT_REQUEST', group = 0, size = 4},
		{name = 'EVENT_HITCH_ANIMAL', group = 0, size = 4},
		{name = 'EVENT_HOGTIED_ENTITY_PICKED_UP', group = 0, size = 2},
		{name = 'EVENT_HORSE_BROKEN', group = 0, size = 3},
		{name = 'EVENT_IMPENDING_SAMPLE_PROMPT', group = 0, size = 2},
		{name = 'EVENT_INVENTORY_ITEM_PICKED_UP', group = 0, size = 5},
		{name = 'EVENT_INVENTORY_ITEM_REMOVED', group = 0, size = 1},
		{name = 'EVENT_ITEM_PROMPT_INFO_REQUEST', group = 0, size = 2},
		{name = 'EVENT_LOOT', group = 0, size = 36},
		{name = 'EVENT_LOOT_COMPLETE', group = 0, size = 3},
		{name = 'EVENT_LOOT_PLANT_START', group = 0, size = 36},
		{name = 'EVENT_LOOT_VALIDATION_FAIL', group = 0, size = 2},
		{name = 'EVENT_MISS_INTENDED_TARGET', group = 0, size = 3},
		{name = 'EVENT_MOUNT_OVERSPURRED', group = 0, size = 6},
		{name = 'EVENT_NETWORK_AWARD_CLAIMED', group = 1, size = 12},
		{name = 'EVENT_NETWORK_BOUNTY_REQUEST_COMPLETE', group = 1, size = 7},
		{name = 'EVENT_NETWORK_BULLET_IMPACTED_MULTIPLE_PEDS', group = 1, size = 4},
		{name = 'EVENT_NETWORK_CASHINVENTORY_TRANSACTION', group = 1, size = 6},
		{name = 'EVENT_NETWORK_CREW_CREATION', group = 1, size = 10},
		{name = 'EVENT_NETWORK_CREW_DISBANDED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_CREW_INVITE_RECEIVED', group = 1, size = 11},
		{name = 'EVENT_NETWORK_CREW_JOINED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_CREW_KICKED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_CREW_LEFT', group = 1, size = 2},
		{name = 'EVENT_NETWORK_CREW_RANK_CHANGE', group = 1, size = 7},
		{name = 'EVENT_NETWORK_DAMAGE_ENTITY', group = 1, size = 32},
		{name = 'EVENT_NETWORK_GANG', group = 1, size = 18},
		{name = 'EVENT_NETWORK_GANG_WAYPOINT_CHANGED', group = 1, size = 3},
		{name = 'EVENT_NETWORK_HOGTIE_BEGIN', group = 1, size = 2},
		{name = 'EVENT_NETWORK_HOGTIE_END', group = 1, size = 2},
		{name = 'EVENT_NETWORK_HUB_UPDATE', group = 1, size = 1},
		{name = 'EVENT_NETWORK_INCAPACITATED_ENTITY', group = 1, size = 4},
		{name = 'EVENT_NETWORK_LASSO_ATTACH', group = 1, size = 2},
		{name = 'EVENT_NETWORK_LASSO_DETACH', group = 1, size = 2},
		{name = 'EVENT_NETWORK_LOOT_CLAIMED', group = 1, size = 9},
		{name = 'EVENT_NETWORK_MINIGAME_REQUEST_COMPLETE', group = 1, size = 6},
		{name = 'EVENT_NETWORK_PED_DISARMED', group = 1, size = 3},
		{name = 'EVENT_NETWORK_PED_HAT_SHOT_OFF', group = 1, size = 3},
		{name = 'EVENT_NETWORK_PERMISSION_CHECK_RESULT', group = 1, size = 2},
		{name = 'EVENT_NETWORK_PICKUP_COLLECTION_FAILED', group = 1, size = 3},
		{name = 'EVENT_NETWORK_PICKUP_RESPAWNED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_PLAYER_COLLECTED_PICKUP', group = 1, size = 8},
		{name = 'EVENT_NETWORK_PLAYER_COLLECTED_PORTABLE_PICKUP', group = 1, size = 3},
		{name = 'EVENT_NETWORK_PLAYER_DROPPED_PORTABLE_PICKUP', group = 1, size = 3},
		{name = 'EVENT_NETWORK_PLAYER_JOIN_SCRIPT', group = 1, size = 41},
		{name = 'EVENT_NETWORK_PLAYER_LEFT_SCRIPT', group = 1, size = 41},
		{name = 'EVENT_NETWORK_PLAYER_JOIN_SESSION', group = 1, size = 10},
		{name = 'EVENT_NETWORK_PLAYER_LEFT_SESSION', group = 1, size = 10},
		{name = 'EVENT_NETWORK_PLAYER_MISSED_SHOT', group = 1, size = 9},
		{name = 'EVENT_NETWORK_POSSE_CREATED', group = 1, size = 10},
		{name = 'EVENT_NETWORK_POSSE_DATA_CHANGED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_POSSE_DISBANDED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_POSSE_EX_ADMIN_DISBANDED', group = 1, size = 9},
		{name = 'EVENT_NETWORK_POSSE_EX_INACTIVE_DISBANDED', group = 1, size = 10},
		{name = 'EVENT_NETWORK_POSSE_JOINED', group = 1, size = 2},
		{name = 'EVENT_NETWORK_POSSE_LEADER_SET_ACTIVE', group = 1, size = 23},
		{name = 'EVENT_NETWORK_POSSE_LEFT', group = 1, size = 1},
		{name = 'EVENT_NETWORK_POSSE_MEMBER_DISBANDED', group = 1, size = 23},
		{name = 'EVENT_NETWORK_POSSE_MEMBER_JOINED', group = 1, size = 23},
		{name = 'EVENT_NETWORK_POSSE_MEMBER_KICKED', group = 1, size = 23},
		{name = 'EVENT_NETWORK_POSSE_MEMBER_LEFT', group = 1, size = 23},
		{name = 'EVENT_NETWORK_POSSE_MEMBER_SET_ACTIVE', group = 1, size = 23},
		{name = 'EVENT_NETWORK_PROJECTILE_ATTACHED', group = 1, size = 6},
		{name = 'EVENT_NETWORK_PROJECTILE_NO_DAMAGE_IMPACT', group = 1, size = 2},
		{name = 'EVENT_NETWORK_REVIVED_ENTITY', group = 1, size = 2},
		{name = 'EVENT_NETWORK_SESSION_EVENT', group = 1, size = 10},
		{name = 'EVENT_NETWORK_SESSION_MERGE_END', group = 1, size = 1},
		{name = 'EVENT_NETWORK_SESSION_MERGE_START', group = 1, size = 1},
		{name = 'EVENT_NETWORK_VEHICLE_LOOTED', group = 1, size = 3},
		{name = 'EVENT_NETWORK_VEHICLE_UNDRIVABLE', group = 1, size = 3},
		{name = 'EVENT_OBJECT_INTERACTION', group = 0, size = 10},
		{name = 'EVENT_PED_ANIMAL_INTERACTION', group = 0, size = 3},
		{name = 'EVENT_PED_CREATED', group = 0, size = 1},
		{name = 'EVENT_PED_DESTROYED', group = 0, size = 1},
		{name = 'EVENT_PED_HAT_KNOCKED_OFF', group = 0, size = 2},
		{name = 'EVENT_PED_WHISTLE', group = 0, size = 2},
		{name = 'EVENT_PICKUP_CARRIABLE', group = 0, size = 4},
		{name = 'EVENT_PLACE_CARRIABLE_ONTO_PARENT', group = 0, size = 6},
		{name = 'EVENT_PLAYER_COLLECTED_AMBIENT_PICKUP', group = 0, size = 8},
		{name = 'EVENT_PLAYER_ESCALATED_PED', group = 0, size = 2},
		{name = 'EVENT_PLAYER_HAT_EQUIPPED', group = 0, size = 10},
		{name = 'EVENT_PLAYER_HAT_KNOCKED_OFF', group = 0, size = 5},
		{name = 'EVENT_PLAYER_HORSE_AGITATED_BY_ANIMAL', group = 0, size = 4},
		{name = 'EVENT_PLAYER_MOUNT_WILD_HORSE', group = 0, size = 1},
		{name = 'EVENT_PLAYER_PROMPT_TRIGGERED', group = 0, size = 10},
		{name = 'EVENT_RAN_OVER_PED', group = 0, size = 2},
		{name = 'EVENT_REVIVE_ENTITY', group = 0, size = 3},
		{name = 'EVENT_SCENARIO_ADD_PED', group = 2, size = 2},
		{name = 'EVENT_SCENARIO_DESTROY_PROP', group = 2, size = 2},
		{name = 'EVENT_SCENARIO_REMOVE_PED', group = 2, size = 2},
		{name = 'EVENT_SHOCKING_ITEM_STOLEN', group = 0, size = 3},
		{name = 'EVENT_SHOT_FIRED_BULLET_IMPACT', group = 0, size = 1},
		{name = 'EVENT_SHOT_FIRED_WHIZZED_BY', group = 0, size = 1},
		{name = 'EVENT_STAT_VALUE_CHANGED', group = 0, size = 2},
		{name = 'EVENT_TRIGGERED_ANIMAL_WRITHE', group = 0, size = 2},
		{name = 'EVENT_UI_ITEM_INSPECT_ACTIONED', group = 3, size = 6},
		{name = 'EVENT_UI_QUICK_ITEM_USED', group = 3, size = 6},
		{name = 'EVENT_VEHICLE_CREATED', group = 0, size = 1},
		{name = 'EVENT_VEHICLE_DESTROYED', group = 0, size = 1}
	}
  ```
    - __Any other event wont be registered by the script.__