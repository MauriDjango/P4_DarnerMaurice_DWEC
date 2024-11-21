import React, { useState } from 'react';
import validation from '../../utils/utils';

/**
 * ContactForm Component
 *
 * This component renders a contact form that allows users to input their name, email,
 * and message. It includes form validation and error handling for invalid inputs.
 */
const ContactForm = () => {
    // State for managing form input values
    const [formData, setFormData] = useState({
        name: '',   // Stores the user's name
        email: '',  // Stores the user's email
        message: '' // Stores the user's message
    });

    // State for managing validation error flags for each input
    const [errors, setErrors] = useState({
        name: false,   // Tracks if the name input is invalid
        email: false,  // Tracks if the email input is invalid
        message: false // Tracks if the message input is invalid
    });

    /**
     * handleSubmit
     *
     * Event handler for form submission. Validates the form and either logs the data
     * to the console or alerts the user about invalid inputs.
     *
     * @param {Event} e - The form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if all fields are valid and non-empty before submission
        if (
            Object.values(errors).every((error) => error === false) && // No errors
            Object.values(formData).every((value) => value !== '')     // All fields filled
        ) {
            console.log('Form submitted:', formData); // Placeholder for form processing logic
        } else {
            alert('Invalid form'); // Alert the user about invalid inputs
        }
    };

    /**
     * handleFormData
     *
     * Updates the form data and validation error state based on user input.
     *
     * @param {Event} e - The input change event
     */
    function handleFormData(e) {
        const { name, value } = e.target; // Destructure the name and value from the input

        // Create copies of formData and errors to update state immutably
        const newFormData = { ...formData };
        const newErrors = { ...errors };

        // Update form data with the new value
        newFormData[name] = value;

        // Validate the input value and update the error state
        if (name === 'name') {
            newErrors[name] = !validation.name(value); // Validate name field
        } else if (name === 'email') {
            newErrors[name] = !validation.email(value); // Validate email field
        } else if (name === 'message') {
            newErrors[name] = !validation.notEmptyStr(value); // Validate message field
        }

        // Update the state with the new data and errors
        setFormData(newFormData);
        setErrors(newErrors);
    }

    /**
     * handleChange
     *
     * Event handler for input changes. Delegates to handleFormData to update state.
     *
     * @param {Event} e - The input change event
     */
    const handleChange = (e) => {
        handleFormData(e);
    };

    return (
        <div className="contact-us">
            <form className="contact-us__form" onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <img src={'/img/logo.svg'} alt="App logo" />

                {/* Name Input Field */}
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                />
                {errors.name && <span className="error">Invalid Name</span>}

                {/* Email Input Field */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                />
                {errors.email && <span className="error">Invalid Email</span>}

                {/* Message Textarea Field */}
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                ></textarea>
                {errors.message && <span className="error">Message cannot be empty</span>}

                {/* Submit Button */}
                <button className="contact-us__submit" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
