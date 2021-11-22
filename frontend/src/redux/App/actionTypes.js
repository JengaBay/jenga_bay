// STEP 1
//user action types
export const GET_USERS ="GET_USERS";
export const LOGIN_USER ="LOGIN_USER";
export const SET_IS_AUTHENTICATED ="SET_IS_AUTHENTICATED";
export const PASSWORD_RESET ="PASSWORD_RESET";
export const PASSWORD_RESET_CONFIRM ="PASSWORD_RESET_CONFIRM";

//client action types
export const REGISTER_CLIENT ="REGISTER_CLIENT";

//product action types
export const GET_PRODUCTS ="GET_PRODUCTS";
export const GET_PRODUCT_DETAILS =  "GET_PRODUCT_DETAILS"
export const GET_PRODUCTS_IN_SPECIFIC_CATEGORY = "GET_PRODUCTS_IN_SPECIFIC_CATEGORY"
export const SEARCH_PRODUCTS ="SEARCH_PRODUCTS";

//seller action types
export const GET_ALL_SELLERS = "GET_ALL_SELLERS"
export const GET_SELLER_DETAILS = "GET_SELLER_DETAILS"
export const GET_SELLER_PROFILE = "GET_SELLER_PROFILE"
export const GET_SELLER_ITEMS = "GET_SELLER_ITEMS"
export const SEARCH_SELLER_PRODUCTS="SEARCH_SELLER_PRODUCTS";
export const GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY = "GET_SELLER_PRODUCTS_IN_SPECIFIC_CATEGORY"

//cart action types
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY"
export const CLEAR_CART = "UPDATE_PRODUCT_QUANTITY"
export const BUY_PRODUCTS_NOW = "BUY_PRODUCTS_NOW"
export const GET_CART_TOTALS = "GET_CART_TOTALS"
