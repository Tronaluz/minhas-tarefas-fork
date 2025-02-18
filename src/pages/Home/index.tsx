import BotaoAdicionar from '../../components/BotaoAcicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
