
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event'
import {UserForm} from './UserForm';

test(" to shows two inputs field and a button", () => {
    render(<UserForm />)

    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

test("to call addUser function when form is submitted", () => {
    const mock = jest.fn();
    render(<UserForm  addUser={mock}/>)
    // find the two components
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });
    // simulate typing in name fields
    user.click(nameInput);
    user.keyboard('John Doe')
    // simulate typing in email fields
    user.click(emailInput);
    user.keyboard('john@gmail.com');
    // find the button
    const button = screen.getByRole('button');
    user.click(button)
    // assertion to make sure 'addUser' get called with email and password
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'John Doe' , email: 'john@gmail.com'})
})

