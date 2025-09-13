import _ from "lodash";

const initialState = null;

const quizReducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export { initialState, quizReducer };
