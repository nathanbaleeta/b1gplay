import { UPDATE_FIELD, UPDATE_PLAYER_FIELDS, CLEAR_FIELDS } from "../constants/ActionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case UPDATE_PLAYER_FIELDS:
      return {
        ...state,
        affiliation: null,
        [action.field]: action.value
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        weight: null,
        height: null,
        position: null,
        verticalLeap: null,
        wingspan: null,
        time40m: null,
        time100m: null,
        clubLocation: null,
        [action.field]: action.value
      };

    default:
      return { ...state };
  }
}
