import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz (state, action) {
      const payload = action.payload;
      const newQuiz = {
        id: payload.id,
        name: payload.name,
        topicId: payload.topicId,   
        cardIds: payload.cardIds
      };
      state.quizzes[payload.id] = newQuiz;
    }   
  }
});

export const quizCreator = (payload) => {
  return (dispatch) => {
    dispatch({type: 'quizzes/addQuiz', payload: payload});
    dispatch({type: 'topics/addQuiz', payload: payload});
  }
};

//problem: quizzes is not in state :(
export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
