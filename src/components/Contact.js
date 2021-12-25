import React from 'react'
import { useForm } from 'react-hook-form'
import { useNetlifyForm, NetlifyFormProvider, NetlifyFormComponent, Honeypot } from 'react-netlify-forms'

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful, isSubmitted, errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        
    })
    const netlify = useNetlifyForm({
        name: 'react-hook-form',
        action: '/thanks',
        honeypotName: 'bot-field',
        onSuccess: (response, context) => {
            console.log('Successfully sent form data to Netlify server')
        }
    })
    const onSubmit = (data) => netlify.handleSubmit(null, data).then(() =>{
        console.log('submitted'),
        reset()
    })


    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

    

    // const onSubmit = (data) =>    
    //     Email.send({
    //         Host: 'smtp.mailtrap.io',
    //         Username: process.env.MAILTRAP_USERNAME,
    //         Password: process.env.MAILTRAP_PASSWORD,
    //         To: process.env.RECEIVER_EMAIL,
    //         From: data.email,
    //         Subject: "New contact form submission",
    //         Body: `<p>You have a message from ${data.name} <${data.email}></p>
    //                         <p>${data.message}</p>`,
    //     }).then(
    //         message => console.log(message),
    //         reset()
            

    //     ).catch((error) => {
    //         console.log(error),
    //         reset()
            

    // })

    return (

        <div className='contactcontainer'>
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                
                <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent className='contact__form' onSubmit={handleSubmit(onSubmit)}>
                        <Honeypot/>
                        {netlify.success && <p>Thank you for reaching out!</p>}
                        {(!isSubmitSuccessful && isSubmitted) && <p>There was an error in submitting your form - please try again.</p>}
                            <input  
                            {...register('name', 
                            { required: true })}
                            id='name' className="contact__form--input" />
                            {errors.name?.type === 'required' && <p>Name is required</p>}
                            
                            <input 
                            
                            {...register('email', 
                            { required: true, 
                                pattern: '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/' })}
                                id='email'
                                className="contact__form--input" />
                            {errors.email?.type === 'required' && <p>Email is required</p>}
                            {errors.email?.type === 'pattern' && <p>Please enter a valid email</p>}
                            <textarea {...register('message')} id='message' className="contact__form--textarea" />
                            <button type="submit" className="contact__form--submit">Submit</button>
                    </NetlifyFormComponent>    
                </NetlifyFormProvider>
            </div>
        </div>
    )
}

export default ContactForm