import CarService from '@/services/car';

export default {
  state: {
    car: {},
    cars: [],
  },
  reducers: {
    update(pre, now) {
      pre.car = now;
    },
    updateCars(pre, now) {
      pre.cars = now;
    },
  },
  effects: (dispatch) => ({
    async addCar(props) {
      const data = await CarService.addCar(props);
      return data;
    },
    async updateCar(props) {
      const data = await CarService.updateCar(props);
      return data;
    },
    async getCar(car) {
      const data = await CarService.getCar(car);
      dispatch.car.update(data.car);
      return data;
    },
    async getAllCar() {
      const data = await CarService.getAllCar();
      dispatch.car.updateCars(data.cars);
      return data;
    },
    async deleteCar(car) {
      const data = await CarService.deleteCar(car);
      return data;
    },
    async getSearchCar(search) {
      const data = await CarService.getSearchCar(search);
      dispatch.car.updateCars(data.cars);
      return data;
    },
  }),
};
