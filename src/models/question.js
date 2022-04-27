import QuestionService from '@/services/question';

export default {
  state: {
    questions: [],
  },
  reducers: {
    update(pre, now) {
      pre.questions = now;
    },
  },
  effects: (dispatch) => ({
    async addQuestion(props) {
      const data = await QuestionService.addQuestion(props);
      return data;
    },
    async getQuestionByCarId(car) {
      const data = await QuestionService.getQuestionByCarId(car);
      dispatch.question.update(data.questions);
      return data;
    },
    async getAllQuestion() {
      const data = await QuestionService.getAllQuestion();
      dispatch.question.update(data.questions);
      return data;
    },
    async deleteQuestion(id) {
      const data = await QuestionService.deleteQuestion(id);
      return data;
    },
    async getSearchQuestion(search) {
      const data = await QuestionService.getSearchQuestion(search);
      dispatch.question.update(data.questions);
      return data;
    },
  }),
};
