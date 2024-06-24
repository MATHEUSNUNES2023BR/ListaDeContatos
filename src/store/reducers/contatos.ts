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
        contato: '62 9 98554411',
        email: 'maria1234@gmail.com',
        id: 2
    },
    { 
        name: 'Joao',
        contato: '62 9 83884422',
        email: 'joao2023@gmail.com',
        id: 3
    },
    { 
        name: 'Pedro',
        contato: '62 9 95484422',
        email: 'pedro1998@gmail.com',
        id: 4
    },
]
const contatoReducer = createSlice({
    name: 'contatos',
    initialState,
    reducers:{
        remover: (state, action: PayloadAction<number>) => {
            state = state.filter((state) => state.id !== action.payload)
            return state
        }
    }
})
export const { remover } = contatoReducer.actions
export default contatoReducer.reducer