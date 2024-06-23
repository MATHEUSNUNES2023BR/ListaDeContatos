import * as S from "./style"
import IconBarra from '../../assets/contact-svgrepo-com.svg'

export const BarraComponent = () => {
    return(
        <>
            <S.BarraIcon>
                <img src={IconBarra} alt="" />
                <h1>Contatos</h1>
            </S.BarraIcon>
            <S.BarraSearch type="text" placeholder="...Pesquisar"/>
            <S.BarraAdd>+ Adicionar</S.BarraAdd>
        </>
    )
}