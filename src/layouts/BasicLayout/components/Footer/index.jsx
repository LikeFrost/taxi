import * as React from 'react';
import styles from './index.module.css';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>出租车管理系统</span>
      <br />
      <span className={styles.copyright}>© 2022-现在</span>
    </p>
  );
}
