import React from 'react'
import Swal from 'sweetalert2'
import './Contacts.css'

const Contacts = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8f3cb066-6bc3-4797-ad5c-2c7ac02c44ea");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully',
                icon: 'success',
              })
        }
      };

  return (
    <div className='contacts'>
        <div className='contacts-form'>
            <form onSubmit={onSubmit}>
            <h1 className="contact-title">Contattaci</h1>
                <div className='input-box'>
                    <label>Nome e cognome</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name 'required />
                </div>
                <div className='input-box'>
                    <label>Email</label>
                    <input type="text" className="field" placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Il tuo messaggio</label>
                    <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts