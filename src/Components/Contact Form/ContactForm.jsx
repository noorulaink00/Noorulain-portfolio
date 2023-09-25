import React,{useState} from 'react';
import { Container, TextField, Button, Typography, Paper , Grid} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';

function ContactForm() {
  const containerStyle = {
    background: `url('images/contact.jpg')`,
     backgroundRepeat:'none', // Replace with the path to your background image
    backgroundSize: 'cover',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:'none',
  };

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  emailjs.init('97hCRzA1Tp9pvlpl9');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_i0nj0ng', 'template_5g60oc7', {
        from_name: senderName,
        message: message,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

// Assuming you have a form with input fields for sender name, sender email, and message
const handleSubmit = (e) => {
  e.preventDefault();
  
  const senderName = e.target.elements.sender_name.value; // Assuming the input field has name="sender_name"
  const senderEmail = e.target.elements.sender_email.value; // Assuming the input field has name="sender_email"
  const message = e.target.elements.message.value; // Assuming the input field has name="message"

  // Call the sendEmail function with the form data
  sendEmail(e, senderName, senderEmail, message);
};


  return (
    <div style={containerStyle} id="contact">
      <Container maxWidth="sm" >
        <Paper className="formContainer" elevation={3} style={{background:'transparent', boxShadow:'none'}}>
          {/*<Typography variant="h4" align="center" gutterBottom>
            Contact Me
  </Typography>*/}
          <div className="service-heading">
  <h2 className='text'>Contact</h2>
  <div className="line"></div>
</div>
<form onSubmit={sendEmail}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
          <Grid item xs={12} align="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              style={{ width: '50%', backgroundColor: '#420d50', marginTop:"20px" }}
            >
              Send Email
            </Button>
          </Grid>
      </form>
  
        </Paper>
      </Container>
    </div>
  );
}

export default ContactForm;
