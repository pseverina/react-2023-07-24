import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { DISH_ACTION } from "./action";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: LOADING_STATUS.idle,
};

export const dishReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case DISH_ACTION.startLoading: {
      return {
        ...state,
        status: LOADING_STATUS.loading,
      };
    }
    case DISH_ACTION.finishLoading: {
      return {
        entities: payload.reduce(
          (acc, dish) => {
            acc[dish.id] = dish;

            return acc;
          },
          { ...state.entities }
        ),
        ids: Array.from(
          new Set([...payload.map(({ id }) => id), ...state.ids])
        ),
        status: LOADING_STATUS.finished,
      };
    }
    case DISH_ACTION.failLoading: {
      return {
        ...state,
        status: LOADING_STATUS.failed,
      };
    }
    default:
      return state;
  }
};
