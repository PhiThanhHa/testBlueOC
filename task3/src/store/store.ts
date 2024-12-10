import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

// Export the types for the store's state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Define a type for Thunk actions to be used in your action creators
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
