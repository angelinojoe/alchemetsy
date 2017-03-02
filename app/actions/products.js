// Products
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const getProducts = (products) => ({ type: GET_PRODUCTS, receivedProducts: products});
export const getProduct = (product) => ({ type: GET_PRODUCT, receivedProduct: product});
export const createProduct = (product) => ({ type: CREATE_PRODUCT, productToCreate: product});
export const updateProduct = (product) => ({ type: UPDATE_PRODUCT, productToUpdate: product});

