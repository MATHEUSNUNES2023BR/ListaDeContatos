import { ListaComponent } from "../../components/ListaComponent"
import { ContainerContato } from "./style"
import { Modal } from "../../containers/ListaDeContatos/style";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

export const ListaDeContatos = ({ ativo }:Modal) => {
    const listaDeContatos = useSelector((state: RootReducer) => state.contatos)
    return(
        <ContainerContato ativo={ativo}>
            {
                listaDeContatos.map((contato)=>(
                    <div key={contato.id}>
                        <ListaComponent 
                            name={contato.name} 
                            email={contato.email} 
                            contato={contato.contato}
                            id={contato.id}
                        />
                    </div>
                ))
            }
        </ContainerContato>
        
    )
}