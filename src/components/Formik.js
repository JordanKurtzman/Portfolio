import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { values } from "regenerator-runtime";




const FormValidation = () => (
    
    Yup.object().shape({
        fullName: Yup.string().required('Required'),
        email: Yup.string().email().required('Please enter a valid email address'),
        message: Yup.string().required('Required')
    })
)

const Contact = () => {

    const resetForm = () => {
        return {
            fullName: '',
            email: '',
            message: '',
        }
    }
        
    
    
    return (
        <div className="contactcontainer">
        <div className="contact">
        <h1 className="contact__heading">Get in touch</h1>
        <Formik

        
                    
                    initialValues={{
                        fullName: '',
                        email: '',
                        message: '',
                        sent: false
                        
                    }}
                    onSubmit={(values, actions, {setSubmitting, resetForm, setStatus}) =>{
                        Email.send({
                            Host: 'smtp.mailtrap.io',
                            Username: '74439de659f812',
                            Password: '1894d104cda876',
                            To: 'jordankurtzman@gmail.com',
                            From: values.email,
                            Subject: "New contact form submission",
                            Body: `<p>You have a message from ${values.fullName} <${values.email}></p>
                            <p>${values.message}</p>`,
                        }).then(
                            message => console.log(message)
                        );
                        actions.setSubmitting(false)
                        console.log('submitting')
                        resetForm({})
                        
                        
                        
                    }
                    

                }
                    validationSchema={FormValidation}
        
        >
        {({errors, touched, handleSubmit, handleChange}) => (
        <Form className="contact__form">
            
            <input
                id="fullName"
                value={values.fullName}
                onChange={handleChange}
                name="fullName"
                type="text"
                placeholder="Your name"
                className="contact__form--input"
                
            />
            {errors.fullName && touched.fullName ? (<div><p>{errors.fullName}</p></div>): null}

            <input
                id="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Your email"
                className="contact__form--input"
                
            />
            <ErrorMessage name="email" />

            <label htmlFor="message" className="contact__form--label">Message:</label>
            <input

                id="message"
                value={values.message}
                onChange={handleChange}
                name="message"
                type="textarea"
                className="contact__form--textarea"
                
            />
            {errors.message && touched.message ? (<div><p>{errors.fullName}</p></div>): null}
            

            <button type="submit" className="contact__form--submit" onClick={handleSubmit}>Submit</button>
        </Form>
        )}
    </Formik>
    </div>
    
</div>
    );
};

    
export default Contact


    