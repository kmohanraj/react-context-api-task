import { userActionMode } from './users/userActionMode';
import { isAddUserButtonClicked } from './users/isAddUserButtonClicked';
import { usersData } from './users/usersData';
import { selectedUserForEdit } from './users/selectedUserForEdit';
import initialState from "../initialState";

const reducer = (state = initialState, action: any) => {
  return{
    isAddUserButtonClicked: isAddUserButtonClicked(state.isAddUserButtonClicked, action),
    usersData: usersData(state.usersData, action ),
    selectedUserForEdit: selectedUserForEdit(state.selectedUserForEdit, action),
    userActionMode: userActionMode(state.userActionMode, action)
  }
}

export default reducer;