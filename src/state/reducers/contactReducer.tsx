import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  updateContact,
  editContact, // Import editContact
} from '../action-creators/contactActions'; // Adjust the path accordingly

import { Contact, UpdatedContact } from '../action-creators/contactActions';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action: PayloadAction<string>) => {
      const contactIdToDelete = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== contactIdToDelete);
    })
    .addCase(updateContact, (state, action: PayloadAction<UpdatedContact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);

      if (index !== -1) {
        state.contacts[index] = {
          ...state.contacts[index],
          ...action.payload,
        };
      }
    })
    .addCase(editContact, (state, action: PayloadAction<UpdatedContact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);

      if (index !== -1) {
        state.contacts[index] = {
          ...state.contacts[index],
          ...action.payload,
        };
      }
    });
});

export default contactReducer;
