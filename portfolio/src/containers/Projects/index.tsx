import Project from '../../components/Project'
import Titulo from '../../components/Title'

import { List } from './styles'

const Projects = () => (
  <section>
    <Titulo fontSize={16}>Projetos:</Titulo>
    <List>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
    </List>
  </section>
)

export default Projects
