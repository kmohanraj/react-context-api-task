import { IUserData } from "../../../interface/components.interface";
import CONSTANTS from "../../../constants/constants";

export const selectedUserForEdit = (state: boolean, action: {type: string; payload: IUserData[]}) => {
  switch(action.type) {
    case CONSTANTS.REDUCER_TYPE.USERS.SELECTED_USER_FOR_EDIT:
      return action.payload;
    default:
      return state;
  }
};