import {createSlice} from "@reduxjs/toolkit";


export const slice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers: {
        addItemToCart: (state, action) => {
            const pseudoID = (new Date()).getTime();

            state.cartItems.push({
                id: pseudoID,
                name:action.payload.item.name,
                img:action.payload.item.img,
                productID: action.payload.item.id,
                quantity: action.payload.quantity,
                price: action.payload.item.price,
                totalPrice: action.payload.quantity * action.payload.item.price
            });
        },
        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            state.cartItems[itemIndex].quantity += 1;
            state.cartItems[itemIndex].totalPrice += state.cartItems[itemIndex].price;

        },
        increaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                state.cartItems[itemIndex].totalPrice -= state.cartItems[itemIndex].price;
            }
            else if (state.cartItems[itemIndex].quantity === 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== state.cartItems[itemIndex].id);
            }
        },
        resetCart:(state)=>{
            state.cartItems=[];
        }
    }
})
export const getCartItems = state => state.cart.cartItems;

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0);
}



export const { addItemToCart, removeFromCart, decreaseCart, increaseCart,resetCart } = slice.actions;
export default slice.reducer;