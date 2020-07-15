import React, {Component} from 'react';
import './App.css';
import contactsData from './contacts.json';
import ContactList from './ContactList';


class App extends Component {

  state = {
    contacts: contactsData.slice(0,5),
  }

  addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const newActor = contactsData[randomIndex];

    this.setState((state, props) => ({
      contacts: state.contacts.concat(newActor)
    }))
  }

  sortName = () => {
    const sortByName = [].concat(this.state.contacts).sort((a,b) => {
      return a.name.localeCompare(b.name)})

    this.setState ((state, props) => ({
      contacts: sortByName
    }))
  }

  sortPopularity = () => {
    const sortByPop = [].concat(this.state.contacts).sort((a,b) => {
      return b.popularity - a.popularity})

    this.setState ((state, props) => ({
      contacts: sortByPop
    }))
  }

  deleteActor = () => {
    let index = 0;
    console.log(ContactList)
  }

  render () {
    return (

      <div className="ContactList">
        
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random actor</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <button onClick={this.deleteActor}>Text delete button</button>
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
