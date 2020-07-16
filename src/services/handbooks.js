// Redux methods
import { createSetProductPrioritiesAction } from '../store/handbooks/actionCreators';
// API methods
import { getAllHandbooks } from '../utils/apis/handbooks.api';

export const load = async ({ dispatch }) => {
  try {
    const data = await getAllHandbooks();
    dispatch(createSetProductPrioritiesAction(data.product_priorities));
  } catch (e) {
  }
};