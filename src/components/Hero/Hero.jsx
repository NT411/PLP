import './hero.css'

function Hero() {
  return (
    <>
      {/* Keeps the hero background and anchor target separate from the oversized decorative headline. */}
      <section className="section hero sheet" id="top" aria-label="Hero"></section>
      <div className="big-text" aria-hidden="true">
        <div className="big-text-inner">
          <h1>Simple Style<br />Better Looks</h1>
          <span className="scroll-arrow">
            <span className="scroll-arrow-line"></span>
            <span className="scroll-arrow-head"></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Hero
