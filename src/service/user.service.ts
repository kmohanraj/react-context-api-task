import axios from "./config";

class UserService {
  async getUsers() {
    try{
      return (await axios.get('/users')).data;
    } catch(err: any) {
      return err.response;
    }
  }

  async create(data: any) {
    try{
      return await axios({
        url: '/users',
        method: 'POST',
        data: data
      });
    } catch (error: any) {
      return error?.response
    }
  }

  async update(data: any) {
    const {id, ...updateParams} = data
    try {
      return await axios({
        url: `/users/${id}`,
        method: 'PUT',
        data: updateParams
      })
    } catch(error: any) {
      return error?.response
    }
  }

  async delete(userId: number) {
    try {
      return await axios({
        url: `/users/${userId}`,
        method: 'DELETE'
      })
    }catch(error: any) {
      return error?.response
    }
  }
}


export default new UserService();