import CONSTANTS from "../../../constants/constants";
import { IUserData } from "../../../interface/components.interface";

export const usersData = (state: any, action: { type: string; payload: IUserData[] }) => {
  switch (action.type) {
    case CONSTANTS.REDUCER_TYPE.USERS.USER_DATA:
      return action.payload;
    
    default:
      return state;
  }
};