/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addCar(props) {
    return await request.post(
      '/car/add',
      {
        car_id: props.car_id,
        color: props.color,
        car_type: props.car_type,
        id: props.id,
        count_money: props.count_money,
        state: props.state,
        ensure_company: props.ensure_company,
        ensure_year: props.ensure_year,
        safe_day: props.safe_day,
        ensure_day: props.ensure_day,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async updateCar(props) {
    return await request.post(
      '/car',
      {
        car_id: props.car_id,
        color: props.color,
        car_type: props.car_type,
        id: props.id,
        count_money: props.count_money,
        state: props.state,
        ensure_company: props.ensure_company,
        ensure_year: props.ensure_year,
        safe_day: props.safe_day,
        ensure_day: props.ensure_day,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getCar(car) {
    return await request.get(
      `/car/${car}`,
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getAllCar() {
    return await request.get(
      '/car/all',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async deleteCar(car) {
    return await request.delete(
      `/car/${car}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async getSearchCar(search) {
    return await request.get(
      `/car/search/${search}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
};
