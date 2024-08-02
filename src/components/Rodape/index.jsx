import React from 'react'
import styled from 'styled-components'

const ContMod = styled.footer`
    width: 100%;
    padding: 10px;
    background: #03002e;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0 ;
`

const Rodape = () => {
  return (
    <ContMod>
        <div className='container'>
            <h3>Desenvolvido por Henrique</h3>
        </div>  
    </ContMod>
  )
}

export default Rodape
