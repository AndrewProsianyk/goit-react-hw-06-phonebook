import reducer from './reducer'
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

const persistConfig = {
    key: 'contacts',
    storage,
}

const rootReducer = combineReducers({ contacts: reducer });
const persistedReducer = persistReducer(persistConfig, rootReducer );

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})
const persistor = persistStore(store);

export {store, persistor};