import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';

function Navbar() {


  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  function isOpen() {
    setIsHamburgerOpen(!isHamburgerOpen)
  }
  return (
    <>
    <div className={styles.navbar_container_admin}>
    <h1 className={styles.header}>Jabrayilzade <i class="fa-solid fa-cart-shopping"></i></h1>
   <div className={styles.navbar_admin}>
   <Link to={"/employee"}>MainSite</Link>
    <Link to={"employees"}>Employees</Link>
    <Link to={"add"}>Add Employee</Link>
   </div>




<img src="https://as1.ftcdn.net/v2/jpg/01/09/45/80/1000_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" className={styles.hamburger} onClick={isOpen} alt="" />
    </div>
    {isHamburgerOpen && (
    <div className={styles.menu}>
      <Link to={"/employee"}>MainSite</Link>
      <Link to={"/admin/employees"}>Employees</Link>
      <Link to={"/admin/add"}>Add Employee</Link>

    </div>
  )}

    
    </>
  )
}

export default Navbar