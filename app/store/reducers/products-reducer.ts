import PRODUCTS from "../../../data";

export interface IProduct {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface IProductsInitialState {
  availableProducts: IProduct[];
  userProducts: IProduct[];
}

const initialState: IProductsInitialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

const productsReducer = (state = initialState, action: any) => {
  return state;
};

export default productsReducer;
