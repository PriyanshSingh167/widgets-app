import React, { useState } from "react";
import options from "../options";
import items from "../items";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>

      <Route path={"/list"}>
        <Search />
      </Route>

      <Route path={"/dropdown"}>
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelected={setSelected}
        />
      </Route>

      <Route path={"/translate"}>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
