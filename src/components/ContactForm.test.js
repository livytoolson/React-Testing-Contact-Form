

import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('ContactForm adds new contacts to the list', () => {
    render(<ContactForm />);
    // type into all inputs
    // 1. query for all inputs
    // 2. run the change event to add text
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailNameInput = screen.getByLabelText(/email/i);
    const messageNameInput = screen.getByLabelText(/message/i);



    // click submit button
    // 1. query for the button
    // 2. run the click event on the button



    // assert that any new contact is in the list
    // 1. query for the new contact text
    // 2. assert that it is being rendered
})