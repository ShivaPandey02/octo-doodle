import { Credentials } from '../actions/userActions';

interface UserState {
  credentials: Credentials | null;
}

const initialState: UserState = {
  credentials: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER_CREDENTIALS':
      return {
        ...state,
        credentials: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
