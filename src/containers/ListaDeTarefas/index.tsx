import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Estudar React para criar aplicações web',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDETE
  },
  {
    titulo: 'Pagar contas',
    descricao: 'Baixar e pagar contas de água, luz e telefone',
    prioridade: enums.Prioridade.URGENT,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir ao mercado',
    descricao: 'Fazer compras para a semana',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDETE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo; </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
