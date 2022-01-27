import React from 'react'

export default props => 
    <div>
    {/*PAI manda função ao FILHO invoca a função e manda dados de volta ao PAI (Funções Callback) */}
    {/*Função Arrow dentro do Button*/}
        <button onClick={ () => {
            props.WhenClick(Math.random(), 'Valor gerado')
        }}>Alterar</button>
    </div>
