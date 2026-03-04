function ModalShell({ isOpen, labelledBy, onClose, children }) {
  // Centralizes modal state classes and ARIA attributes so every modal follows the same contract.
  const shellClassName = ['modal-shell', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')

  return (
    <section className={shellClassName} aria-hidden={String(!isOpen)} aria-labelledby={labelledBy} role="dialog">
      <div className="modal-backdrop" onClick={onClose}></div>
      {children}
    </section>
  )
}

export default ModalShell
