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
        affiliation: "",
        mediaHouse: "",
        weight: "",
        height: "",
        position: "",
        verticalLeap: "",
        wingspan: "",
        time40m: "",
        time100m: "",
        club: "",
        clubLocation: "",
        [action.field]: action.value
      };
    case UPDATE_PLAYER_FIELDS:
      return {
        ...state,
        affiliation: "",
        mediaHouse: "",
        [action.field]: action.value
      };
    case UPDATE_MEDIA_FIELDS:
      return {
        ...state,
        affiliation: "",
        weight: "",
        height: "",
        position: "",
        verticalLeap: "",
        wingspan: "",
        time40m: "",
        time100m: "",
        club: "",
        clubLocation: "",
        [action.field]: action.value
      };
    case UPDATE_FAN_FIELDS:
      return {
        ...state,
        affiliation: "",
        mediaHouse: "",
        weight: "",
        height: "",
        position: "",
        verticalLeap: "",
        wingspan: "",
        time40m: "",
        time100m: "",
        club: "",
        clubLocation: "",
        [action.field]: action.value
      };
    case UPDATE_AGENT_FIELDS:
      return {
        ...state,
        affiliation: "",
        mediaHouse: "",
        weight: "",
        height: "",
        position: "",
        verticalLeap: "",
        wingspan: "",
        time40m: "",
        time100m: "",
        club: "",
        clubLocation: "",
        [action.field]: action.value
      };
    case CLEAR_FIELDS:
      localStorage.removeItem("password");
      localStorage.removeItem("password2");
      return {
        ...state,
        firstname: "",
        lastname: "",
        gender: "",
        dob: "",
        countryOfOrigin: "",

        email: "",

        affiliation: "",
        mediaHouse: "",

        weight: "",
        height: "",
        position: "",
        verticalLeap: "",
        wingspan: "",
        time40m: "",
        time100m: "",
        club: "",
        clubLocation: ""
      };

    default:
      return { ...state };
  }
}
