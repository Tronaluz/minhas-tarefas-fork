import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDETE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENT,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do módulo ',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENT,
      enums.Status.PENDETE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
