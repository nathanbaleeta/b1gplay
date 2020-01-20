import { combineReducers } from "redux";

import auth from "./auth";
import wizard from "./wizard";

export default combineReducers({ auth, wizard });
