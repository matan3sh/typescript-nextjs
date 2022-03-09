import { FC, ReactNode } from "react";
import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Marquee;
