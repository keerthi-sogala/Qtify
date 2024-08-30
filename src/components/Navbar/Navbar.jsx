import React from 'react'
import styles from './Navbar.module.css'
//import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Search/Search'
import LogoImage from '../../assets/logoImage.png'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
        <Search placeholder="Search a album of your choice"/>
        <Button text="Give Feedback"/>
    </nav>
  )
}

export default Navbar