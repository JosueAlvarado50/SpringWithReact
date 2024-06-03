import { useState } from "react";
import styles from "./Home.module.css";
import sprintLogo from "../../assets/spring-boot.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles["logo.react"]}`}
            alt="React logo"
          />
        </a>
        <a
          href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web"
          target="_blank"
        >
          <img
            src={sprintLogo}
            className={styles.logo}
            alt="Spring Boot logo"
          />
        </a>
      </div>
      <h1>Vite + React + Spring boot</h1>
      <h2>Developed by Josue Alvarado Rivera</h2>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
