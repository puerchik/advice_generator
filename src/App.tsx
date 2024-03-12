import s from "./App.module.css";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.adviceBox}>
          <h3 className={s.adviceBoxTitle}>ADVICE #89</h3>
          <p className={s.adviceBoxText}>
            “It is easy to sit up and take notice, What is difficult is getting up and
            taking action.”
          </p>
          <button className={s.adviceBoxButton}>adviceBoxButton</button>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
