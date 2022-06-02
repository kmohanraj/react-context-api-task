import { IUserMode } from './../../../interface/reducers.interface';
import CONSTANTS from "../../../constants/constants";

export const userActionMode = (state: IUserMode, action: {type: string; payload: IUserMode}) => {
  switch(action.type) {
    case CONSTANTS.REDUCER_TYPE.USERS.USER_ACTION_MODE:
      return action.payload;
    default:
      return state;
  }
};