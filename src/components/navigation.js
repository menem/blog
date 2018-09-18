import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://paper.dropbox.com/doc/AbdelMoniem-Hany-Ragab--ANBpmUA3x3zAflYjAgvCmn66AQ-bMyhaTK9XW9nDaBPjruT3">Resume</Link>
      </li>
    </ul>
  </nav>
)
