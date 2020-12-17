import { IProductsInitialState } from "../store/reducers/products-reducer";

interface IRootState {
  products: IProductsInitialState;
}

export type { IRootState };
