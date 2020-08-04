import React from 'react'
import Img from 'gatsby-image'

import styles from './announcement.module.css'

export default ({ title, content }) => (
  <div className={styles.announcement}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>{content}</div>
  </div>
)
