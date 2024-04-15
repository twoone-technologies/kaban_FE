import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistStore, persistReducer } from 'redux-persist'
// @ts-ignore
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'

import { api } from './features/api'
import authReducer from './slices/auth'

const persistConfig = {
    key: "kaban__session",
    storage: new CookieStorage(Cookies)
}

export const store = configureStore({
    reducer: combineReducers({
        [api.reducerPath]: api.reducer,
        auth: persistReducer(persistConfig, authReducer),
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true
})
setupListeners(store.dispatch)

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch