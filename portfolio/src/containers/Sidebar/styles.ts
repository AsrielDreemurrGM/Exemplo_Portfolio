import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const ThemeButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.backgroundColor};
  padding: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`
