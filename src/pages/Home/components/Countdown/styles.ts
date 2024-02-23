import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${props => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${props => props.theme['gray-700']};
    padding: 2rem 3rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  color: ${props => props.theme['green-500']};
`