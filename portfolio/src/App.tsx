import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'

function App() {
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(false)

  function themeChanger() {
    setIsDarkThemeOn(!isDarkThemeOn)
  }

  return (
    <ThemeProvider theme={isDarkThemeOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={themeChanger} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
