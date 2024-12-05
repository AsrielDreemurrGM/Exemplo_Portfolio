import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Titulo from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Eduardo Augusto</Titulo>
      <Paragraph type="secondary" fontSize={16}>
        AsrielDreemurrGM
      </Paragraph>
      <Description type="primary" fontSize={12}>
        Dev Full Stack Java
      </Description>
      <ThemeButton>Trocar Tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
