import React, { useState } from 'react'

export default props => {

    const [name, setName] = useState('Daniela')

    return (
        <> 
        <p>{name}</p>
{/* Para não haver erro de alteração de componente, deve-se tranformar o INPUT para ReadOnly
    OU fazer uso da função OnChange */}
            <input type="text" value={name}
                onChange={StateChange => setName(StateChange.target.value)}/>
        </>
    )
}
