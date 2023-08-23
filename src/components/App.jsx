import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  hendleSubmit = newContact => {
    const isExist = this.state.contacts.find(
      ({ number }) => number === newContact.number
    );
    if(isExist){
      alert('contact already exists')
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  hendleDelitContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idContact),
    }));
  };

  render() {
    const {contacts} = this.state;
    return (
      <>
        <Form onSubmit={this.hendleSubmit} />
        <h3>Contacts</h3>
        <ContactsList contacts = {contacts} deleteContacts = {this.hendleDelitContact}/>
     
      </>
    );
  }
}
