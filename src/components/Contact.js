import React from 'react'
import { appendErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
    firstName: yup.string().required('Name is required'),
    email: yup.string().email().required('Please enter a valid email address')
}).required();

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => 
        
        Email.send({
            Host: 'smtp.mailtrap.io',
            Username: '74439de659f812',
            Password: '1894d104cda876',
            To: 'jordankurtzman@gmail.com',
            From: data.email,
            Subject: "New contact form submission",
            Body: `<p>You have a message from ${data.name} <${data.email}></p>
                            <p>${data.message}</p>`,
        }).then(
            message => console.log(message),
            reset(),
            console.log('submitting')

        ).catch((error) => {
            console.log(error),
            reset()

    })

    return (
        <div className='contactcontainer'>
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>
                    <input  {...register('name')} id='name' className="contact__form--input"/>
                    <input {...register('email')} id='email' className="contact__form--input"/>
                            
                    <textarea {...register('message')} id='message' className="contact__form--textarea"/>
                    <button type="submit" className="contact__form--submit">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default ContactForm