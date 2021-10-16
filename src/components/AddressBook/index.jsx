import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./AddressBook.css";
import Contact from "./Contact/";

const AddressBook = () => {
  const phoneBook = useSelector((state) => state.contacts.phoneBook);

  return (
    <div className="AddressBook">
      <h1>Phone Book</h1>
      <div className="contacts">
        {phoneBook.map((contact) => {
          return <Contact contact={contact} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
};

export default AddressBook;
