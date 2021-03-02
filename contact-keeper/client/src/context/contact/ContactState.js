import React, { useReducer } from "react";
import ContactContext from "./ContactContext";
import uuid from "uuid";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTERS,
} from "../Types";

const ContactState = (props) => {
  const initialstate = {
    contacts: [
      {
        id: 1,
        name: "Jill",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 2,
        name: "Sara",
        email: "sara@gmail.com",
        phone: "111-111-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry",
        email: "Harry@gmail.com",
        phone: "111-111-3333",
        type: "personal",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialstate);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        addContact,
        deleteContact,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
