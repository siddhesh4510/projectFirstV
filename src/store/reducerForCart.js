export const initialState = {
    cart: [],
    user: null,
    total:0
  };
  
  export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => parseInt(item.price) + parseInt(amount), 0);
  
const reducer = (state=initialState, action) => {
    console.log(action);
    switch (action.type) {
      case "ADDED_TO_CART":
        console.log("IN added to cart");
        return {
          /* Here '...' is a 'Spread Operator' and is used to prevent the previous state from being lost .. 
            Its main use is while adding new products to the cart with the already exisiting products in the cart..
          */
          ...state,
          cart: [...state.cart, action.item],
        };
  
      case "EMPTY_CART":
        return {
          ...state,
          cart: [],
        };
  
      case "REMOVED_FROM_CART":
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
  
        const addedCart = [...state.cart];
  
        if (index >= 0) {
          addedCart.splice(index, 1);
        } else {
          console.warn(
            "Cannot remove the product (id: ${action:id}) as it is not available in the cart."
          );
        }
  
        return {
          ...state,
          cart: addedCart,
        };
  
      case "ADD_USER":
        return {
          ...state,
          user: action.user,
        };

      case "GET_TOTAL":
        console.log("In get Total");
        return{ 
          ...state,
          total:getCartTotal(state.cart)
        };
  
      // case "MAKE_PAYMENT":
      //   return;
  
      default:
        return state;
    }
  };
  
  export default reducer;
  