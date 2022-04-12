import react, { useState, useEffect, useRef } from "react";
// All the event listeners that were wired by addEventListener will be called before React
// eventListener and then React element will be called in order of child to parent(event bubbling.)

const Dropdown = ({ label, options, selected, onSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="six wide field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        {/* <div
          className="text2"
          style={{
            color: selected.value,
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Text color is {selected.value}
        </div> */}
      </div>
    </div>
  );
};

export default Dropdown;
