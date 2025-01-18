import React from 'react'
import './Register.css'
const Register = () => {

  // const sendMessage = () => {

  // };

  return (
    <>
    <div className="register_container">
        <div className="register_form">
            <h3>Start Your Free Trial</h3>
            <p>Sign up today and explore all features at no cost!</p>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <div className="register_phone">
            <select name="" id="">
                <option value="+92">+92</option>
            </select>
            <input type="text" placeholder="Your Phone" />
            {/* <select name="" id="">
                <option value="pakistan">Pakistan</option>
            </select> */}
            </div>
            {/* <input type="text" placeholder="Your Subject" /> */}
          <textarea placeholder="Your Message" rows={'5'} ></textarea>
          <button className="button2"> Get Free Trial </button>
          {/* <a href="https://api.whatsapp.com/send?phone=+923145443143">Send Message</a> */}
          </div>
    </div>
    </>
  )
}

export default Register