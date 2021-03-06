import { createSlice } from "@reduxjs/toolkit";
import FakeData from "../../../../data/restaurants_initial";

export const restauranteSlice = createSlice({
  name: "restaurantes",
  initialState: {
    value: FakeData,
  },
  reducers: {
    newState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { newState } = restauranteSlice.actions;
export const selectValores = (state) => state.restaurantes.value;

export default restauranteSlice.reducer;
