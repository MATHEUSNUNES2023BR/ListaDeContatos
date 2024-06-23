import * as S from "./style"
import IconBarra from '../../assets/contact-svgrepo-com.svg'
import { ativarModal } from "../../store/reducers/modal"
import { useDispatch } from "react-redux"
export const BarraComponent = () => {
    const dispatch = useDispatch()
    return(
        <>
            <S.BarraIcon>
                <img src={IconBarra} alt="" />
                <h1>Contatos</h1>
            </S.BarraIcon>
            <S.BarraSearch type="text" placeholder="...Pesquisar"/>
            <S.BarraAdd onClick={()=>dispatch(ativarModal())}>+ Adicionar</S.BarraAdd>
        </>
    )
}