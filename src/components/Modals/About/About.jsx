import './about.css'
import ModalShell from '../ModalShell.jsx'

function About({ isOpen, onClose }) {
  return (
    <ModalShell labelledBy="aboutModalTitle" isOpen={isOpen} onClose={onClose}>
      <div className="modal-card modal-card--info sheet">
        <div className="modal-head">
          <span className="ui-mono-sm-caps">About</span>
          <button className="modal-close ui-mono-sm-caps" type="button" aria-label="Close about modal" onClick={onClose}>Close</button>
        </div>
        <div className="modal-body modal-body--about">
          <div className="modal-intro">
            <h2 id="aboutModalTitle">Simple</h2>
          </div>
          <div className="modal-copy modal-copy--about">
            <p>Simple is a clothing brand inspired by the mindset and aesthetic of Nordic countries. Rooted in the philosophy that less is more, we focus on clean design, subtle details, and intentional simplicity.</p>
            <p>We avoid loud logos and overwhelming color combinations. Instead, we create timeless pieces that speak through quality, fit, and form.</p>
            <p>Our mission is to show the world that style does not require excess. You can look refined and confident without dressing like a billboard advertisement.</p>
          </div>
        </div>
      </div>
    </ModalShell>
  )
}

export default About
