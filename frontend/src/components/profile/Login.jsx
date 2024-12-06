import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../api/spotify_api/AuthApi'
import { spotify } from '../../api/spotify_api/SpotifyApi'


/**
 * ContactForm Component
 *
 * This component renders a contact form that allows users to input their name, email,
 * and message. It includes form validation and error handling for invalid inputs.
 */
const Login = () => {
  const handleSubmit = (values) => {
    console.log('handleSubmit called, Form data:', values);
    const {email, passoword} = values
    spotify.auth.handleAuthorizationFlow()
  }

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address') // Basic email validation
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        'Email must include a valid domain'
      ),
    password: Yup.string()

  });

  return (
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form submitted:', values);
          handleSubmit(values);
          setSubmitting(false); // Reset submission state
        }}
      >
        {({ isSubmitting }) => (
          <Form className="section">
            <h1>Contact Us</h1>
            <img src={'/img/logo.svg'} alt="App logo" />

            {/* Email Input Field */}
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="span" className="error" />

            {/* Password Input Field */}
            <label htmlFor="password">Password</label>
            <Field
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="span" className="error" />

            {/* Submit Button */}
            <button
              className="form__submit"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
  );
};

export default Login;
