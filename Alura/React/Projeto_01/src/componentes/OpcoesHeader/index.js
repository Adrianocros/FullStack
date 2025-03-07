import styled from 'styled-components'

const OpcoesContainer = styled.ul`
   display: flex;
`

const ListaOpcoes = styled.li`
     min-width: 120px;
     font-size: 16px;
     display: flex;
     height: 100%;
     padding: 0 5px;
     cursor: pointer;
     justify-content: center;
     align-items: center;
     text-align: center;
`

const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE','BIBLIOTECA','OPCOES']

function OpcoesHeader(){
    return(
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
              <ListaOpcoes><p>{texto}</p></ListaOpcoes>
            ))}           
          </OpcoesContainer>
    )
}

export default OpcoesHeader