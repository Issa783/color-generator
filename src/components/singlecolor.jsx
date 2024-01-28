import React, { useEffect, useState } from "react";
import styles from "../style.module.css";
import rgbToHex from "../utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false)
    },3000)
    return () => clearTimeout(timeout)
  },[alert])

  return (
    <article
      className={`${styles.color} ${index > 8 ? styles.colorlight : ''}`}
      style={{ backgroundColor: `rgb(${bcg})` }} onClick = {() =>{
         setAlert(true)
         navigator.clipboard.writeText(hex)
        
      }}
    >
      <p className={styles.percentvalue}>{weight}%</p>
      <p className={styles.colorvalue}>{hex}</p>
      {alert && <p>Copied to clipboard</p>}

    </article>
  );
};

export default SingleColor;
