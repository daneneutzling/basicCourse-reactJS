import React from 'react'
import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParamentro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIF from './components/basics/CondicionalComIF'

export default props =>
    <div className='App'>
        <Card titulo = '#01 - Primeiro componente'>
            <Primeiro/  >
        </Card>

        <Card titulo = '#02 - Componente com parâmetro'>
        <ComParametro titulo = "Este é o título"
                      subtitulo = "Este é o subtítulo"/>
        </Card>

        <Card titulo = '#03 - Componente com filhos'>
        <ComFilhos>
            <ul>
                <li>Daniela</li>
                <li>Henrique</li>
                <li>Cacau</li>
                <li>Kica</li>
            </ul>
        </ComFilhos>
        </Card>

        <Card titulo = '#04 - Repetição'>
            <Repeticao/>
        </Card>

        <Card titulo = '#05 - Condicional (versão 1)'>
            <Condicional numero={10}/>
        </Card>

        <Card titulo = '#06 - Condicional (versão 2 - Com IF)'>
            <CondicionalComIF numero={13}/>
        </Card>

    </div>