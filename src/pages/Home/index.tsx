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
            list='task-suggestions' 
            placeholder='Dê um nome para o seu projeto' 
          />

          <datalist id='task-suggestions'>
            <option value="Projeto 1" />
            <option value="Projeto de escola" />
            <option value="Projeto estudar" />
            <option value="Projeto trabalho" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
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