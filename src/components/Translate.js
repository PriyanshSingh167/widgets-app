// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "German",
    value: "de",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="six wide field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Lanaguage."
        options={options}
        selected={language}
        onSelected={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
