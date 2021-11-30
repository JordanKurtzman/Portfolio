
import React, { useState } from 'react'
import firebaseDB from '../firebase/firebase'


const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const { name, email, message } = state
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !message){
            console.log('error!')
        }else{
            firebaseDB.child('contacts').push(state)
            setState({name: '', email: '', message: ''}),
            console.log('success!')
        }
    }
    const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value})
    }
    const handleEmailChange = (e) => {
        setState({ ...state, email: e.target.value })
    }
    const handleMessageChange = (e) => {
        setState({ ...state, message: e.target.value })
    }
        
            
        return   (
            <div className="contactcontainer">
                <div className="contact">
                    <h1 className="contact__heading">Get in touch</h1>
                    
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <input
                            
                            value={name}
                            onChange={handleNameChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your name"
                            required/>

                        <input
                            
                            value={email}
                            onChange={handleEmailChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your email"
                            required />

                        <label className="contact__form--label">Your message:</label>
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            className="contact__form--textarea"
                            type="textarea"
                            required />
                    </form>
                    <button className="contact__form--submit" type="submit">Submit</button>
                </div>
            </div>
            
            )
                
        
    }


export default ContactForm