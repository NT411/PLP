import ModalShell from '../ModalShell.jsx'

function AuthModal({
  isOpen,
  onClose,
  labelledBy,
  title,
  eyebrow,
  introCopy,
  submitLabel,
  switches,
  children,
}) {
  return (
    <ModalShell labelledBy={labelledBy} isOpen={isOpen} onClose={onClose}>
      <div className="modal-card modal-card--info sheet">
        <div className="modal-head">
          <span className="ui-mono-sm-caps">Profile</span>
          <button className="modal-close ui-mono-sm-caps" type="button" aria-label={`Close ${title.toLowerCase()} modal`} onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          <div className="modal-intro">
            <p className="modal-eyebrow ui-mono-sm-caps">{eyebrow}</p>
            <h2 id={labelledBy}>{title}</h2>
            {introCopy ? <p className="modal-copy">{introCopy}</p> : null}
          </div>
          {/* Auth screens share the same layout shell so login, register, and reset stay visually aligned. */}
          <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
            {children}
            <div className="modal-form-actions modal-form-actions-stack">
              <button className="modal-submit ui-mono-sm-caps" type="submit">{submitLabel}</button>
              <p className="modal-form-note ui-mono-sm-caps">Auth logic and profile data will be added later.</p>
            </div>
          </form>
          {switches ? <div className="modal-switches">{switches}</div> : null}
        </div>
      </div>
    </ModalShell>
  )
}

export default AuthModal
