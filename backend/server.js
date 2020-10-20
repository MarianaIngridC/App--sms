const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const env = require('dotenv');
const twilio = require('twilio');
env.config();




// twilio requirements
const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const app = express();


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// welcome page for the server
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

// Twilio Text
// GET variables, passed via query string 
app.get('/send-text', (req, res) => {
    const { recipient, textmessage } = req.query;
    
    // Send text
    client.messages
    .create({
        body: textmessage,
        to: '+54' + recipient,
        from: '+15864744396'
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
