import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice';
import quizReducer from '../features/quizzes/quizzesSlice';
import cardReducer from '../features/cards/cardSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardReducer
  },
});
