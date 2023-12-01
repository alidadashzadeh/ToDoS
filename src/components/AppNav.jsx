import styles from "./AppNav.module.css";

import Logo from "./Logo";

function AppNav() {
  return (
    <div className={styles.appnav}>
      <Logo />
      <div className={styles.search__container}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.account__details}>
        <div className={styles.account_name}>TogrolXan</div>
        <img src="../user.jpg" />
      </div>
    </div>
  );
}

export default AppNav;
