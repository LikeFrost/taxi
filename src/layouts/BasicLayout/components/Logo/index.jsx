import * as React from 'react';
import { Link } from 'ice';
import styles from './index.module.css';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/'} className={styles.logo}>
        <span>{text}</span>
      </Link>
    </div>
  );
}
