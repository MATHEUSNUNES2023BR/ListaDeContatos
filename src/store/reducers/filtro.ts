import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    termo: ''
}
const filtroReducer = createSlice({
    name: 'filtro',
    initialState,
    reducers:{
        filtrar: (state, action: PayloadAction<string>)=>{
            state.termo = action.payload
        }
    }
})
export const { filtrar } = filtroReducer.actions
export default filtroReducer.reducer