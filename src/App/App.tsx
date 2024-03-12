import { useEffect } from "react";
import s from "./App.module.css";
import { getAdvice } from "../features/api";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { appActions } from "../store/adviceGeneratorSlice";

function App() {
  const advice = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  const setAdvice = async () => {
    const res = await getAdvice();
    dispatch(appActions.getAdvice(res.data.slip));
  };

  useEffect(() => {
    setAdvice();
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.adviceBox}>
          <h3 className={s.adviceBoxTitle}>{`ADVICE #${advice.id}`}</h3>
          <p className={s.adviceBoxText}>{advice.advice}</p>
          <button onClick={setAdvice} className={s.adviceBoxButton}>
            adviceBoxButton
          </button>
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
