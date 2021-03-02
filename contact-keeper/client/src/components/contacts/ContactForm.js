import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) setContact(current);
    else setContact({ name: "", email: "", phone: "", type: "personal" });
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      ></input>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      ></input>{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      ></input>{" "}
      Professional{" "}
      <div>
        <input
          type="submit"
          value={current ? "Edit Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        ></input>
      </div>
      {current && (
        <div className="btn btn-light btn-block" onClick={clearAll}>
          Clear
        </div>
      )}
    </form>
  );
};
export default ContactForm;
