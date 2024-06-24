import { ContainerButtons, ListaButtonCancelar, ListaButtonEditar, ListaButtonRemover, ListaButtonSalvar, ListaContainer, ListaEmail, ListaFoto, ListaNome, ListaTelefone } from "./style"
import avatar from '../../assets/avatar-default-svgrepo-com.svg'
import iconnome from '../../assets/avatar-people-person-svgrepo-com.svg'
import iconemail from '../../assets/email-svgrepo-com.svg'
import iconcontato from '../../assets/contact-book-svgrepo-com.svg'
import { useState } from "react"
import { remover } from "../../store/reducers/contatos"
import { useDispatch } from "react-redux"
type contatos = {
    name: string,
    email: string,
    contato: string,
    id: number
}
export const ListaComponent = ({name, contato, email, id}:contatos) => {
    const dispatch = useDispatch()
    const [editar, setEditar] = useState(false)
    return(
        <ListaContainer>
            <ListaFoto src={avatar}/>
            <ListaNome >
                <img className='iconimg' src={iconnome} alt="Icone Avatar" />
                <input type="text" value={name}/>
            </ListaNome>
            <ListaEmail>
                <img className='iconimg' src={iconemail} alt="Icone Email" />
                <input type="email" value={email}/>
            </ListaEmail>
            <ListaTelefone>
                <img className='iconimg' src={iconcontato} alt="Icone Contato" />
                <input type="text" value={contato}/>
            </ListaTelefone>
            <ContainerButtons>
                {editar ? 
                    (
                    <>
                        <ListaButtonSalvar>Salvar</ListaButtonSalvar>
                        <ListaButtonCancelar onClick={()=>{setEditar(false)}}>Cancelar</ListaButtonCancelar>
                    </>
                    )
                    :
                    (
                    <>
                        <ListaButtonEditar onClick={()=>{setEditar(true)}}>Editar</ListaButtonEditar>
                        <ListaButtonRemover onClick={()=>{dispatch(remover(id))}}>Remover</ListaButtonRemover>   
                    </>
                    )
                }
            </ContainerButtons>
        </ListaContainer>
    )
}