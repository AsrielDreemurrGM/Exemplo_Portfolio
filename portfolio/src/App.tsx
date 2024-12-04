import EstiloGlobal from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/About'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <Projetos />
      </main>
    </>
  )
}

export default App
