import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetIsLoadingAction,
  createSetProductsAction,
  createSetPaginationAction
} from '../store/products/actionCreators';

// API methods
import { getProducts } from '../utils/apis/products.api';

export const load = async (params, { dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  dispatch(createSetPaginationAction(camelcaseKeys(params)));
  try {
    const data = await getProducts(params);
    dispatch(createSetProductsAction(data.items, data.count));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};