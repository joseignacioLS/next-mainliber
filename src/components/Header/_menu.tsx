import Link from 'next/link'
import React, { useState } from 'react'

import styles from "@/styles/Header/Menu.module.scss"

const Menu = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = ():void => {
    setIsMenuShown(oldValue => !oldValue);
  }

  return <div className={styles.menu}>
    <span className={styles.menuName} onClick={toggleMenu}>Menu</span>
    {isMenuShown && <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/consultas">Consultas</Link>
    </div>}
  </div>
}

export default Menu