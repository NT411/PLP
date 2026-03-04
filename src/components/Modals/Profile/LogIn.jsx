import './profile.css'
import AuthModal from './AuthModal.jsx'

function LogIn({ isOpen, onClose, onOpenRegister, onOpenReset }) {
  return (
    <AuthModal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy="loginModalTitle"
      title="Log in"
      eyebrow="Simple Account"
      submitLabel="Log in"
      switches={(
        <>
          <button className="ui-link filter-toggle modal-switch-link" type="button" onClick={onOpenRegister}>Create account</button>
          <button className="ui-link filter-toggle modal-switch-link" type="button" onClick={onOpenReset}>Forgot password?</button>
        </>
      )}
    >
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Email</span>
        <input className="modal-field-control" type="email" name="email" placeholder="name@example.com" />
      </label>
      <label className="modal-field">
        <span className="ui-mono-sm-caps">Password</span>
        <input className="modal-field-control" type="password" name="password" placeholder="Enter your password" />
      </label>
    </AuthModal>
  )
}

export default LogIn
