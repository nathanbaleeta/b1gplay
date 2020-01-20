import {
  CLEAR_FIELDS,
  UPDATE_FIELD,
  UPDATE_COACH_FIELDS,
  UPDATE_PLAYER_FIELDS,
  UPDATE_MEDIA_FIELDS
} from "../constants/ActionTypes";

// CLEAR FIELDS
export const clearFields = () => dispatch => {
  dispatch({
    type: CLEAR_FIELDS
  });
};

// UPDATE FIELD
export const updateField = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD,
    field,
    value
  });
};

// UPDATE COACH FIELDS
export const updateCoachFields = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_COACH_FIELDS,
    field,
    value
  });
};

// UPDATE PLAYER FIELDS
export const updatePlayerFields = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_PLAYER_FIELDS,
    field,
    value
  });
};

// UPDATE MEDIA FIELDS
export const updateMediaFields = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_MEDIA_FIELDS,
    field,
    value
  });
};

// UPDATE FAN FIELDS
export const updateFanFields = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_MEDIA_FIELDS,
    field,
    value
  });
};

// UPDATE AGENT FIELDS
export const updateAgentFields = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_MEDIA_FIELDS,
    field,
    value
  });
};


