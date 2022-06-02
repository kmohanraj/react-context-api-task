import { IUserMode } from '../interface/reducers.interface';
import { IUserData } from './../interface/components.interface';
// Users
const isAddUserButtonClicked: boolean = false;
const usersData: IUserData | [] = [];
const selectedUserForEdit: any = {};
const userActionMode: IUserMode = 'create';

export default {
    isAddUserButtonClicked,
    usersData,
    selectedUserForEdit,
    userActionMode
}