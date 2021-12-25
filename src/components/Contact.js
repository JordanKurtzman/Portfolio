import React, {useState, useEffect} from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik';

export default Contact = (props) => {
    <Formik

        initialValues={{
            name: '',
            email: '',
            message: ''
        }}
        onSubmit={
            (values, actions) => {
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact", ...values })
                })
                    .then(() => {
                        alert('Success');
                        actions.resetForm()
                    })
                    .catch(() => {
                        alert('Error');
                    })
                    .finally(() => actions.setSubmitting(false))
            }
            
        }
        validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
                errors.name = 'Name Required'
            }
            if (!values.email || !emailRegex.test(values.email)) {
                errors.email = 'Valid Email Required'
            }
            if (!values.message) {
                errors.message = 'Message Required'
            }
            return errors;
        }}

    
    
    />
        {props => (
        <div className="contactcontainer">
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                {success && (
                    <p>Thanks for your message! </p>
                )}

                <Form
                    className='contact__form'
                    name="contact"
                    action="/contact/?success=true"
                    data-netlify="true"
                    onSubmit={props.handleSumbit}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <Field
                        className='contact__form--input'
                        type="text"
                        name='name'
                        placeholder='Your name'
                        value={props.values.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                    <ErrorMessage name="name" />

                    <Field
                        type="email"
                        name='email'
                        className="contact__form--input"
                        placeholder='Your email'
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        />
                    <ErrorMessage name="email" />
                    <Field
                        as='textarea'
                        name='message'
                        className="contact__form--textarea"
                        value={props.values.message}
                        onChange={props.handleChange} 
                        onBlur={props.handleBlur}
                        />
                    <ErrorMessage name="message" />




                    <div>
                        <button className="contact__form--submit" type="submit">Send</button>
                    </div>
                </Form>

            </div>
        </div>

        )}

    
        
    
}
