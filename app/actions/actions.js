//ACTION TYPES & ACTION CREATORS

// Users
export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUsers = (users) => ({ type: GET_USERS, receivedUsers: users});
export const createUser = (user) => ({ type: CREATE_USER, userToCreate: user});
export const deleteUser = (user) => ({ type: DELETE_USER, userToDelete: user});
export const updateUser = (user) => ({ type: UPDATE_USER, userToUpdate: user});

// Auth Users
export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getUser = (user) => ({ type: GET_USER, receivedUser: user});
export const setUser = (user) => ({ type: SET_USER, userToSet: user});

// Cart
export const GET_CART = 'GET_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const getCart = (cart) => ({ type: GET_CART, receivedCart: cart});
export const updateCart = (cart) => ({ type: UPDATE_CART, cartToUpdate: cart});
