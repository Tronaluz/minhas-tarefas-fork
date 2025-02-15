import { create } from 'domain'
import * as enums from '../../utils/enums/Tarefa'



type FiltroState = {
    termo: string,
    criterio: 'prioriade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
    termo: '',
    criterio: 'todas'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState:,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        }
    }
})

const { alterarTermo } = filtroSlice.actions
