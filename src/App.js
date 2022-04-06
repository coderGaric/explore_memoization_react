import { useState, useMemo, useCallback } from "react";

import Comments from "./components/Comments";

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const button = show ? "Hide" : "Show";

  // const handleToggle = () => {
  //   setShow(!show);
  // };

  const handleToggle = useCallback(() => {
    console.log("render toggle button section");
    setShow(!show);
  }, [show]);

  const loadComment = useMemo(() => {
    return <Comments />;
  }, []);

  // const toggleButtonSection = useMemo(() => {
  //   console.log("render toggle button section");
  //   return (
  //     <div>
  //       <button className="button" onClick={handleToggle}>
  //         {button}
  //       </button>
  //       {show && <h1>Hello World</h1>}
  //     </div>
  //   );
  //   // eslint-disable-next-line
  // }, [show]);

  const handleAddMinus = useCallback((e) => {
    console.log("render increament section");

    if (e.target.value === "+") {
      setNumber((number) => number + 1);
    } else {
      setNumber((number) => number - 1);
    }
  }, []);

  return (
    <div className="App">
      <section className="article-section">
        {/* {toggleButtonSection} */}
        <div>
          <button className="button" onClick={handleToggle}>
            {button}
          </button>
          {show && <h1>Hello World</h1>}
        </div>

        <div>
          <h1>{number}</h1>
          <button className="add-minus" onClick={handleAddMinus} value="+">
            +
          </button>
          <button className="add-minus" onClick={handleAddMinus} value="-">
            -
          </button>
        </div>
      </section>
      {loadComment}
    </div>
  );
}
