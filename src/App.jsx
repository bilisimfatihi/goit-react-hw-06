import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";

import ContactsFrom from "./components/ContactsForm/ContactsFrom";
import SearchBox from "./components/SearchBox/SearchBox";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>İletişim Kitabı</h1>
      <ContactsFrom />
      <SearchBox />
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default App;
