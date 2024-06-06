import { createStore } from 'redux';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: action.payload, // Ensure action.payload is an array of products
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              description: action.payload.description,
              rating: action.payload.rating,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};


const store = createStore(productsReducer);

// Subscribe to the store to log the state changes
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

export default store;
