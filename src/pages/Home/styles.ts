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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  /* just so it breaks down when the screen shrinks */
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  font-weight: inherit;
  font-size: inherit;
  color: inherit;

  padding: 0 0.5rem;
  height: 2.5rem;

  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  /* removes arrow down icon from input */
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`

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