import { configureStore } from '@reduxjs/toolkit'
import contatos from './reducers/contatos'
import modalReducer from './reducers/modal'
import filtro from './reducers/filtro'
const store = configureStore({
    reducer: {
        contatos,
        modalReducer,
        filtro
    }
})
export type RootReducer = ReturnType<typeof store.getState>  
export default store