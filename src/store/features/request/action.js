export const REQUEST_ACTION = {
  start: "request/start",
  finish: "request/finish",
  fail: "request/fail",
};

export const startRequest = (requestId) => ({
  type: REQUEST_ACTION.start,
  payload: { requestId },
});

export const finishRequest = (requestId) => ({
  type: REQUEST_ACTION.finish,
  payload: { requestId },
});

export const failRequest = (requestId, error) => ({
  type: REQUEST_ACTION.fail,
  payload: { requestId, error },
});
