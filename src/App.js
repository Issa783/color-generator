import React, { useState } from "react";
import styles from "./style.module.css";
import Values from "values.js";
import SingleColor from "./components/singlecolor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#fcd34e").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className={styles.container}>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f5689"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={error ? styles.error : null}
          />
          <button className={styles.btn}>Submit</button>
        </form>
      </section>
      <section className={styles.colors}>
        {list.map((color,index) => {
          return <SingleColor key={index}  {...color} index = {index} />
        })}
      </section>
    </>
  );
}

export default App;
