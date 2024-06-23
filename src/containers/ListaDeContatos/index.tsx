import { ListaCoponent } from "../../components/ListaComponent"
import { ContainerContato } from "./style"
import { Modal } from "../../containers/ListaDeContatos/style";

export const ListaDeContatos = ({ ativo }:Modal) => {
    return(
        <ContainerContato ativo={ativo}>
            <ListaCoponent />
            <ListaCoponent />
            <ListaCoponent />
            <ListaCoponent />
            <ListaCoponent />
            <ListaCoponent />
            <ListaCoponent />
        </ContainerContato>
        
    )
}