import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {
    return (
        <div className='tc dib pa3 br3 ma2 grow bw2 shadow-1'>
            <img alt='contactphoto' src={`https://robohash.org/${id}?set=set5`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;