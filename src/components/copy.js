import React from 'react'

import styles from './copy.module.css'

export default (props) => (
  <div className={`${styles.copy} ${props.visualStyle === 'Emphasized' ? styles.bright : null}`} dangerouslySetInnerHTML={{ __html: props.copy }}></div>
)
