import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [value, setValue] = useState(null);
  const handleClick = (index) => {
    // console.log("clicked", index);
    setValue(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = value === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => handleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
