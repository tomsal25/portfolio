import styles from "./Header.module.scss";
import Link from "./Link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.linkcontainer}>
        <Link to="/" name="top" />
        <Link to="/work" name="work" />
      </div>
    </div>
  );
};

export default Header;
