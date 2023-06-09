import { actionType } from '../action/userAction';

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionType.USER_REQUEST:
      return {
        ...state,
        isUserLoader: action.payload
      }
    case actionType.USER_RESPONSE_SUCCESS:
      return {
        ...state,
        isUserLoader: false,
        userList: action.data.users
      }
    case actionType.USER_RESPONSE_FAILURE:
      return {
        ...state,
        isUserLoader: false,
        error: action.data
      }
    default:
      return { ...state }
  }
}