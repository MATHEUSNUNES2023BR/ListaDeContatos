import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type contatos = {
    name: string,
    contato: string,
    email: string,
    id: number
}
const initialState:contatos[] = [
    { 
    name: 'Matheus',
    contato: '62 9 81963308',
    email: 'matheusnunes@gmail.com',
    id: 1
    },
    { 
        name: 'Maria',
        contato: '62 9 123456789',
        email: 'maria1234@gmail.com',
        id: 2
    },
]
const contatoReducer = createSlice({
    name: 'contatos',
    initialState,
    reducers:{
        remover: (state, action: PayloadAction<number>) => {
            state = state.filter((contatos)=> contatos.id !== action.payload)
        }
    }
})
export const { remover } = contatoReducer.actions
export default contatoReducer.reducer