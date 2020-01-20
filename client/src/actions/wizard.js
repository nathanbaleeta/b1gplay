import { UPDATE_FIELD, UPDATE_PLAYER_FIELDS, CLEAR_FIELDS } from "../constants/ActionTypes";

// UPDATE FIELD
export const updateField = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD,
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

// CLEAR FIELDS
export const clearFields = (field, value) => dispatch => {
  dispatch({
    type: CLEAR_FIELDS,
    field,
    value
  });
};


