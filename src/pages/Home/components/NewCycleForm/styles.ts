import { styled } from 'styled-components'

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

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  /* removes arrow down icon from input */
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`