import React, { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { AppContext } from "../context/AppContext";
import useAddUser from "../hook/user/useAddUser";
import CONSTANTS from "../constants/constants";

const AddUser = () => {
  const { dispatch, state } = useContext(AppContext)
  const [userData, handleOnChange,handleOnSelect, handleOnSubmit] = useAddUser();
  const genderOptionsData = [
    { value: 'male', label: 'male'},
    { value: 'female', label: 'female'}
  ]

  const checkCurrentOption = (options: any, value: string) => {
    if(state.userActionMode === 'update') {
      return options.filter((option: any) => option.value === value)
    }
  }

  return(
    <div className="pt-2">
      <h4 className="mb-2">{state.userActionMode === 'create' ? 'Add User' : 'Update User'}</h4>
      <Form className="pl-4">
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleOnChange}
              placeholder="Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="text"
              name="email"
              value={userData.email}
              onChange={handleOnChange}
              placeholder="Email Address" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Select
              name="gender"
              placeholder="Select Gender"
              value={checkCurrentOption(genderOptionsData, userData.gender)}
              onChange={(e) => handleOnSelect(e, 'gender')}
              options={genderOptionsData} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Label>Gender</Form.Label>
          <Form.Group>
            <Form.Check 
              inline
              type="radio"
              label="Active"
              name="status"
              value='active'
              checked={userData.status === 'active'}
              onChange={handleOnChange}
            />
            <Form.Check 
              inline
              type="radio"
              label="Inactive"
              name="status"
              value="inactive"
              checked={userData.status === 'inactive'}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Row}>
          <Col className="d-flex justify-content-center mt-5">
            <Button className="m-2" onClick={handleOnSubmit}>
              {state.userActionMode === 'create' ? 'create' : 'update'}
            </Button>
            <Button className="m-2" onClick={() => {
              dispatch({
                type: CONSTANTS.REDUCER_TYPE.USERS.IS_ADD_USER_BUTTON_CLICKED,
                payload: false
              })
            }}>
              Back
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddUser;