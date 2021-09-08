import { REGISTER_USER } from "./actionTypes";

const initial_State = {
  userInfo: null,
  errors: null,
  loading: null,
};

const register = (state = initial_State, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, userInfo: null };

    default:
      return { ...state };
  }
};

export default register;
