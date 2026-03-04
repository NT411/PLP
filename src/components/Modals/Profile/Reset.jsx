import './profile.css'
import AuthModal from './AuthModal.jsx'

function Reset({ isOpen, onClose, onOpenLogin }) {
  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="resetPasswordModalTitle"
      title="Reset Password"
      eyebrow="Password Help"
      introCopy="Enter your email and we will send a reset link once auth is connected."
      submitLabel="Send reset link"
      switches={<button className="ui-link filter-toggle modal-switch-link" type="button" onClick={onOpenLogin}>Back to login</button>}
    >
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Email</span>
        <input className="modal-field-control" type="email" name="email" placeholder="name@example.com" />
      </label>
    </AuthModal>
  )
}

export default Reset
