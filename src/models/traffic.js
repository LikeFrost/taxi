import TrafficService from '@/services/traffic';

export default {
  state: {
    traffics: [],
  },
  reducers: {
    update(pre, now) {
      pre.traffics = now;
    },
  },
  effects: (dispatch) => ({
    async addTraffic(props) {
      const data = await TrafficService.addTraffic(props);
      return data;
    },
    async getTrafficByCarId(car) {
      const data = await TrafficService.getTrafficByCarId(car);
      dispatch.traffic.update(data.traffics);
      return data;
    },
    async getAllTraffic() {
      const data = await TrafficService.getAllTraffic();
      dispatch.traffic.update(data.traffics);
      return data;
    },
    async deleteTraffic(id) {
      const data = await TrafficService.deleteTraffic(id);
      return data;
    },
  }),
};
