import React from 'react'
import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIF from './components/basics/CondicionalComIF'
import Pai from './components/comunication/direct/Pai'
import Super from './components/comunication/direct/indirect/Super'
import Input from './components/form/Input'
import Contador from './components/contador_exerc/Contador'
import Contador2 from './components/contador_exerc/Contador2'
import Mega from './components/mega_sena/Mega'

export default props =>
    <div className='App'>
        <h1>Fundamentos de React JS</h1>

        <div className='Cards'>
            <Card titulo = '#01 - Primeiro componente' color = '#96ceb4'>
                <Primeiro/>
            </Card>

            <Card titulo = '#02 - Componente com parâmetro' color = '#ff6f69'>
            <ComParametro titulo = "Este é o título"
                        subtitulo = "Este é o subtítulo"/>
            </Card>

            <Card titulo = '#03 - Componente com filhos' color = '#ffcc5c'>
            <ComFilhos>
                <ul>
                    <li>Daniela</li>
                    <li>Henrique</li>
                    <li>Cacau</li>
                    <li>Kica</li>
                </ul>
            </ComFilhos>
            </Card>

            <Card titulo = '#04 - Repetição' color = '#96ceb4'>
                <Repeticao/>
            </Card>

            <Card titulo = '#05 - Condicional (versão 1)' color = '#ff6f69'>
                <Condicional numero={10}/>
            </Card>

            <Card titulo = '#06 - Condicional (versão 2 - Com IF)' color = '#ffcc5c'>
                <CondicionalComIF numero={13}/>
            </Card>

            <Card titulo = '#07 - Comunicação Direta' color = '#96ceb4'>
                <Pai sobrenome = 'Neutzling'/>
            </Card>

            <Card titulo = '#08 - Comunicação Indireta' color = '#ff6f69'>
                <Super/>
            </Card>

            <Card titulo = '#09 - Input' color = '#ffcc5c'>
                <Input/>
            </Card>

            <Card titulo = '#10 - Contador (versão 1 - Algoritmo com apenas uma classe)' color = '#96ceb4'>
                <Contador step = {1}/>
            </Card>

            <Card titulo = '#11 - Contador (versão 2 - Algoritmo com mais classes)' color = '#ff6f69'>
                <Contador2 step = {1}/>
            </Card>

            <Card titulo = '#12 - Gerador de n˚ aleatórios da Mega Sena' color = '#ffcc5c'>
                <Mega quantidadeNumeros={8}/>
            </Card>
            
        </div>

    </div>