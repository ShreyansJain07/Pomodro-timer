export const StartStop = ({ startT, setStartT, reset }) => {
  return (
    <div>
      <button onClick={() => setStartT(!startT)} className="start button">
        Start/Stop
      </button>
      <button onClick={reset} className="stop button">
        Reset
      </button>
    </div>
  );
};
