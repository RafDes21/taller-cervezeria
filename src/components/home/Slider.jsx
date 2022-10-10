import React, { useEffect, useState } from "react";
// import { set } from "react-hook-form";
import "./homeCss/slider.css";

import { Slider1 } from "./slider/Slider1";
import { Slider2 } from "./slider/Slider2";
import { Slider3 } from "./slider/Slider3";

const Slider = () => {
  const [count, setCount] = useState(1);
  const [slider, setSlider] = useState(<Slider1 />);

  const automatic = () => {
    switch (count) {
      case 1:
        setSlider(<Slider2 />);

        setCount(count + 1);
        break;
      case 2:
        setSlider(<Slider3 />);

        setCount(count + 1);
        break;
      case 3:
        setSlider(<Slider1 />);

        setCount(1);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    const destroy = setInterval(automatic, 5000);

    return () => {
      clearInterval(destroy);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const change = (item) => {
    switch (item) {
      case 1:
        setSlider(<Slider1 />);
        setCount(1);
        break;
      case 2:
        setSlider(<Slider2 />);
        setCount(2);
        break;
      case 3:
        setSlider(<Slider3 />);
        setCount(3);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div id="carrusel">
        <div className="buttons">
          <div
            onClick={() => change(1)}
            style={{ background: count === 1 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
            onClick={() => change(2)}
            style={{ background: count === 2 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
            onClick={() => change(3)}
            style={{ background: count === 3 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
        </div>
        {slider}
      </div>
      {/* <button onClick={cambio}> click</button> */}
    </div>
  );
};

export default Slider;
