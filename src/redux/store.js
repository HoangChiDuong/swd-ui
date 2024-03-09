import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSilce';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { staffListReducer, userInfoReducer } from './Reducers/UserReducers';
import { productDeleteReducer, productListReducer } from './Reducers/ProductReducers';
import { addCardReducer } from './Reducers/CardReducers';



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    staffList: staffListReducer,
    productList: productListReducer,
    deleteProduct: productDeleteReducer,
    userInfo: userInfoReducer,
    addCard: addCardReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            },
        }),
})

export let persistor = persistStore(store);

// export default configureStore({
//     reducer: {

//     }
// })