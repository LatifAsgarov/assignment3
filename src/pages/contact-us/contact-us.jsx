import styles from './contact-us.module.css';
import { useState } from 'react'
import { messages } from '../../api/messages-api';

const ContactUs = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [showError, setShowError] = useState(false)
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [messageContent, setMessageContent] = useState('')

  const openPopup = () => {
    setPopupIsOpen(true)
  }
  const closePopup = () => {
    setPopupIsOpen(false)
  }

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageContentChange = (event) => {
    setMessageContent(event.target.value);
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!subject || !email || !messageContent || !fullName) {
      setShowError(true)
      return
    }
      
    setShowError(false)
    const data = {
      subject,
      email,
      messageContent,
      fullName
    }

    const response = await messages(data)
    if(response.status === 201) {
      openPopup()
      setSubject('')
      setEmail('')
      setMessageContent('')
      setFullName('')
    }
  }

  return (
    <div className={styles.container}>
      <form >
        <div className={styles.formContainer}>
          <h3>GET IN TOUCH</h3>
          <input type="text" id="subject" placeholder="Subject" autoComplete="off" value={subject} onChange={handleSubjectChange} />
          <input type="text" id="full_name" placeholder="Full Name" autoComplete="off" value={fullName} onChange={handleFullNameChange} />
          <input type="email" id="email" placeholder="Email" autoComplete="off" value={email} onChange={handleEmailChange} />
          <textarea id="message" rows={5} placeholder="How can we help you?" autoComplete="off" value={messageContent} onChange={handleMessageContentChange} />
          {(showError) ? <p className={styles.errorBox}>Please fill all the blanks</p> : null}
          <button onClick={sendMessage}>Send</button>
        </div>

        {/* content popup */}
        <div className={`${styles.popup}  ${popupIsOpen ? styles['open-popup'] : null}`} id="popup">
          <img src="operator.png" alt="" />
          <h2>Thank You!</h2>
          <p>Your request has been successfully submitted. We'll get in touch with you soon. Thanks!</p>
          <button type="button" onClick={closePopup}>OK</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;