import Button from "../reusable/Button"
import styles from "./contactUsSection.module.css"
import { useState } from 'react'

export default function ContactUsSection() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input: string) => {
    const numericInput = input.replace(/\D/g, '');
    return numericInput
  };

  const handleInputChange = (e: any) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhoneNumber(formatted);
  };

  return (
    <section className="f-column align-center mt-4">
      <div className={`f-column align-center ${styles.title_container}`}>
        <h1 className={`center-text ${styles.contact_title}`}>Get in Touch With Kaban</h1>
        <p className="center-text">Reach out today for personalized assistance and guidance on your property journey.</p>
      </div>
      <div className={`mt-4 pad-4 ${styles.form_container}`}>
        <form className={`f-column gap-2 ${styles.form}`} action="" method="post">
          <div className={`f-column ${styles.form_control}`}>
            <label htmlFor="fname">Full Name</label>
            <input type="text" placeholder="John Smith" minLength={2} maxLength={32} required />
          </div>
          <div className={`f-column ${styles.form_control}`}>
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="0708xxxxxxx" value={phoneNumber} onChange={handleInputChange} minLength={11} maxLength={11} required />
          </div>
          <div className={`f-column ${styles.form_control}`}>
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="smith@example.com" required />
          </div>
          <div className={`f-column ${styles.form_control}`}>
            <label htmlFor="message">Message</label>
            <textarea cols={30} rows={10}>Write your message here...</textarea>
          </div>
          <Button className={styles.submit_btn}>Submit</Button>
        </form>
      </div>
      <div className={`flex align-center justify-center ${styles.advert}`}>Advert</div>
    </section>
  )
}
