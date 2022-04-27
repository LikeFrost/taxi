import MoneyService from '@/services/money';

export default {
  state: {
    money: [],
  },
  reducers: {
    update(pre, now) {
      pre.money = now;
    },
  },
  effects: (dispatch) => ({
    async addMoney(props) {
      const data = await MoneyService.addMoney(props);
      return data;
    },
    async getAllMoney() {
      const data = await MoneyService.getAllMoney();
      dispatch.money.update(data.money);
      return data;
    },
    async deleteMoney(id) {
      const data = await MoneyService.deleteMoney(id);
      return data;
    },
  }),
};
