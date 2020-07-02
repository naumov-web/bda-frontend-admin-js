// Redux methods
import { 
  createSetIsLoadingAction,
  createSetUserAction,
  createSetSuccessMessageAction
} from '../store/profile/actionCreators';

// API methods
import { getProfile, updateProfile } from '../utils/apis/profile.api';

// Configs
import { successMessages } from '../config/messages';

export const load = async ({ dispatch }) => {
  dispatch(createSetSuccessMessageAction(null));
  dispatch(createSetIsLoadingAction(true));
  try {
    const data = await getProfile();
    dispatch(createSetUserAction(data));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};

export const update = async (payload, { dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  try {
    await updateProfile(payload);
    dispatch(createSetSuccessMessageAction(successMessages.profileSaveSuccess));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
}