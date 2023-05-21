function Colorcomponent({ top, bottom, activestatus, onclick }) {
  return (
    <div
      className="Colorcomponent"
      style={{ border: activestatus ? "2px solid black" : "none" }}
      onClick={onclick}
    >
      <div className="top" style={{ backgroundColor: top }}></div>
      <div className="bottum" style={{ backgroundColor: bottom }}></div>
    </div>
  );
}

export default Colorcomponent;
