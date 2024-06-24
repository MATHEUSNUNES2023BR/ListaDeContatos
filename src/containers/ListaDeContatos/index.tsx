import { ListaComponent } from "../../components/ListaComponent"
import { ContainerContato } from "./style"
import { Modal } from "../../containers/ListaDeContatos/style";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

export const ListaDeContatos = ({ ativo }:Modal) => {
    const listaDeContatos = useSelector((state: RootReducer) => state.contatos)
    const termo = useSelector((state: RootReducer)=>state.filtro)
    const filtrarConatos = () => {
        return (listaDeContatos.filter((item) => item.name.toLowerCase().search(termo.termo.toLowerCase()) >= 0))
    }
    return(
        <ContainerContato ativo={ativo}>
            {
                filtrarConatos().map((contato)=>(
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