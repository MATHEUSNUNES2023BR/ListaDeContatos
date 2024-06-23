import { ContainerButtons, ListaButtonEditar, ListaButtonRemover, ListaContainer, ListaEmail, ListaFoto, ListaNome, ListaTelefone } from "./style"
import avatar from '../../assets/avatar-default-svgrepo-com.svg'
import nome from '../../assets/avatar-people-person-svgrepo-com.svg'
import email from '../../assets/email-svgrepo-com.svg'
import contato from '../../assets/contact-book-svgrepo-com.svg'
export const ListaCoponent = () => {
    return(
        <ListaContainer>
            <ListaFoto src={avatar}/>
            <ListaNome >
                <img className='iconimg' src={nome} alt="" />
                <input type="text" value={'Matheus Nunes'}/>
            </ListaNome>
            <ListaEmail>
                <img className='iconimg' src={email} alt="" />
                <input type="text" value={'matheusnunesdebarros@gmail.com'}/>
            </ListaEmail>
            <ListaTelefone>
                <img className='iconimg' src={contato} alt="" />
                <input type="text"  value={'62 9 819636308'}/>
            </ListaTelefone>
            <ContainerButtons>
                <ListaButtonEditar>Editar</ListaButtonEditar>
                <ListaButtonRemover>Remover</ListaButtonRemover>
            </ContainerButtons>
        </ListaContainer>
    )
}