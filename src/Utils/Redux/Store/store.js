import { configureStore } from "@reduxjs/toolkit";
import restauranteReducer from "../Features/Restaurantes/restaurantesSlice";

export default configureStore({
  reducer: {
    restaurantes: restauranteReducer,
  },
});
