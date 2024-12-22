import React from 'react'
import './Main.css'
const Footer = () => {
  return (
    <footer className='contact-footer'>
        <div className='contact-block'>
            <h2 className='contact-heading'>Contact Info</h2>
                <p className='contact-description'>
                    If you have any questions or need assistance, feel free to reach out to us. 
                </p>
                <p className='contact-phone'>
                    <strong>Phone:</strong> 📞 <a href="tel:+917075603655">7075603655</a>
                </p>
                <p className='contact-email'>
                    <strong>Email:</strong> ✉️{" "}
                    <a className='contact-link' href="mailto:nithinsibbala227@gmail.com">nithinsibbala227@gmail.com</a>
                </p>
                <p className='contact-address'>
                    <strong>Address:</strong>🏠#9-711 Kotha Kota Street, Piler, Chittoor(dist.,), Andhra Pradesh
                </p>
        </div>

        <div className='contact-block'>
            <h2 className='contact-heading'>Follow Us</h2>
            <p className='contact-follow'>
                <a className='contact-link' href="www.linkedin.com/in/nithin-sibbala-b800a7246">Linkedin</a>
            </p>
        </div>
        <div className='contact-block'>
            <h2 className='contact-heading'>Business Hours</h2>
            <p className='Business-hours'>Mon-Fri: 9AM - 5PM</p>
            <p className='Business-hours'>Sat-Sun: Closed</p>
        </div>
    </footer>
  )
}

export default Footer
