import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard (state, action) {
      const payload = action.payload;
      const newCard = {
        id: payload.id,
        front: payload.front,
        back: payload.back
      }
      state.cards[payload.id] = newCard;
    }
  }
});

export const selectCards = state => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
