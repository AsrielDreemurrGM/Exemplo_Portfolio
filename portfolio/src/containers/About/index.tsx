import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre Mim:</Title>
    <Paragraph type="primary">
      Sou desenvolvedor web com experiência em HTML5, CSS, Bootstrap, GULP,
      SASS, LESS e GRUNT, além de estar aprimorando minhas habilidades em
      JavaScript e frameworks modernos como React. Meu objetivo é trabalhar
      remotamente a partir do Brasil. Atualmente, estou criando projetos que
      demonstram minhas competências e acredito que o LinkedIn será uma
      ferramenta essencial para conquistar meu primeiro emprego na área de
      tecnologia. Sou proativo e focado em me desenvolver continuamente, com um
      forte interesse em ferramentas modernas e boas práticas de
      desenvolvimento. Estou sempre aberto a novos desafios e motivado a
      colaborar em equipes que valorizam a criatividade e a eficiência.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=AsrielDreemurrGM&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AsrielDreemurrGM&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
