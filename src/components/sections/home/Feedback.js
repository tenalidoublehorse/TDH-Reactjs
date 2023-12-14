import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import {  FormControl ,Button} from 'react-bootstrap';




const FeedbackDrawer = () => {
  
  const [showDrawer, setShowDrawer] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };
   

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    const formData = {
        fullName,
        email,
        phoneNumber,
        message,
      };
      const serviceId = 'service_u0jehlt';
      const templateId = 'template_aamrei5';
      const userId = 'cjCRUWDX0cKAQSKL6'; // Your public key
    
      emailjs.send(serviceId, templateId, formData, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert("Message successfully sent!");
          // Show success message or take other actions as needed
        })
        .catch((error) => {
          console.error('Email sending error:', error);
          // Show error message or take other actions as needed
        });
      // Perform your API call or form submission logic here
      // For simplicity, we'll just log the form data to the console
      
    
      // Reset the form fields after submission
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    
      
      setShowDrawer(false)
  };

  return (
    <div>
      <style>
        {/* Include the CSS styles here using React's inline style syntax */}
        {`
          /* Your CSS styles go here */
        `}
      </style>
      <div id="feedbackDrawer" className={showDrawer ? 'showDrawer' : ''}>
        {/* Feedback Form */}
        <div id="feedbackForm">
        <Form onSubmit={handleSubmitFeedback}>
  <h2>Submit Feedback</h2>
  
  <Form.Group controlId="fullName" style={{ marginBottom: '15px' }}>
    <Form.Control
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      placeholder="Full Name"
      isInvalid={!/^[A-Za-z ]+$/.test(fullName) && fullName.length > 0} // Validation using regular expression
      required
    />
    <FormControl.Feedback type="invalid">
      Please enter a valid full name.
    </FormControl.Feedback>
  </Form.Group>

  <Form.Group controlId="email" style={{ marginBottom: '15px' }}>
    <Form.Control
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      isInvalid={!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email.length > 0}
      required
    />
    <FormControl.Feedback type="invalid">
      Please enter a valid email address.
    </FormControl.Feedback>
  </Form.Group>

  <Form.Group controlId="phoneNumber" style={{ marginBottom: '15px' }}>
    <Form.Control
      type="tel"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      placeholder="Phone Number"
      isInvalid={!/^[0-9()+\-\s]*$/.test(phoneNumber) && phoneNumber.length > 0}
      maxLength="14"
      required
    />
    <FormControl.Feedback type="invalid">
      Please enter a valid phone number.
    </FormControl.Feedback>
  </Form.Group>

  <Form.Group controlId="message" style={{ marginBottom: '15px' }}>
    <Form.Control
      as="textarea"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Message"
      rows="5"
      isInvalid={!/^[A-Za-z ]+$/.test(message) && message.length > 0}
      required
    />
    <FormControl.Feedback type="invalid">
      Please enter a valid message (only letters, commas, and periods are allowed).
    </FormControl.Feedback>
  </Form.Group>

  <Button type="submit" className="btn-custom btn-sm primary">
    Send Message
  </Button>
</Form>
        </div>
        {/* Success Message */}
        <div id="feedbackSuccess">
          <h2>Thank You</h2>
          <p>Your feedback was successfully submitted</p>
          <button onClick={handleShowDrawer}>Submit More Feedback</button>
        </div>
        {/* Error Message */}
        <div id="feedbackError">
          <h2>Aw, Snap!</h2>
          <p>There was an error submitting your feedback</p>
          <button onClick={handleShowDrawer}>Try Again</button>
        </div>
        {/* Feedback Trigger */}
        <div id="feedbackTrigger" onClick={handleShowDrawer}>
       Feedback
          <span id="close">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDrawer;
