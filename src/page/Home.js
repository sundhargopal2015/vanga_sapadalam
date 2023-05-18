import React from "react";
import styles from "../styles/Home.module.css";
import { Search } from "tabler-icons-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appHeaderContainer}>
        <h1 className={styles.appHeaderBranding}>Vanga Sapadalam</h1>
        <div className={styles.appHeaderSearchContainer}>
          <Search />
          <input type="text" className={styles.appHeaderSearchInput}/>
        </div>
        <div className={styles.appHeaderAuthContainer}>
          <Link to="/login" className={styles.appHeaderAuthLink}>
            Log in
          </Link>
          <Link to="/signup" className={styles.appHeaderAuthLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
