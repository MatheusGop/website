import React from 'react';

const Card = (props) => {
    return (
        <div id={props.id} style={props}>
            {props.children}
        </div>
    );
}

export default Card;