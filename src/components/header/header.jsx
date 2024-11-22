import PropTypes from "prop-types";
import styles from "./header.module.css";

export default function Header({ selectedTab, setSelectedTab }) {
  return (
    <header className={styles.header} id="header">
      <div
        className={selectedTab === "posts" ? styles.active : undefined}
        onClick={() => {
          setSelectedTab("posts");
        }}
      >
        Посты
      </div>
      <div
        className={selectedTab === "chess" ? styles.active : undefined}
        onClick={() => {
          setSelectedTab("chess");
        }}
      >
        Шахматная доска
      </div>
    </header>
  );
}
Header.propTypes = {
  setSelectedTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
