import React, { Component } from 'react';
import CardList from './CardList.js';
import { contacts } from './contacts.js';
import SearchBox from './SearchBox.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
    }

    render () {
        const filteredContacts = this.state.contacts.filter(contacts => {
            return contacts.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
         }) 
    return (
        <>
        <div className='tc'>
            <div className='header v-mid'>
        <h1 className='tc'>Contact Book</h1>
        <SearchBox searchChange={this.onSearchChange}/>
            </div>
        <CardList list={filteredContacts} />
        </div>
        </>
    )
}
}

export default App
