export const Clock = ({ session, min, sec, bsec, bmin }) => {
  return (
    <div className="clock-card">
      <div style={{ fontSize: "30px", paddingBottom: "8px" }}>
        {" "}
        {session ? "Session" : "Break"}{" "}
      </div>

      {session && min !== -1 ? (
        <div className="clock">
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </div>
      ) : bmin !== -1 ? (
        <div className="clock">
          {bmin < 10 ? "0" + bmin : bmin}:{bsec < 10 ? "0" + bsec : bsec}
        </div>
      ) : (
        <div className="clock">
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </div>
      )}
    </div>
  );
};
