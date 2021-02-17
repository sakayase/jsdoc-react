import React from 'react'

/**
 * Renders a Counter component
 * 
 * @component
 * @param {Number} props.nb mon nombre 
 * 
 * @example
 * <Counter nb="3" />
 */
function Counter(props) {
    return (
        <div>
            Cliqué {props.nb} fois
        </div>
    )
}

export default Counter;