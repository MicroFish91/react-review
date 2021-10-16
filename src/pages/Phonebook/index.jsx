import AddressBook from "../../components/AddressBook";
import PhoneForm from "../../components/forms/PhoneForm";
import CardLayout from "../../Layouts/CardLayout";

const Phonebook = () => {
  return (
    <>
      <CardLayout>
        <PhoneForm />
      </CardLayout>
      <CardLayout>
        <AddressBook />
      </CardLayout>
    </>
  );
};

export default Phonebook;
