import React from 'react'

export default (props) => {

    return (
        <div>
            <input type="number"
                value={props.step}
                onChange={(stepChange) => props.onStepChange(+stepChange.target.value)}
            />
        </div>
    )
}
