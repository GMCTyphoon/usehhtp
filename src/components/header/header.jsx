import PropTypes from "prop-types";
import styles from "./header.module.css";
import classNames from "classnames";

export default function Header({ selectedTab, setSelectedTab }) {
  return (
    <header>
      <div
        className={classNames(styles.headerItem, {
          [styles.active]: selectedTab === "posts",
        })}
        onClick={() => {
          setSelectedTab("posts");
        }}
      >
        Посты
      </div>
      <div
        className={classNames(styles.headerItem, {
          [styles.active]: selectedTab === "chess",
        })}
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
