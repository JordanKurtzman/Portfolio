
import React from 'react'
import axios from 'axios'


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false
        }
    }

    //handle inputs
    handleNameChange = (e) => {
        this.setState(() =>({name: e.target.value }))
    }
    handleEmailChange = (e) => {
        this.setState(() =>({email: e.target.value}))
    }
    handleMessageChange = (e) => {
        this.setState(() => ({ message: e.target.value }))
    }
    resetForm = () => {
        this.setState(() =>({name: '', email: '', message: ''}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        axios.post('/api/send', data).then(()=>{
            this.setState(()=> ({sent: true}), this.resetForm())
            console.log('submit')
        }).catch(() =>{
            console.log('not sent')
        })
    }

    
    
    
    
    //Component lifecycle method
    componentDidMount = () => {
        console.log('component mounted')
        this.setState(() => {
            return { name: '', email: '', message: '' }
        })
    }
        
            
        render()   {

            return (<div className="contactcontainer">
                <div className="contact">
                    <h1 className="contact__heading">Get in touch</h1>

                    <form className="contact__form" action={'/api/send'} onSubmit={((e) => handleSubmit(e))}>
                        <input

                            value={this.state.name}
                            onChange={this.handleNameChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your name"
                            required />

                        <input

                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            className="contact__form--input"
                            type="text"
                            placeholder="Your email"
                            required />

                        <label className="contact__form--label">Your message:</label>
                        <textarea
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                            className="contact__form--textarea"
                            type="textarea"
                            required />
                    </form>
                    <button className="contact__form--submit" type="submit">Submit</button>
                </div>
            </div>)
            
            
            
                
        }
    }


export default ContactForm