import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { appActions } from "../store/adviceGeneratorSlice";
import { getAdvice } from "../features/api";

import divider from "./../assets/images/pattern-divider-desktop.svg";
import s from "./App.module.css";

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
        <section className={s.adviceBox}>
          <h1 className={s.adviceBoxTitle}>{`ADVICE #${advice.id}`}</h1>
          <p className={s.adviceBoxText}>{advice.advice}</p>
          <img className={s.adviceBoxImg} src={divider} alt="divider" />
          <button onClick={setAdvice} className={s.adviceBoxButton}></button>
        </section>
      </div>
    </>
  );
}

export default App;
