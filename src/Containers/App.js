import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
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
        const {contacts, searchfield} = this.state;
        const filteredContacts = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(searchfield.toLowerCase())
         }) 
         return !contacts.length ?
        <h1 className='tc'>Loading</h1> :
        (
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

export default App
