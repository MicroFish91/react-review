import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../../redux/contacts/contactSlice";

const PhoneForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      addContactAction({
        firstName,
        lastName,
        phoneNumber,
      })
    );
    resetForm();
  };

  return (
    <form onSubmit={submitForm}>
      <label for="firstName">First name:</label>
      <br />
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        id="firstName"
        name="firstName"
      />
      <br />
      <label for="lastName">Last name:</label>
      <br />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        id="lname"
        name="lname"
      />
      <br />
      <label for="lname">Phone:</label>
      <br />
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="text"
        id="lname"
        name="lname"
      />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default PhoneForm;
