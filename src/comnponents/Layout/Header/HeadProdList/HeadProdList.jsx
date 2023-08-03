import c from "./HeadProdlist.module.scss";

import { useState } from "react";
import { useMatch } from "react-router-dom";

function HeadProdList() {
  const [lof, setLof] = useState(useMatch("/")!==null);
  return (
    <div className={c.component}>
      <button onClick={() => setLof(!lof)}>
        <i></i>
        All departaments
        <i
          className={"fa-solid fa-arrow-right"}
          style={{
            transform: lof ? "rotate(90deg)" : " ",
            transition: "ease all .2s",
          }}
        ></i>
      </button>
      <ul style={!lof ? { height: 0 } : null}>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
        <li>Fresh meat</li>
        <li>Vegetebales</li>
      </ul>
    </div>
  );
}

export default HeadProdList;
