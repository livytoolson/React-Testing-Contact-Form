import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Component renders properly', () => {
    render(<ContactForm />)
})

test('Placeholders are rendered', () => {
    render(<ContactForm />);
    screen.getByPlaceholderText(/edd/i)
    screen.getByPlaceholderText(/burke/i)
  })

test('ContactForm elements are rendered', () => {
    render(<ContactForm />);
    screen.getByLabelText(/first name/i)
    screen.getByLabelText(/last name/i)
    screen.getByLabelText(/email/i)
    screen.getByLabelText(/message/i)
})

test('ContactForm adds new contacts to the list', () => {
    render(<ContactForm />);
    // type into all inputs
    // 1. query for all inputs
    // 2. run the change event to add text
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Events with RTL
    fireEvent.change(firstNameInput, { target: { value: 'Joe'} });
    // fireEvent.change(firstNameInput, { target: { value: 'John', name: 'firstName' } }); // throws an error because it is over 3 chars
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'joe@gmail.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello' } });

    expect(firstNameInput).toHaveValue('Joe');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('joe@gmail.com');
    expect(messageInput).toHaveValue('Hello');

    // click submit button
    // 1. query for the button
    // 2. run the click event on the button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // assert that any new contact is in the list
    // 1. query for the new contact text
    // 2. assert that it is being rendered
    expect(firstNameInput).toHaveValue('Joe');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('joe@gmail.com');
    expect(messageInput).toHaveValue('Hello');
})