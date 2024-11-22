import styles from "./header.module.scss";
import classNames from "classnames";
import { FC } from "react";

interface HeaderProps {
  selectedTab: "chess" | "posts";
  setSelectedTab: (tab: "chess" | "posts") => void;
}

export const Header: FC<HeaderProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <header>
      <div
        className={classNames(styles.headerItem, {
          [styles.active]: selectedTab === "posts",
        })}
        onClick={() => {
          setSelectedTab("posts");
        }}>
        Посты
      </div>
      <div
        className={classNames(styles.headerItem, {
          [styles.active]: selectedTab === "chess",
        })}
        onClick={() => {
          setSelectedTab("chess");
        }}>
        Шахматная доска
      </div>
    </header>
  );
};
