import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
// import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
