import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { ContactsContainer } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContactsContainer>
  );
};

export default Contacts;
