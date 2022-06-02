import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import userService from '../../service/user.service';
import CONSTANTS from '../../constants/constants';

const useGetUsers = (): [boolean, () => void] => {

  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [deleteFlag, setDeleteFlag] = useState(false)

  useEffect(() => {
    userService.getUsers().then((data: any) => {
      dispatch({
        type: CONSTANTS.REDUCER_TYPE.USERS.USER_DATA,
        payload: data
      })
      setLoading(false)
    }).catch(() => {
      setLoading(true)
    })
  }, [deleteFlag]);
  const deleteFlagModifier = () => setDeleteFlag((prev) => !prev);
  return [loading, deleteFlagModifier]

};

export default useGetUsers;