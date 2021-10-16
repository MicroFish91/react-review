import "./Contact.css";

const Contact = ({ contact }) => {
  return (
    <div className="Contact">
      <div>Name: {`${contact.firstName} ${contact.lastName}`}</div>
      <div>Phone Number: {contact.phoneNumber}</div>
    </div>
  );
};

export default Contact;
