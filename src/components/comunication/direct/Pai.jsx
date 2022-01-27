import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        {/*Passa todas propriedades do pai para o filho - Uso do operador spread*/}
        <Filho {...props}>Daniela</Filho>
        {/*Passando uma única propriedade do pai para o filho*/}
        <Filho sobrenome = {props.sobrenome}>Henrique</Filho>
        <Filho sobrenome = 'Avila'>Daniela e Henrique</Filho>
    </div>
