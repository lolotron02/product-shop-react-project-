import { useEffect, useRef, useState } from "react";
import c from "./Carusel.module.scss";

import CaruselBox from "./CaruselBox/CaruselBox";
import { productTypeList } from "context/ProductContext/ProductContext";

function Carusel() {
  const [position, setPosition] = useState(0);
  const [caruselColumns, setCaruselColumns] = useState(0);
  const caruselLink = useRef();
  useEffect(() => {
    setCaruselColumns(
      window
        .getComputedStyle(caruselLink.current)
        .getPropertyValue("--columns")
    );
  }, [position]);

  const caruselLength = productTypeList.length - caruselColumns;

  useEffect(() => {
    if (position === -1) {
      setPosition(caruselLength);
    } else if (position === caruselLength + 1) {
      setPosition(0);
    }
  }, [position, caruselLength]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className={c.component}>
      <button
        className={c.button}
        onClick={() => setTimeout(() => setPosition(() => position - 1), 200)}
      >
        {"<"}
      </button>
      <div className={c.carouselWrapper}>
        <ul
          style={{
            "--position": position,
          }}
          className={c.carousel}
          ref={caruselLink}
        >
          {productTypeList.map((item, index) => (
            <li key={index}>
              <CaruselBox key={item.name} info={item} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={c.button}
        onClick={() => setTimeout(() => setPosition(() => position + 1), 200)}
      >
        {">"}
      </button>
    </div>
  );
}

export default Carusel;
