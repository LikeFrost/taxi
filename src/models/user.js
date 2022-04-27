import UserService from '@/services/user';

export default {
  state: {
    user: {},
    users: [],
  },
  reducers: {
    update(pre, now) {
      pre.user = now;
    },
    updateUsers(pre, now) {
      pre.users = now;
    },
  },
  effects: (dispatch) => ({
    async login(props) {
      const data = await UserService.login(props);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('auth', data.auth);
      return data;
    },
    async logUp(props) {
      const data = await UserService.logUp(props);
      sessionStorage.setItem('token', data.token);
      return data;
    },
    async updateUser(props) {
      const data = await UserService.updateUser(props);
      return data;
    },
    async updateUserByName(props) {
      const data = await UserService.updateUserByName(props);
      return data;
    },
    async getUser() {
      const data = await UserService.getUser();
      dispatch.user.update(data.user);
      return data;
    },
    async getUserByName(name) {
      const data = await UserService.getUserByName(name);
      dispatch.user.update(data.user);
      return data;
    },
    async getAllUsers() {
      const data = await UserService.getAllUsers();
      dispatch.user.updateUsers(data.user);
      return data;
    },
    async deleteUser(name) {
      const data = await UserService.deleteUser(name);
      return data;
    },
  }),
};
