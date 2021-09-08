import { combineReducers } from "redux";

import register from "./authReducer/register/reducer";

const rootReducer = combineReducers({
  register,
});

export default rootReducer;
