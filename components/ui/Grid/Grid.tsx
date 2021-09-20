import { FC, ReactNode } from 'react';

import styles from './Grid.module.css';

const Grid: FC<ReactNode> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Grid;
