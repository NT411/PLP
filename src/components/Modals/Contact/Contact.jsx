import './contact.css'
import ModalShell from '../ModalShell.jsx'

function Contact({ isOpen, onClose }) {
  // The form intentionally blocks native submit because this demo has no backend handler yet.
  return (
    <ModalShell labelledBy="contactModalTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card modal-card--info sheet">
        <div className="modal-head">
          <span className="ui-mono-sm-caps">Contact</span>
          <button className="modal-close ui-mono-sm-caps" type="button" aria-label="Close contact modal" onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          <div className="modal-intro">
            <p className="modal-eyebrow ui-mono-sm-caps">Simple</p>
            <h2 id="contactModalTitle">Contact</h2>
            {/* Direct contact channels stay visible above the form so users are not blocked by the demo-only submit flow. */}
            <div className="modal-contact">
              <div>
                <span className="ui-mono-sm-caps">Email</span>
                <a className="ui-link" href="mailto:hello@simple-demo.com">hello@simple-demo.com</a>
              </div>
              <div>
                <span className="ui-mono-sm-caps">Phone</span>
                <a className="ui-link" href="tel:+3595550102">+359 555 0102</a>
              </div>
            </div>
          </div>
          {/* Input fields are uncontrolled because the form does not persist or validate any data yet. */}
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form-grid">
              <label className="modal-field">
                <span className="ui-mono-sm-caps">Name</span>
                <input className="modal-field-control" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="modal-field">
                <span className="ui-mono-sm-caps">Email</span>
                <input className="modal-field-control" type="email" name="email" placeholder="name@example.com" />
              </label>
            </div>
            <label className="modal-field">
              <span className="ui-mono-sm-caps">Subject</span>
              <input className="modal-field-control" type="text" name="subject" placeholder="What is this about?" />
            </label>
            <label className="modal-field">
              <span className="ui-mono-sm-caps">Message</span>
              <textarea className="modal-field-control" name="message" placeholder="Tell us what you need."></textarea>
            </label>
            <label className="contact-check">
              <input type="checkbox" name="updates" />
              <span>Send occasional product and studio updates.</span>
            </label>
            <div className="modal-form-actions">
              <button className="modal-submit ui-mono-sm-caps" type="submit">Send request</button>
            </div>
          </form>
        </div>
      </div>
    </ModalShell>
  )
}

export default Contact
