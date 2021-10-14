import React from "react";
import AddressBook from "../../components/AddressBook";
import Phone from "../../components/forms/Phone";
import CardLayout from "../../Layouts/CardLayout";

const Home = () => {
  return (
    <>
      <CardLayout>
        <Phone />
      </CardLayout>
      <CardLayout>
        <AddressBook />
      </CardLayout>
    </>
  );
};

export default Home;
