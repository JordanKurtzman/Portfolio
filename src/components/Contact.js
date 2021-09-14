import axios from 'axios';
import React from 'react'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
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
    }


