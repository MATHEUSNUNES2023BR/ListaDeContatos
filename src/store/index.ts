import { configureStore } from '@reduxjs/toolkit'
import contatos from './reducers/contatos'
import modalReducer from './reducers/modal'
const store = configureStore({
    reducer: {
        contatos,
        modalReducer,
    }
})
export type RootReducer = ReturnType<typeof store.getState>  
export default store