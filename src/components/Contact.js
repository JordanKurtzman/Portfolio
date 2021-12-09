
import React, {useRef, useState} from 'react'
import emailjs, {init} from 'emailjs-com'

init("user_v5fexTV1gh7MPcSZhLWXC")


const ContactForm = () => {

    const form = useRef()
    
    //Inputs
    const [inputs, setInput] = useState({
            name: '',
            email: '',
            message: '',
            sent: false
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

    //Form reset

    const resetForm = () => {
        return {
            name: '',
            email: '',
            message: '',
            sent: false
        }
    }

    //Submission

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_omhjqre', 'template_y517kc4', form.current, 'user_v5fexTV1gh7MPcSZhLWXC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    
    
    
    
    //Component lifecycle method
   
            
        

            return (<div className="contactcontainer">
                <div className="contact">
                    <h1 className="contact__heading">Get in touch</h1>

                    <form className="contact__form" ref={form}>
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