import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import thunk from "redux-thunk";
  
  import { composeWithDevTools } from "redux-devtools-extension";
  
  import { deleteProductReducer, deleteReviewReducer, newProductReducer, newReviewReducer, productDetailsReducer, productreducer, productReviewsReducer } from "./reducers/productReducer";
  import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
  import { cartReducer } from "./reducers/CartReducer";
  import { favouriteReducer } from "./reducers/FavouriteReducer";
  import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/OrderReducer";
  
  
  const reducer = combineReducers({
    products: productreducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    order: newOrderReducer,
    myOrder: myOrdersReducer,
    myOrderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    createProduct: newProductReducer,
    deleteProduct: deleteProductReducer,
    AllOrders: allOrdersReducer,
    deleteOrder: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    deleteReview: deleteReviewReducer,
    productReviews: productReviewsReducer,
    forgotPassword: forgotPasswordReducer,
  });
  
  let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
  
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
    favourite: {
      favouriteItems: localStorage.getItem("favouriteItems")
        ? JSON.parse(localStorage.getItem("favouriteItems"))
        : [],
    },
  };
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
  
    initialState,
  
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;
  