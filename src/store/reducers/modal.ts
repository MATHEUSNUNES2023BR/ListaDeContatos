import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "../../containers/ListaDeContatos/style";
const initialState:Modal = {
    ativo: false
}
const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        ativarModal: (state) => {
            if(state.ativo !== true){
                state.ativo = true
            }else{
                state.ativo = false
            }
        }
    }
})
export const { ativarModal } = modalReducer.actions
export default modalReducer.reducer