import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
import Email from "https://smtpjs.com/v3/smtp.js";

export default function contact() {
  return (
    <>
    <section className='contact' id='contact'>
    
        <div className='main-text'>
         <h2>Contact Me</h2>
        

        <div className='contact-left'>
           <h4>Let's Work Together</h4>
          <ListGroup class="p-3 mb-2 bg-transparent text-dark">
          <ListGroup.Item><box-icon name='phone' type='solid' color='#0eec10' ></box-icon> <span>+91-7042533175</span> </ListGroup.Item>
          <ListGroup.Item><box-icon name='envelope' type='solid' color='goldenrod' ></box-icon>       adibasadaf300@gmail.com</ListGroup.Item>
          <ListGroup.Item><a href="https://www.linkedin.com/in/adiba-sad-85ba401ba/"><box-icon name='linkedin' type='logo' color='#0072b1' ></box-icon></a>  www.linkedin.com/in/adiba-sad-85ba401ba/ </ListGroup.Item>
          <ListGroup.Item><a href="https://github.com/Adibasad"><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a   >github.com/Adibasad</ListGroup.Item>
         </ListGroup>
       </div>
       </div>

       <div className='contact-right'>
            <form action="" onSubmit='sendMail(); reset(); return false;'>
                <input type="text" placeholder='Enter Your Name' required></input>
                <input type="email" placeholder='Enter Your Email' required></input>
                <input type="text" id="subject" placeholder='Enter Your Subject'></input>
                <textarea name="" id="message" cols="40" rows="10" placeholder='Enter Your Message'></textarea>
                <input type="submit" class="send" value="Send"></input>
            </form>
       </div>

    </section>
    </>
  )

  function sendMail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "adibasadaf3000@gmail.com",
      Password : "password",
      To : 'adibasadaf3000@gamil.com',
      From : document.getElementById("email"),
      Subject : document.getElementById("subject"),
      Body : document.getElementById("message")
  }).then(
    message => alert("submitted")
  );
  }
}
 