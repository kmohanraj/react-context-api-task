import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import userService from "../../service/user.service";
import CONSTANTS from "../../constants/constants";
import { IUserData } from '../../interface/components.interface';
import iziToast from "izitoast";

const useAddUser = (): [
  any,
  (event: any) => void,
  (event: any, selectField: string) => void,
  (event: any) => void
] => {
  const { dispatch, state } = useContext(AppContext)
  const initialState = {
    user: '',
    email: '',
    gender: '',
    status: ''
  };

  const [userData, setUserData] = useState(
    state.userActionMode === 'update' ? state.selectedUserForEdit : initialState
  );

  const handleOnChange = (event: any) => {
    setUserData({ ...userData, [event?.target.name]: event?.target.value})
  };

  const handleOnSelect = (event: any, selectField: string) => {
    setUserData({ ...userData, [selectField]: event?.value})
  };

  const handleOnSubmit = () => {
    if(state.userActionMode === 'create') {
      createUser(userData);
    } else {
      updateUser(userData);
    }
    dispatch({
      type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
      payload: false
    });
  };

  const createUser = async (userData: IUserData) => {
    const response: any = await userService.create(userData)
    if(response.status === '200') {
      dispatch({
        type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
        payload: false
      });
      iziToast.success({
        title: 'Success',
        message: 'User created successfully'
      })
    }
    return response;
  };

  const updateUser = async (userData: IUserData) => {
    const response: any = await userService.update(userData)
    if(response.status === '200') {
      dispatch({
        type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
        payload: false
      })
      iziToast.success({
        title: 'Success',
        message: 'User up-dated successfully'
      })
    }
  }

  return [userData, handleOnChange, handleOnSelect, handleOnSubmit]
}

export default useAddUser;