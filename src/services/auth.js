// Redux methods
import { 
  createSetIsLoadingAction, 
  createSetErrorMessagesAction, 
  createSetIsLoggedAction 
} from '../store/auth/actionCreators';
// API methods
import { postLogin } from '../utils/apis/auth.api';
// Utils methods
import { setToken, removeToken } from '../utils/localStorage/token';
// Configs
import { errorMessages } from '../config/messages';

export const login = async (payload, { dispatch, history }) => {
  dispatch(createSetIsLoadingAction(true));
  try {
    dispatch(createSetErrorMessagesAction({}));
    const data = await postLogin(payload);
    setToken(data.token);
    dispatch(createSetIsLoggedAction(true));
    history.push('/profile');
  } catch (e) {
    dispatch(createSetErrorMessagesAction(
      {
        email: errorMessages.incorrectEmailOrPassword
      }
    ));
  }

  dispatch(createSetIsLoadingAction(false));
}

export const logout = ({ dispatch }) => {
  removeToken();
  dispatch(createSetIsLoggedAction(false));
}