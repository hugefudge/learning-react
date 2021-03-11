import React from 'react';

// Component with children

export default props => {

    return (
        <>
        { React.Children.map(props.children, (child) => {
            return React.cloneElement(child, props)
        })}
        </>
    )
}