/* eslint-disable @iceworks/best-practices/no-http-url */
import { request } from 'ice';

export default {
  async addQuestion(props) {
    return await request.post(
      '/question/add',
      {
        car_id: props.car_id,
        happen_time: props.happen_time,
        create_time: props.create_time,
        method: props.method,
        content: props.content,
        result: props.result,
      },
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getQuestionByCarId(car) {
    return await request.get(
      `/question/${car}`,
      { headers: {
        Authorization: sessionStorage.getItem('token'),
      } },
    );
  },
  async getAllQuestion() {
    return await request.get(
      '/question/all',
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async deleteQuestion(id) {
    return await request.delete(
      `/question/${id}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
  async getSearchQuestion(search) {
    return await request.get(
      `/question/search/${search}`,
      {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      },
    );
  },
};
