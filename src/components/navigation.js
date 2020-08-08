import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <a href="https://cms.bpj.org.uk">
        <img className={styles.logo} src="https://bpj.org.uk/download-logo/bpj-logo-alt.svg" />
      </a>
    </div>
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)
