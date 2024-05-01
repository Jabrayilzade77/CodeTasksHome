import React from 'react'
import "./Contact.scss"

function Contact() {
  return (
    <>
       <section className="contact_hero">
            <div className="about_me">
                <h2>Contact Me</h2>
                <span>Have questions? I have answers.</span>
            </div>
        </section>

        <section className="form_section">
            <div className="container__">
            <div className="form_text">
                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
            </div>
            <div className="form_container">
                <form action="#">
                 <div>
                    <div>
                      <input type="text" placeholder="Name" required></input>
                    </div>
                    <div>
                      <input type="email" placeholder="Email address" required></input>
                    </div>
                    <div>
                      <input type="tel" placeholder="Phone number" required></input>
                    </div>
        
                    <div>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>  
                  <div>
                    
                    <button className="button button1">Send</button>
                  </div>
                </div>
                </form>
              </div>
</div>
        </section>
    
    </>
  )
}

export default Contact