import { useState } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('question');
  const [showCelebration, setShowCelebration] = useState(false);

  const openBirthday = () => {
    setScreen('birthday');
    setShowCelebration(true);
  };

  return (
    <main className="page-shell">
      {showCelebration && (
        <div
          className="heart-burst"
          aria-hidden="true"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) {
              setShowCelebration(false);
            }
          }}
        >
          <span className="heart-burst__heart heart-burst__heart--one">♥</span>
          <span className="heart-burst__heart heart-burst__heart--two">♥</span>
          <span className="heart-burst__heart heart-burst__heart--three">♥</span>
          <span className="heart-burst__heart heart-burst__heart--four">♥</span>
          <span className="heart-burst__heart heart-burst__heart--five">♥</span>
          <span className="heart-burst__heart heart-burst__heart--six">♥</span>
          <span className="heart-burst__heart heart-burst__heart--seven">♥</span>
          <span className="heart-burst__heart heart-burst__heart--eight">♥</span>
        </div>
      )}
      <div className="pixel-sparkle sparkle-one" aria-hidden="true">✦</div>
      <div className="pixel-sparkle sparkle-two" aria-hidden="true">♥</div>
      <div className="pixel-sparkle sparkle-three" aria-hidden="true">✧</div>

      <article className="love-card">
        <header className="site-bar">
        </header>

        {screen === 'question' && (
          <section className="screen-content" aria-labelledby="question-heading">
            <img className="prompt-gif" src="/kiss.gif" alt="A little kiss" />
            <h1 className="screen-heading" id="question-heading">Sanu, do you love me?</h1>
            <div className="choice-buttons">
              <button className="pixel-button pixel-button--primary" onClick={openBirthday}>
                I love you
              </button>
              <button className="pixel-button" onClick={() => setScreen('disappointed')}>
                No I don&apos;t
              </button>
            </div>
          </section>
        )}

        {screen === 'disappointed' && (
          <section className="screen-content" aria-labelledby="disappointed-heading">
            <img className="prompt-gif prompt-gif--angry" src="/angry.gif" alt="An angry animated character" />
            <h1 className="screen-heading" id="disappointed-heading">You&apos;ve dissapointed me 💔</h1>
            <button className="pixel-button pixel-button--primary retry-button" onClick={() => setScreen('question')}>
              Try again
            </button>
          </section>
        )}

        {screen === 'birthday' && (
          <div className="card-content">
            <h1 className="birthday-heading">
              <span>Happiest Birthday</span>
              <span className="birthday-heading__accent">to you Sanu!</span>
            </h1>
            <p className="intro">From yours truly, Shreyash 💖</p>

            <section className="photo-frame" aria-label="Sanu's photo">
              <img
                className="photo-gif photo-gif--left"
                src="/Heart%20Pixel%20Sticker.gif"
                alt="Pixel heart sticker"
              />
              <img
                className="photo-gif photo-gif--right"
                src="/Couple%20Love%20Sticker%20by%20ACHTUNG.gif"
                alt="Animated couple in love"
              />
              <div className="photo-frame__inner">
                <img className="photo-frame__image" src="/San_desu.png" alt="Sanu" />
              </div>
              <span className="photo-frame__corner photo-frame__corner--tl" aria-hidden="true" />
              <span className="photo-frame__corner photo-frame__corner--tr" aria-hidden="true" />
              <span className="photo-frame__corner photo-frame__corner--bl" aria-hidden="true" />
              <span className="photo-frame__corner photo-frame__corner--br" aria-hidden="true" />
            </section>

            <section className="message-card" aria-label="Birthday message">
              <span className="message-card__corner" aria-hidden="true">♡</span>
              <p className="message-card__text">
                Happiest Birthday to you my love!
                Words cannot express how much you mean to me. You are my everything, and I am so grateful for every moment we share together. I love you more than words can say, and I look forward to spending many more birthdays with you. Happy Birthday, my love!
              </p>
              <p className="message-card__signature">With love, Shreyash <span aria-hidden="true">💖</span></p>
            </section>

            <footer className="card-footer">
              <span>♡ FOREVER & ALWAYS ♡</span>
              <span className="footer-sparkle" aria-hidden="true">✦</span>
            </footer>
          </div>
        )}
      </article>

      <p className="page-note">best viewed with a little love <span aria-hidden="true">♡</span></p>
    </main>
  );
}

export default App;
