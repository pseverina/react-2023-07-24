class Store {
  state = {};
  reducer;

  subscribers = new Map();

  constructor(reducer) {
    this.reducer = reducer;
    this.reducer();
  }

  subscribe(callback) {
    this.subscribers.set(callback, callback);
    callback(this.state);
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }

  sendChanges() {
    [...this.subscribers.values()].forEach((callback) => {
      callback(this.state);
    });
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.sendChanges();
  }
}

export const createStore = (() => {
  let currentStore;

  return (reducer) => {
    if (!currentStore) {
      currentStore = new Store(reducer);
    }

    return currentStore;
  };
})();
