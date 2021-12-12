
import React, {useRef, useState} from 'react'
import * as Yup from 'yup'
import process from 'process'




const ContactForm = () => {

    const form = useRef()
    
    //Inputs
    const [inputs, setInput] = useState({
            name: '',
            email: '',
            message: '',
            showSuccess: undefined
        })


    const handleNameChange = (e) => {
    
        setInput((inputs) => ({
            ...inputs,
            name: e.target.value,
        }));
    };

    const handleEmailChange = (e) => {

        setInput((inputs) => ({
            ...inputs,
            email: e.target.value,
        }));
    };

    const handleMessageChange = (e) => {

        setInput((inputs) => ({
            ...inputs,
            message: e.target.value,
        }));
    };

    

    //Form validation

    let validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        message: Yup.string().required()
    })

    //Submission

    const handleSubmit = (e) => {
        e.preventDefault()
        Email.send({
            Host: 'smtp.mailtrap.io',
            Username: '74439de659f812',
            Password: '1894d104cda876',
            To: 'jordankurtzman@gmail.com',
            From: inputs.email,
            Subject: "New contact form submission",
            Body: `<p>You have a message from ${inputs.name} <${inputs.email}></p>
                            <p>${inputs.message}</p>`,
        }).then(
            message => console.log(message),
            setInput((inputs) =>{
                return {
                    ...inputs,
                    showSuccess: 'success'
                }
            }),


        ).catch((error) =>{
            console.log(error),
            setInput((inputs) =>{
                return {
                    ...inputs,
                    showSuccess: 'error'
                }
            })
        })
        setInput((inputs) =>{
            return {
                ...inputs,
                name: '',
                email: '',
                message: '',
            }
        })

        
    }

    //Recaptcha
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }

    
    
    
    
    //Component lifecycle method
   
            
        

            return (<div className="contactcontainer">
                <div className="contact">
                    <h1 className="contact__heading">Get in touch</h1>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        {inputs.showSuccess === 'success' && <p>Thank you for your submission!</p>}
                        {inputs.showSuccess === 'error' && 'error' && <p>There was an error in submitting your form - please try again.</p>}
                        <input
                            name="name"
                            value={inputs.name}
                            onChange={handleNameChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your name"
                            required />

                        <input
                            name="email"
                            value={inputs.email}
                            onChange={handleEmailChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your email"
                            required />

                        <label className="contact__form--label">Your message:</label>
                        <textarea
                            name="message"
                            value={inputs.message}
                            onChange={handleMessageChange}
                            className="contact__form--textarea"
                            type="textarea"
                            required />
                    </form>
                    
                    <button className="contact__form--submit" type="submit" onClick={(e) => {
                        handleSubmit(e);
                    }}>Submit</button>
                </div>
            </div>)
            
            
            
                
        }
    
export default ContactForm

