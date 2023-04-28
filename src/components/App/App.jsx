import { Component } from "react";
import { Container } from "./App.styled";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactsList from "components/ContactsList/ContactsList";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  handleContactSubmit = data => {
    // console.log(data);
    // console.log(this.state.contacts);
  
    for (const contact of this.state.contacts) {
      if (data.name === contact.name) {
        return alert(`Контакт з імʼям ${data.name} вже існує`);
      } else if (data.number === contact.number) {
        return alert(`Контакт з номером ${data.number} вже існує`);
      }
    }

   
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    return (
      <Container>  
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />

        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onFilter={this.onFilter} />
          <ContactsList
            contacts={this.getVisibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
}
}

export default App;
