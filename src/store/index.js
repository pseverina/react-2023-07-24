import { createStore } from "../custome-redux";

const defaultState = {};

const rootReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case "increment":
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
