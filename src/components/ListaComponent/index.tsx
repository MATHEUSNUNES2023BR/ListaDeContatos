import { ListaContainer, ListaEmail, ListaFoto, ListaNome, ListaTelefone } from "./style"
import avatar from '../../assets/avatar-default-svgrepo-com.svg'
import nome from '../../assets/avatar-people-person-svgrepo-com.svg'
import email from '../../assets/email-svgrepo-com.svg'
import contato from '../../assets/contact-book-svgrepo-com.svg'
export const ListaCoponent = () => {
    return(
        <ListaContainer>
            <ListaFoto src={avatar}/>
            <img className='iconimg' src={nome} alt="" />
            <ListaNome value={'Matheus Nunes'}></ListaNome>
            <img className='iconimg' src={email} alt="" />
            <ListaEmail value={'matheusnunesdebarros@gmail.com'}></ListaEmail>
            <img className='iconimg' src={contato} alt="" />
            <ListaTelefone value={'62 9 819636308'}></ListaTelefone>
        </ListaContainer>
    )
}