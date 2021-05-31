require('dotenv').config();
const axios = require('axios');

const body = {
  "personalizations": [
    {
      "to": [
        {
          "email": "amarmandal2073@gmail.com",
          "name": "Janice Doe"
        }
      ]
    }
  ],
  "from": {
    "email": "am02414718@student.ku.edu.np",
    "name": "Example Order Confirmation"
  },
  "reply_to": {
    "email": "am02414718@student.ku.edu.np",
    "name": "Example Customer Service Team"
  },
  "template_id": process.env.TEMPLATE_ID
}

const sendEmail = async () => {
  const baseUrl = "https://api.sendgrid.com/v3/mail/send";
  try {
    const { status, statusText } = await axios.post(baseUrl, body, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    });

    console.log(`Status: ${status} ${statusText}`);
  } catch (error) {
    const { response } = error;
    console.log(`Status: ${response.status} - ${response.statusText}`);
    console.log(response.data?.errors);
  }
}

sendEmail();