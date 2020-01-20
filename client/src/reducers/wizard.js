import {
  UPDATE_FIELD,
  UPDATE_COACH_FIELDS,
  UPDATE_PLAYER_FIELDS,
  UPDATE_MEDIA_FIELDS,
  UPDATE_FAN_FIELDS,
  UPDATE_AGENT_FIELDS,
  CLEAR_FIELDS
} from "../constants/ActionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case UPDATE_COACH_FIELDS:
      return {
        ...state,
        affiliation: null,
        mediaHouse: null,
        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        club: null,
        clubLocation: null,
        [action.field]: action.value
      };
    case UPDATE_PLAYER_FIELDS:
      return {
        ...state,
        affiliation: null,
        mediaHouse: null,
        [action.field]: action.value
      };
    case UPDATE_MEDIA_FIELDS:
      return {
        ...state,
        affiliation: null,
        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        club: null,
        clubLocation: null,
        [action.field]: action.value
      };
    case UPDATE_FAN_FIELDS:
      return {
        ...state,
        affiliation: null,
        mediaHouse: null,
        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        club: null,
        clubLocation: null,
        [action.field]: action.value
      };
    case UPDATE_AGENT_FIELDS:
      return {
        ...state,
        affiliation: null,
        mediaHouse: null,
        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        club: null,
        clubLocation: null,
        [action.field]: action.value
      };
    case CLEAR_FIELDS:
      localStorage.removeItem("password");
      localStorage.removeItem("password2");
      return {
        ...state,
        firstname: null,
        lastname: null,
        gender: null,
        dob: null,
        countryOfOrigin: null,

        email: null,

        affiliation: null,
        mediaHouse: null,

        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        club: null,
        clubLocation: null
      };

    default:
      return { ...state };
  }
}
