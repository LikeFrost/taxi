/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async login(props) {
    return await request.post(
      '/user/login',
      { name: props.name, password: props.password },
    );
  },
  async logUp(props) {
    return await request.post(
      '/user/logup',
      { name: props.name, password: props.password, auth: props.auth },
    );
  },
  async updateUser(props) {
    return await request.post(
      '/user',
      {
        id: props.id,
        password: props.password,
        sex: props.sex,
        id_card: props.id_card,
        telephone: props.telephone,
        birthday: props.birthday,
        home: props.home,
        car_id: props.car_id,
        drive_id: props.drive_id,
        drive_car: props.drive_car,
        drive_year: props.drive_year,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async updateUserByName(props) {
    return await request.post(
      '/user/updateother',
      {
        name: props.name,
        id: props.id,
        auth: props.auth,
        sex: props.sex,
        id_card: props.id_card,
        telephone: props.telephone,
        birthday: props.birthday,
        home: props.home,
        car_id: props.car_id,
        drive_id: props.drive_id,
        drive_car: props.drive_car,
        drive_year: props.drive_year,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getUser() {
    return await request.get(
      '/user',
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getUserByName(name) {
    return await request.get(
      `/user/${name}`,
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getAllUsers() {
    return await request.get(
      '/user/all',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async deleteUser(name) {
    return await request.delete(
      `/user/${name}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
};
