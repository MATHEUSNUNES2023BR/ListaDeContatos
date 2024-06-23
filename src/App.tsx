import { BarraEdicao } from "./containers/BarraDeEdicao"
import { ListaDeContatos } from "./containers/ListaDeContatos"
import EstiloGlobal from "./styles/Estilo_Global"

function App() {
  return (
    <>
      <EstiloGlobal />
      <BarraEdicao />
      <ListaDeContatos />
    </>
  )
}

export default App
