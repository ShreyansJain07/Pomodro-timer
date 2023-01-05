import React, { useState, useEffect } from "react";
import { Clock } from "./Clock";
import { SessBreak } from "./SessBreak";
import { StartStop } from "./StartStop";
import wrong from "../wrong.mp3";

var beep = new Audio(wrong);

export const Timer = () => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [bmin, setBmin] = useState(5);
  const [bsec, setBsec] = useState(0);
  const [startT, setStartT] = useState(false);
  const [session, setSession] = useState(true);
  const [xmin, setXmin] = useState(min);
  const [ymin, setYmin] = useState(bmin);

  useEffect(() => {
    if (session) {
      let timer;
      if (startT) {
        timer = setInterval(() => {
          setSec(sec - 1);
          if (sec < 1) {
            setMin(min - 1);
            setSec(59);
          }
          if (min < 0) {
            setSession(!session);
            setMin(xmin);
            setSec(0);
            beep.play();
          }
        }, 1000);
        return () => clearInterval(timer);
      } else {
        clearInterval(timer);
      }
    } else {
      let timer;
      if (startT) {
        timer = setInterval(() => {
          setBsec(bsec - 1);
          if (bsec < 1) {
            setBmin(bmin - 1);
            setBsec(59);
          }
          if (bmin < 0) {
            setSession(!session);
            setBmin(ymin);
            setBsec(0);
            beep.play();
          }
        }, 1000);
        return () => clearInterval(timer);
      } else {
        clearInterval(timer);
      }
    }
  }, [startT, min, sec, session, bmin, bsec, xmin, ymin]);

  const reset = () => {
    setStartT(false);
    setSession(true);
    setMin(25);
    setSec(0);
    setBmin(5);
    setBsec(0);
    setXmin(25);
    setYmin(5);
  };
  return (
    <>
      <div className="timer">
        <SessBreak
          startT={startT}
          min={min}
          setMin={setMin}
          bmin={bmin}
          setBmin={setBmin}
          xmin={xmin}
          ymin={ymin}
          setXmin={setXmin}
          setYmin={setYmin}
        />
        <Clock session={session} sec={sec} min={min} bsec={bsec} bmin={bmin} />
        <StartStop startT={startT} setStartT={setStartT} reset={reset} />
      </div>
    </>
  );
};
