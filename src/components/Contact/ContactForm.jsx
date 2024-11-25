import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For schema-based validation

/**
 * ContactForm Component
 *
 * This component renders a contact form that allows users to input their name, email,
 * and message. It includes form validation and error handling for invalid inputs.
 */
const ContactForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
    email: Yup.string()
    .email('Invalid email address') // Basic email validation
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            'Email must include a valid domain'
        ),
    message: Yup.string()
    .min(5, 'Message must be at least 5 characters')
    .required('Message cannot be empty'),
  });

  return (
      <div className="contact-us">
        <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Form submitted:', values);
              setSubmitting(false); // Reset submission state
            }}
        >
          {({ isSubmitting }) => (
              <Form className="contact-us__form">
                <h1>Contact Us</h1>
                <img src={'/img/logo.svg'} alt="App logo" />

                {/* Name Input Field */}
                <label htmlFor="name">Name</label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="span" className="error" />

                {/* Email Input Field */}
                <label htmlFor="email">Email</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="span" className="error" />

                {/* Message Textarea Field */}
                <label htmlFor="message">Message</label>
                <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                />
                <ErrorMessage name="message" component="span" className="error" />

                {/* Submit Button */}
                <button
                    className="contact-us__submit"
                    type="submit"
                    disabled={isSubmitting}
                >
                  Send
                </button>
              </Form>
          )}
        </Formik>
      </div>
  );
};

export default ContactForm;
