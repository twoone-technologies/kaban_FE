import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { api } from "./features/api";
import authReducer from "./slices/auth";
import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "kaban__session",
  storage: storageSession,
};

export const store = configureStore({
  reducer: combineReducers({
    [api.reducerPath]: api.reducer,
    auth: persistReducer(persistConfig, authReducer),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
