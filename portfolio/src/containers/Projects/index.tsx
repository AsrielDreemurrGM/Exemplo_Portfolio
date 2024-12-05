import Project from '../../components/Project'
import Titulo from '../../components/Title'

const Projects = () => (
  <section>
    <Titulo fontSize={16}>Projetos:</Titulo>
    <ul>
      <li>
        <Project />
      </li>
    </ul>
  </section>
)

export default Projects
