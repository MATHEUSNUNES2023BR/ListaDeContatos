import { ContainerButtons, ListaButtonCancelar, ListaButtonEditar, ListaButtonRemover, ListaButtonSalvar, ListaContainer, ListaEmail, ListaFoto, ListaNome, ListaTelefone } from "./style"
import avatar from '../../assets/avatar-default-svgrepo-com.svg'
import iconnome from '../../assets/avatar-people-person-svgrepo-com.svg'
import iconemail from '../../assets/email-svgrepo-com.svg'
import iconcontato from '../../assets/contact-book-svgrepo-com.svg'
import { useState } from "react"
import { remover, edicao } from "../../store/reducers/contatos"
import { useDispatch } from "react-redux"
type contatos = {
    name: string,
    email: string,
    contato: string,
    id: number
}

export const ListaComponent = ({name, contato, email, id}:contatos) => {
    const dispatch = useDispatch()
    const [editar, setEditar] = useState<boolean>(false)

    
    const [editanome, setEditaNome] = useState(name)
    const [editaemail, setEditaEmail] = useState(email)
    const [editacontato, setEditaContato] = useState(contato)

    const [originais, setOriginais] = useState({name, email, contato, id})
    function editaOriginal(){
        setEditaNome(originais.name)
        setEditaEmail(originais.email)
        setEditaContato(originais.contato)
    }
    
    return(
        <ListaContainer>
            <ListaFoto src={avatar}/>
            <ListaNome >
                <img className='iconimg' src={iconnome} alt="Icone Avatar" />
                <input disabled={!editar} type="text" value={editanome}
                    onChange={(e) => setEditaNome(e.target.value)}/>
            </ListaNome>
            <ListaEmail>
                <img className='iconimg' src={iconemail} alt="Icone Email" />
                <input disabled={!editar} type="email" value={editaemail} 
                    onChange={(e) => setEditaEmail(e.target.value)}/>
            </ListaEmail>
            <ListaTelefone>
                <img className='iconimg' src={iconcontato} alt="Icone Contato" />
                <input disabled={!editar} type="text" value={editacontato} 
                    onChange={(e) => setEditaContato(e.target.value)}/>
            </ListaTelefone>
            <ContainerButtons>
                {editar ? 
                    (
                    <>
                        <ListaButtonSalvar onClick={()=>{
                            setEditar(false)
                            setOriginais({name:editanome, id:id, email:editaemail, contato:editacontato})
                            dispatch(edicao({name:editanome, id:id, email:editaemail, contato:editacontato}))}
                        }>
                        Salvar</ListaButtonSalvar>
                        <ListaButtonCancelar onClick={()=>{ 
                            setEditar(false)
                            editaOriginal()
                        }}>Cancelar</ListaButtonCancelar>
                    </>
                    )
                    :
                    (
                    <>
                        <ListaButtonEditar onClick={()=>{
                            setEditar(true)
                        }}>Editar</ListaButtonEditar>
                        <ListaButtonRemover onClick={()=>{dispatch(remover(id))}}>Remover</ListaButtonRemover>   
                    </>
                    )
                }
            </ContainerButtons>
        </ListaContainer>
    )
}