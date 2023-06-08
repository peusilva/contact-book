import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response => response.json())
        .then(users => this.setState({ contacts: users }))
        }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
    }

    render () {
        const filteredContacts = this.state.contacts.filter(contacts => {
            return contacts.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
         }) 
         if (this.state.contacts.length === 0) {
            return <h1 className='tc'>Loading</h1>
         } else {
    return (
        <>
        <div className='tc'>
            <div className='header'>
        <h1 className='tc'>Contact Book</h1>
        <SearchBox searchChange={this.onSearchChange}/>
            </div>
            <Scroll>
        <CardList list={filteredContacts} />
            </Scroll>
        </div>
        </>
    )
    }
}
}

export default App
