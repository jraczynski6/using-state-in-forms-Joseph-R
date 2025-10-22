Practice: Using State in Forms

Instructions

Create a dynamic user feedback form using controlled inputs in React. This activity
will reinforce the use of state to manage form data, capture user input with
onChange, and dynamically display the form data in real-time.

Tasks

Part 1: Create the Feedback Form

1. Set Up State
    ○ Initialize state for the user's name, email, and feedback using a single
formData object in the component.

2. Build the Form UI
    ○ Create input fields for the name, email, and feedback text (textarea).
    ○ Use the name attribute for each input to match the keys in formData
(e.g., name, email, feedback).
    ○ Use the onChange event to dynamically update state when users type
in the fields.

3. Add Real-Time Feedback Preview
    ○ Below the form, display the user’s inputs in real-time using the
formData state.

Part 2: Styling

1. Enhance Form Appearance
    ○ Use CSS to center the form and add padding, borders, and spacing for
a polished look.

2. Optional Features
    ○ Add a character counter below the feedback textarea.
    ○ Disable the "Submit" button if any field is empty.

1
Example User Experience
    1. The form has the following fields:
        ○ Name: A text input for the user's name.
        ○ Email: An email input for the user's email address.
        ○ Feedback: A textarea for feedback with a 200-character limit.
    2. As the user types, the state updates, and the real-time preview displays their
input below the form.

Deliverable, A functional feedback form that:

● Dynamically updates state using a single handleChange function.
● Displays the user’s input in real-time below the form.
● Is visually styled for a clean, user-friendly interface.