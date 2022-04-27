/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addMoney(props) {
    return await request.post(
      '/money/add',
      {
        types: props.types,
        in_time: props.in_time,
        in_type: props.in_type,
        in_money: props.in_money,
        people: props.people,
        more: props.more,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getAllMoney() {
    return await request.get(
      '/money/all',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async deleteMoney(id) {
    return await request.delete(
      `/money/${id}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
};
