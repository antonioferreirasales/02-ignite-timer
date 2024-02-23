import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return(
    <FormContainer>

      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput id='task' 
        type="text"
        list='task-suggestions' 
        placeholder='Dê um nome para o seu projeto'
        {...register('task')}
        disabled={!!activeCycle}
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
        defaultValue={25}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true})}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}