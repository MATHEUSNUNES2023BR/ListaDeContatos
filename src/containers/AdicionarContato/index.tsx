import { ModalContato } from "../../components/ModalContato"
import { ContainerModal } from "./style"
import { Modal } from "../ListaDeContatos/style"
export const AdicionarContato = ({ ativo }:Modal) =>{

    return(
        <ContainerModal ativo={ativo}>
            <ModalContato />
        </ContainerModal>
    )
}