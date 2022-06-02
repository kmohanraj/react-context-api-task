import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import CONSTANTS from '../constants/constants';
import AddUser from './AddUser';
import UserTable from '../components/table/UserTable';

const Users = () => {
  const {dispatch, state } = useContext(AppContext);

  return(
    <React.Fragment>
      <Container fluid>
        {!state.isAddUserButtonClicked ? (
          <>
           <div className='py-2 d-flex justify-content-between'>
             <h5>Users </h5>
            <Button onClick={() => {
              dispatch({
                type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
                payload: true
              })
              dispatch({
                type: CONSTANTS.REDUCER_TYPE.USERS.USER_ACTION_MODE,
                payload: 'create'
              });
            }}>Add User</Button>
            </div>
          <UserTable />
          </>
         ): <AddUser />}
      </Container>
    </React.Fragment>
  )
}

export default Users;