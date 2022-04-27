/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addTraffic(props) {
    return await request.post(
      '/traffic/add',
      {
        car_id: props.car_id,
        user: props.user,
        content: props.content,
        time: props.time,
        location: props.location,
        money: props.money,
        score: props.score,
        state: props.state,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getTrafficByCarId(car) {
    return await request.get(
      `/traffic/${car}`,
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getAllTraffic() {
    return await request.get(
      '/traffic/all',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async deleteTraffic(id) {
    return await request.delete(
      `/traffic/${id}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async getSearchTraffic(search) {
    return await request.get(
      `/traffic/search/${search}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
};
