import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from '@/app/contact-us/Contact.module.scss'; // Adjust the import path as necessary

const ContactForm = () => {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
      <input type="hidden" name="access_key" value="443156e1-0dd8-4139-8ee2-d28cce007fb4"/>
      <input type="hidden" name="subject" value="New message from rgsroofingservices.co.uk"/>
      <input type="hidden" name="redirect" value="https://rgsroofingservicestemporary.netlify.app/contact-us?submitted=true"/>
      <input type="checkbox" name="botcheck" style={{display: 'none'}}/>

      <div className={styles.inputFieldFull}>
        <TextField fullWidth label="Full Name" variant="filled" type="text" name="name" required/>
      </div>
      <div className={`${styles.inputFieldHalf} ${styles.email}`}>
        <TextField fullWidth label="Email" type="email" variant="filled" name="email" placeholder="you@company.com" required/>
      </div>
      <div className={styles.inputFieldHalf}>
        <TextField fullWidth label="Phone number" type="tel" variant="filled" name="phone" required/>
      </div>
      <div className={`${styles.inputFieldFull} ${styles.message}`}>
        <TextField fullWidth label="Your message" multiline={true} rows={4} variant="filled" name="message" placeholder="Let us know how we can help." required/>
      </div>
      <div className={styles.inputFieldFull}>
        <Button fullWidth variant="contained" type="submit" className={styles.submit}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
