import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic (state, action) {
      const payload = action.payload;
      const newTopic = {
        id: payload.name, //wasn't working with id
        name: payload.name,
        icon: payload.icon,
        quizIds: []
      }
      //I think there was a problem with the assignment. In the instructions, it tells me to create a new topic with a key of a unique ID,
      //but in order for the code to work with what was provided, I have to create topics with a key value of its name instead.
      //This means I can not have multiple topics with the same name.
      //What does this mean?
      //I need to keep an eye out for bugs this change might be causing
      //  --Found a problem. Bad things happen when the user tries to put in the same topic name twice. I am going to disallow that
      //I also had to spend close to an hour figuring out what was wrong
      //Thanks, Codecademy

      state.topics[payload.name] = newTopic;
      //state.topics[payload.id] = newTopic;// (Nope, not doing this anymore)
    },
    addQuiz (state, action) {
      const payload = action.payload;
      state.topics[payload.topicId].quizIds.push(payload.id);
    }
  }
});

export const selectTopic = state => state.topics.topics;
export const { addTopic, addQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;
