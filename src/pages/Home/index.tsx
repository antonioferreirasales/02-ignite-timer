import { Play } from 'phosphor-react'
import { Button, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number()
    .min(5, 'O ciclo precisa ser no mínimo de 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo de 60 minutos')
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25
    }
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)

  // check submit
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>

          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id='task' 
            type="text"
            list='task-suggestions' 
            placeholder='Dê um nome para o seu projeto'
            {...register('task')}
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
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true})}
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

        <Button type='submit' disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}