import React from 'react'
import { Form, Field, ErrorMessage, Formik } from 'formik';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


const Contact = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
            
        }}
        initialStatus={{
            sent: undefined,
            error: undefined
        }}
        onSubmit={
            (values, actions) => {
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact", ...values })
                })
                    .then(() => {
                        console.log('Success');
                        actions.resetForm()
                        actions.setStatus({
                            sent: true,
                            error: false
                        })
                    })
                    .catch(() => {
                        console.log('Error');
                        actions.setStatus({
                            sent: false,
                            error: true
                            
                        })
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
    >
    
        {({ handleSubmit, handleChange, handleBlur, values, status, submitCount}) => (
        <div className="contactcontainer">
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                    {status && status.sent ? (
                        <p>Thanks for reaching out!</p> ) : 
                        null
                    }
                    {status && status.error ? (
                        <p>There was an error sending your message.</p>) :
                        null
                    }
                <Form
                    className='contact__form'
                    name="contact"
                    action="/contact/?success=true"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <Field
                        className='contact__form--input'
                        type="text"
                        name='name'
                        placeholder='Your name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    <ErrorMessage name="name" 
                            render={msg => <div className="contact__form--error">{msg}</div>} />

                    <Field
                        type="email"
                        name='email'
                        className="contact__form--input"
                        placeholder='Your email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    <ErrorMessage name="email"
                            render={msg => <div className="contact__form--error">{msg}</div>}/>
                    <label className="contact__form--label">Your message:</label>    
                    <Field
                        as='textarea'
                        name='message'
                        className="contact__form--textarea"
                        value={values.message}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                    <ErrorMessage name="message"
                            render={msg => <div className="contact__form--error">{msg}</div>}/>

                    <div>
                        <button className="contact__form--submit" type="submit">Send</button>
                    </div>
                </Form>

            </div>
        </div>

        )}
    </Formik>
        
    
  
    
)

export default Contact