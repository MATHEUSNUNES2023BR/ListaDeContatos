import { useDispatch, useSelector } from "react-redux"
import { ContainerContato, ModalNome, ModalEmail, ModalTelefone, ModalButtonSalvar, ModalButtonCancelar, ModalButtonContainer } from "./style"
import { ativarModal } from "../../store/reducers/modal"
import { useState } from "react"
import { adicionar } from "../../store/reducers/contatos"
import { RootReducer } from "../../store"
export const ModalContato = ()=>{
    const dispatch = useDispatch()
    const tamanhoContatos = useSelector((state: RootReducer)=> state.contatos)
    const [modalNome, setModalNome] = useState('')
    const [modalEmail, setModalEmail,] = useState('')
    const [modalContato, setModalContato] = useState('')
    function limpaInput(){
        setModalNome(''),
        setModalEmail(''),
        setModalContato('')
    }
    return(
        <ContainerContato>
            <ModalNome>
                <span>Nome: </span>
                <input type="text" onChange={(e)=> setModalNome(e.target.value)} value={modalNome}/>
            </ModalNome>
            <ModalEmail>
                <span>Email: </span>
                <input type="text" onChange={(e) => setModalEmail(e.target.value)} value={modalEmail}/>
            </ModalEmail>
            <ModalTelefone>
                <span>Telefone: </span>
                <input type="text" onChange={(e) => setModalContato(e.target.value)} value={modalContato}/>
            </ModalTelefone>
            <ModalButtonContainer>
                <ModalButtonSalvar onClick={()=>
                   ( 
                    dispatch(adicionar({name:modalNome, email: modalEmail, contato: modalContato, id:tamanhoContatos.length})),
                    dispatch(ativarModal()),
                    limpaInput()
                    )
                }
                >Salvar</ModalButtonSalvar>
                <ModalButtonCancelar onClick={()=>(dispatch(ativarModal()), limpaInput())}>Cancelar</ModalButtonCancelar>
            </ModalButtonContainer>
        </ContainerContato>
    )
}