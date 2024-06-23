import { useSelector } from "react-redux"
import { AdicionarContato } from "./containers/AdicionarContato"
import { BarraEdicao } from "./containers/BarraDeEdicao"
import { ListaDeContatos } from "./containers/ListaDeContatos"
import EstiloGlobal, { ContainerGlobal } from "./styles/Estilo_Global"
import { RootReducer } from "./store"

function App() {
  const estadoModal = useSelector((state: RootReducer) => state.modalReducer)
  console.log(estadoModal.ativo)
  return (
    <ContainerGlobal ativo={estadoModal.ativo}>
      <EstiloGlobal />
      <BarraEdicao />
      <ListaDeContatos ativo={estadoModal.ativo}/>
      <AdicionarContato ativo={estadoModal.ativo}/>
    </ContainerGlobal>
  )
}

export default App
