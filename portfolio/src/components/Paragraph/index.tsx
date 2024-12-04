import { P } from './styles'

export type Props = {
  children: string
  type?: 'primary' | 'secondary'
}

const Titulo = ({ children, type = 'primary' }: Props) => (
  <P type={type}>{children}</P>
)

export default Titulo
