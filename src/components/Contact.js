import React, {useState, useEffect} from 'react'

export default function Contact() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <div className="contactcontainer">
            <div className='contact'>
                <h1 className="contact__heading">Get in touch</h1>
                {success && (
                    <p>Thanks for your message! </p>
                )}
                
                    <form
                    className='contact__form'
                        name="contact"
                        method="POST"
                        action="/contact/?success=true"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                        className='contact__form--input'
                        type="text"
                        name='name'
                        placeholder='Your name'/>
                    <input
                        type="email"
                        name='email'
                        className="contact__form--input"
                        placeholder='Your email' />
                    <textarea
                    name='message'
                    className="contact__form--textarea" />    


                        
                        
                        <div>
                        <button className="contact__form--submit" type="submit">Send</button>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}
