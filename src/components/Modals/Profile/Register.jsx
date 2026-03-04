import './profile.css'
import AuthModal from './AuthModal.jsx'

function Register({ isOpen, onClose, onOpenLogin }) {
  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="registerModalTitle"
      title="Register"
      eyebrow="New Account"
      introCopy="All newly registered clients get a 10% discount code."
      submitLabel="Register"
      switches={<button className="ui-link filter-toggle modal-switch-link" type="button" onClick={onOpenLogin}>Back to login</button>}
    >
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Full name</span>
        <input className="modal-field-control" type="text" name="name" placeholder="Your full name" />
      </label>
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Email</span>
        <input className="modal-field-control" type="email" name="email" placeholder="name@example.com" />
      </label>
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Password</span>
        <input className="modal-field-control" type="password" name="password" placeholder="Create a password" />
      </label>
    </AuthModal>
  )
}

export default Register
