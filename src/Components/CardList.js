import React from 'react';
import Card from './Card.js';

const CardList = ({ list }) => {
    return (
       <>
        {
        list.map((user, i) => {
        return (
             <Card 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email}
            picture={user.picture}
             />
            );
        })
        }
        </>
    );
}

export default CardList;