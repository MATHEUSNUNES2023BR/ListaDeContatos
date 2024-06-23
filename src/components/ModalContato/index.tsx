import { useDispatch } from "react-redux"
import { ContainerContato, ModalNome, ModalEmail, ModalTelefone, ModalButtonSalvar, ModalButtonCancelar, ModalButtonContainer } from "./style"
import { ativarModal } from "../../store/reducers/modal"
export const ModalContato = ()=>{
    const dispatch = useDispatch()
    return(
        <ContainerContato>
            <ModalNome>
                <span>Nome: </span>
                <input type="text" />
            </ModalNome>
            <ModalEmail>
                <span>Email: </span>
                <input type="text" />
            </ModalEmail>
            <ModalTelefone>
                <span>Telefone: </span>
                <input type="text" />
            </ModalTelefone>
            <ModalButtonContainer>
                <ModalButtonSalvar>Salvar</ModalButtonSalvar>
                <ModalButtonCancelar onClick={()=>dispatch(ativarModal())}>Cancelar</ModalButtonCancelar>
            </ModalButtonContainer>
        </ContainerContato>
    )
}