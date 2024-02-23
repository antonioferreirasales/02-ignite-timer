import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  
  font-weight: 700;

  cursor: pointer;
  color: ${props => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  width: 100%;
  padding: 1rem 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['green-500']};

    &:not(:disabled):hover {
    background: ${props => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme['red-500']};

    &:not(:disabled):hover {
    background: ${props => props.theme['red-700']};
  }
`