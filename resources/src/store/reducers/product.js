const INITIAL_STATE = {
  product: {},
  checkout: {},
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return {
        ...state,
        product: action.payload.data,
      };
    default:
      return state;
  }
}
