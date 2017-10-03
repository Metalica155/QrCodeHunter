import * as Actions from './actions';

export default (state = { hit: 0 }, action) => {
  const { type } = action;
  switch (type) {
    case Actions.DEMO:
      return { ...state, hit: 1 };
    default:
      return state;
  }
};
