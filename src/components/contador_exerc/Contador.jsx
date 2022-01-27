import React, { Component } from 'react'
import ContadorStyle from './ContadorStyle.css'

{/* Contador baseado em uma classe (maneira mais simples)

OUTRA OPÇÃO: class Contador extends React.Component {} */}
export default class Contador extends Component {

/* OBS.: valor de value é passado internamente dentro do componente, enquanto o de step é externo
      sendo que, caso não seja passado valor para o step, ele inicializará em 1 (valor padrão) */
    constructor (props) {
        super(props)
        this.state = {
            step: props.step,
            value: 0
        }
    }

    incrementar = () => {
/*Uso do setState, onde é passado um objeto a ele, com um único atributo (que é VALOR, nesse caso)*/
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    decrementar = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h4>Passo: {this.state.step}</h4>

                <div>
                    <input type="number"
                    value={this.state.step}
                    onChange={StateChange => this.setState({ step: +StateChange.target.value })}/>
                </div>
                
                {/*Componente referente ao Display*/}
                <h4>Valor: {this.state.value}</h4>

                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>
        )
    }
}