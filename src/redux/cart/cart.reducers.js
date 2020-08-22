import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types"
import { addItemTocart } from "./cart.utils"

const initialState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
          hidden: !state.hidden
        }
    case ADD_ITEM:
      return {
        ...state,
          cartItems: addItemTocart(state.cartItems, action.payload)
        }
    default:
      return state
  }
}

export default cartReducer