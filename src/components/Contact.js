import axios from 'axios';
import React from 'react'

export default class Contact extends React.Component {
    
    state = {
        name: '',
        email: '',
        message: '',
        error: ''
    }
    handleFormSubmit(){
        e.preventDefault()
        axios({
                method: "POST",
                url: "http://localhost:3002/send",
                data: this.state
            }).then((response) => {
                if (response.data.status === 'success') {
                    console.log("Message Sent.");
                    this.resetForm()
                } else if (response.data.status === 'fail') {
                    console.log("Message failed to send.")
                }
            })
        }
        render(){
            
        return   (<div>
                <h1>Contact</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form>
                    <input 
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}/>

                    <input
                    type="text"
                    placeholder="Your email"
                    value={this.state.email}/>

                    <label>Your message:</label>
                    <input
                    type="textarea"
                    value={this.state.message}/>
                </form>
            </div>)
                
        }
    }


