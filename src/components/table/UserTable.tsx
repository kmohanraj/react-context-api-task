import React, { Suspense, useContext } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Loader from "../Loader";
import useGetUsers from "../../hook/user/useGetUsers";
import { AppContext } from "../../context/AppContext";
import CONSTANTS from "../../constants/constants";
import userService from "../../service/user.service";
import iziToast from "izitoast";

const UserTable = () => {
  const [loading, deleteFlagModifier] = useGetUsers();
  const {dispatch, state } = useContext(AppContext);

  const columns = [
    {
      name: 'Name',
      selector: (row: any) => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row: any) => row.email
    },
    {
      name: 'Gender',
      selector: (row: any) => row.gender
    },
    {
      name: 'Status',
      selector: (row: any) => row.status
    },
    {
      width: '120px',
      cell: (cell: any) => (
        <Button onClick={() => {
          dispatch({
            type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
            payload: true
          });
          dispatch({
            type: CONSTANTS.REDUCER_TYPE.USERS.SELECTED_USER_FOR_EDIT,
            payload: state.usersData.filter((ele: any) => ele.id === cell.id)[0]
          });
          dispatch({
            type: CONSTANTS.REDUCER_TYPE.USERS.USER_ACTION_MODE,
            payload: 'update'
          });
        }}>Edit</Button>
      )
    },
    {
      width: '130px',
      cell: (cell: any) => (
        <Button onClick={() => deleteUser(cell.id)}>Delete</Button>
      )
    }
  ]

  const deleteUser = async (userId: number) => {
    const response = await userService.delete(userId)
    if(response.status === '200'){
      deleteFlagModifier();
      iziToast.success({
        title: 'Success',
        message: 'User deleted successfully'
      });
    }
  }

  return(
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <DataTable  columns={columns} data={state.usersData} progressPending={loading} />
      </Suspense>
    </React.Fragment>
  )
}

export default UserTable;