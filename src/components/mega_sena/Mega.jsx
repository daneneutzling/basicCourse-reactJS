import React, {useState} from 'react'

export default (props) => {
    const [num, setNum] = useState(Array(props.quantidadeNumeros).fill(0))

/*Gerar um novo n˚ que não esteja contido nesse Array que está sendo passado para a função*/
    function GerarNumNaoContido(array) {
        const min = 1
        const max = 60
        /*Cria um valor aleatório entre 1 e 60*/
        const novoNum = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNum) 
            ? GerarNumNaoContido(array) : novoNum
    }

    function GerarNum () {
        const novoArray = Array(props.quantidadeNumeros)
            .fill(0)
            /* (a) array atual retorna o array com o números [...a] */
            .reduce(a => [...a, GerarNumNaoContido(a)], [])
            /*Após gerar o Array completo, é passado o método sorte que ordena os 
            valores em ordem crescente (a - b) */
            .sort((a, b) => a - b)
        setNum(novoArray)    
    }

    return (
        <>
            <h3>Mega Sena</h3>
            <h4>{num.join(' ')}</h4>
            <button onClick={GerarNum}>Gerar n˚</button>
        </>
    );
}