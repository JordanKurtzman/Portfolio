const express = require('express')
const nodemailer = require('nodemailer');
const cors = require ('cors')



//Bodyparser
const app = express()
app.set('port', 8080)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())




app.post('/api/send', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    const output = `<p>You have new contact request<p>
                        <ul>
                            <li>Name: ${name}</li>
                            <li>Email: ${email}</li>
                            <li>Message: ${message}</li>
                        </ul>`

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jerad.medhurst82@ethereal.email',
            pass: 'xkBMf4UXTnzmZAkQQa'
        }
    });

    let mailOptions = {
        from: '"Nodemailer Contact <jerad.medhurst82@ethereal.email> ',
        to: 'jordankurtzman@gmail.com',
        subject: 'Contact Request',
        html: output
    }

    transporter.sendMail(mailOptions, (error,response) => {
        if(error){
            res.send(error)
        }else{
            res.send('Success')
        }
        
    })
    transporter.close()

})


