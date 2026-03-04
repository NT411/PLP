import './footer.css'

function Footer({ onOpenContact }) {
  return (
    <footer className="site-footer sheet" id="contact">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <a className="site-footer-logo ui-link" href="#top">Simple</a>
          <p>Inspired by the mindset and aesthetic of Nordic countries.</p>
        </div>
        <div className="site-footer-column">
          <span className="site-footer-label">Legal</span>
          <a className="ui-link" href="/">Terms &amp; Conditions</a>
          <a className="ui-link" href="/">Privacy Policy</a>
        </div>
        <div className="site-footer-column">
          <span className="site-footer-label">Contact</span>
          {/* Reuses the same contact modal entry point as the header instead of duplicating content inline. */}
          <button className="ui-link filter-toggle" type="button" onClick={onOpenContact}>Contact</button>
          <a className="ui-link" href="mailto:hello@simple-demo.com">hello@simple-demo.com</a>
        </div>
        <div className="site-footer-column">
          <span className="site-footer-label">Follow</span>
          <a className="ui-link" href="/">Instagram</a>
          <a className="ui-link" href="/">Pinterest</a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>2026 Simple</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
