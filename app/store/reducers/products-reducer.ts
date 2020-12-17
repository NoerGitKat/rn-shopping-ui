import PRODUCTS from "../../../data";

interface IProduct {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

interface IInitialState {
  availableProducts: IProduct[];
  userProducts: IProduct[];
}

const initialState: IInitialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

const productsReducer = (state = initialState, action: any) => {
  return state;
};

export default productsReducer;
