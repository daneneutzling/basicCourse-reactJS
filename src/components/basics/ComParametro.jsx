import React from 'react'

export default (props) => {
//Propriedades React JS são imutáveis;
//Props é somente para leitura!
    //props.titulo = 'Outro título'
    return (
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>
    )
}
    

    