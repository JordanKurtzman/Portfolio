
import React, {useState} from 'react'

const ContactForm = () => {

    //Inputs
    const [inputs, setInput] = useState({
            name: '',
            email: '',
            message: '',
            showSuccess: undefined,
            formErrors: {
                name: '',
                email: '',
                message: ''
            }
        })   


    //OnChange handlers

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


    //Submission

    const handleSubmit = (e) => {


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
                setInput((inputs) => {
                    return {
                        ...inputs,
                        showSuccess: 'success'
                    }
                }),


            ).catch((error) => {
                console.log(error),
                    setInput((inputs) => {
                        return {
                            ...inputs,
                            showSuccess: 'error'
                        }
                    })
            })
            setInput((inputs) => {
                return {
                    ...inputs,
                    name: '',
                    email: '',
                    message: '',
                }
            })

        


        

        
    }

    
   

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
                            required
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
                             />
                    </form>
                    
                    <button className="contact__form--submit" type="submit" onClick={(e) => {
                        handleSubmit(e);
                    }}>Submit</button>
                </div>
            </div>)
            
            
            
                
        }

  
    
export default ContactForm

