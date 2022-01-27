import React, { Component } from 'react'
import ContadorStyle from './ContadorStyle.css'
import Display from './Display'
import Passo from './Passo'
import Botoes from './Botoes'

export default class Contador2 extends Component {

/*OUTRA OPÇÃO (equivalente ao CONSTRUCTOR do contador.jsx)*/
    state = {
        step: this.props.step || 1,
        value: 0
    }

    incrementar = () => {
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    decrementar = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    changeStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h4>Passo: {this.state.step}</h4>

                {/*Chama o "Passo" e referencia a função "changeStep" em "onChangeStep"*/}
                <Passo step={this.state.step}
                    onStepChange={this.changeStep}></Passo>

                {/*Componente referente ao Display*/}
                <Display value={this.state.value}></Display>

                <Botoes onInc={this.incrementar} onDec={this.decrementar}></Botoes>
            </div>
        )
    }
}