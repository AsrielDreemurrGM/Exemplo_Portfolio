import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/About'
import Projetos from './containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
