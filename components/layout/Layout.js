import React from 'react';
import styles from './Layout.module.css';
import Link from 'next/link';






function Layout({children}) {
  return (<>
  <header className={styles.header}>
    <Link href="/">
    <h2>Zarcar</h2>
    <p>Choose and Buy your car</p>
    </Link>
  </header>
  <div className={styles.container}>{children}</div>
  <footer className={styles.footer}>
    <a href='https://www.google.com/' target= '_blank'>Design by Zahra |Zarcar $copy</a>
  </footer>
  
  </>
  )
}

export default Layout;
