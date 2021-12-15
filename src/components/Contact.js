import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'




const schema = yup.object({
    firstName: yup.string().required(),
    email: yup.string().email().required()
}).required();

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful, isSubmitted, errors } } = useForm({
        
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },
        
    })

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
            reset()
            
            

        ).catch((error) => {
            console.log(error),
            
            reset()
            

    })

    return (

        <div className='contactcontainer'>
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                {isSubmitSuccessful && <p>Thank you for your submission!</p>}
                {(!isSubmitSuccessful && isSubmitted) && <p>There was an error in submitting your form - please try again.</p>}
                    <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>

                        <input  {...register('name', {required: true})} id='name' className="contact__form--input"/>
                        {errors.name?.type === 'required' && <p>Name is required</p>}
                        <input {...register('email', { required: true, pattern: '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'})} id='email' className="contact__form--input"/>
                        {errors.email?.type === 'required' && <p>Email is required</p>}   
                        {errors.email?.type === 'pattern' && <p>Please enter a valid email</p>} 
                        <textarea {...register('message')} id='message' className="contact__form--textarea"/>
                    <button type="submit" className="contact__form--submit">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default ContactForm