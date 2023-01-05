import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
export const SessBreak = ({
  startT,
  min,
  setMin,
  bmin,
  setBmin,
  xmin,
  ymin,
  setXmin,
  setYmin
}) => {
  return (
    <div className="sess-break">
      <div className="sess">
        Session Time:{" "}
        <button
          disabled={startT}
          onClick={() => {
            setMin(min + 1);
            setXmin(min + 1);
          }}
          className="up"
        >
          <AiOutlineArrowUp />
        </button>{" "}
        {xmin}{" "}
        <button
          disabled={startT || xmin < 2}
          onClick={() => {
            setMin(min - 1);
            setXmin(min - 1);
          }}
          className="up"
        >
          <AiOutlineArrowDown />
        </button>
      </div>
      <div className="sess">
        Break Time:{" "}
        <button
          disabled={startT}
          onClick={() => {
            setBmin(bmin + 1);
            setYmin(bmin + 1);
          }}
          className="up"
        >
          <AiOutlineArrowUp />
        </button>{" "}
        {ymin}{" "}
        <button
          disabled={startT || ymin < 2}
          onClick={() => {
            setBmin(bmin - 1);
            setYmin(bmin - 1);
          }}
          className="up"
        >
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
};
