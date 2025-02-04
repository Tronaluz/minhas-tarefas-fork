import { useState } from 'react'
import * as S from './styles'

const Tarefa = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>Nome da Tarefa</S.Titulo>
      <S.Tag>importante</S.Tag>
      <S.Tag>Pendete</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao>Editar</S.Botao>
            <S.Botao>Excluir</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
