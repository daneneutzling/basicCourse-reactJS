import React, { useState } from 'react'
import Sub from './Sub'

export default props => {

{/*Uso do operador destructuring*/}
{/* useState retorna um array de 2 elementos: o valor e a função que altera o valor */}
{/* useState com valor inicial = 0 */}
{/* NUM = valor e SETNUM = função para alterar o valor */}
    const [num, setNum] = useState(0)

{/*Componente PAI manda o "VALOR" e o FILHO manda o "VALOR GERADO" quando o usuário interage*/}
    const [text, setText] = useState('Valor')

    function Click(RadomValue, text) {
{/*Altera o VALOR na tela ao invés de alterar no console, pois há o uso de ESTADO na aplicação*/}
        setNum(RadomValue)
        setText(text)
        console.log('Comunicação indireta realizada!')
    }

    return (
        <div>
            <h4>{text}: {num}</h4>
            <Sub WhenClick = {Click}></Sub>
        </div>
    )
}
