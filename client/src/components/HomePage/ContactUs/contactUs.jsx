import React from 'react'
import './contactUs.css'
function ContactUs() {
  return (
    <div id='cnt-section'>
    <div className='contact-section'>
      <h1>Reach Us</h1>
      <div className="contact-content">
      <p>If you have any questions or inquiries, feel free to get in touch with us. We're here to help!</p>
          <p>You can reach out to us through the following channels:</p>
          <ul>
            <li>Email: info@gifty.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Social Media: <a href="https://www.facebook.com/gifty" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.twitter.com/gifty" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
          <p>We look forward to hearing from you!</p>
      </div>
      
    </div>
    
    </div>
  )
}

export default ContactUs