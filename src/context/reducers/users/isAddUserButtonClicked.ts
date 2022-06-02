import CONSTANTS from "../../../constants/constants"

export const isAddUserButtonClicked = (state: boolean,action: {type: string, payload: boolean}) => {
  switch (action.type) {
    case CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED:
      return action.payload
    default:
      return state;
  }
};