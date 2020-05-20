import React from 'react'
import styles from './index.scss'

const Fragment = ({ children }) => (
  <div className={styles.test}>
    <strong>用 Hooks 开发的组件：</strong>{children}
  </div>
)

Fragment.defaultProps = {
  children: undefined,
}

export default Fragment
