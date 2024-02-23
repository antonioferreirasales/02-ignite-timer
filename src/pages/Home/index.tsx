import { HandPalm, Play } from 'phosphor-react'
import { StartCountdownButton, HomeContainer, StopCountdownButton } from './styles'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number()
    .min(1, 'O ciclo precisa ser no mínimo de 5 minutos')
    .max(60, 'O ciclo precisa ser no máximo de 60 minutos')
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle  } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25
    }
  })

  const { handleSubmit, watch /*, reset*/ } = newCycleForm

  // check submit
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        { activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type='button'>
            <HandPalm size={24} />
          Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type='submit' disabled={isSubmitDisabled}>
            <Play size={24} />
          Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}