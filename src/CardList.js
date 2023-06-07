import React from 'react';
import Card from './Card';
import { contacts } from './contacts.js';

const CardList = () => {
    return (
        <>
        {contacts.map((user, i) => {
        return (
             <Card 
            key={contacts[i].id} 
            id={contacts[i].id} 
            name={contacts[i].name} 
            email={contacts[i].email}
             />
            );
        })
        }
        </>
    );
}

export default CardList;