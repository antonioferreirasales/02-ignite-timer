import { Play } from 'phosphor-react'
import { Button, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id='task' 
            type="text" 
            placeholder='Dê um nome para o seu projeto' 
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"
            placeholder='00'
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <Button type='submit' disabled>
          <Play size={24} />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}