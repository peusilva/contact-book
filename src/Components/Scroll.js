import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid gray', height: '75vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll;