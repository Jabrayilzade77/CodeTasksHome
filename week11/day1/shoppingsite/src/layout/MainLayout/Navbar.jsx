import { Link } from 'react-router-dom'
import styles from './NavbarMain.module.scss';
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainProvider';


function Navbar() {

  const {basket} = useContext(MainContext)

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  function isOpen() {
    setIsHamburgerOpen(!isHamburgerOpen)
  }


  return (
<>


 <div className={styles.navbar_container_main}>
  <div><h1 className={styles.header}>Jabrayilzade </h1></div>
    <div className={styles.navbar_content}>
    <Link to={"/employee"}>Employee</Link>
    <Link to={"/about"}>About Page</Link>
    <Link to={"/contact"}>Contact Page</Link>
    <Link to={"/basket"}>Basket {basket.length}</Link>
    <Link to={"/admin/employees"}>Admin Panel</Link>
    </div>



<img src="https://as1.ftcdn.net/v2/jpg/01/09/45/80/1000_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" className={styles.hamburger} onClick={isOpen} alt="" />


 </div>
 
 {isHamburgerOpen && (
    <div className={styles.menu}>
      <Link to={"/employee"}>Employee</Link>
      <Link to={"/about"}>About Page</Link>
      <Link to={"/contact"}>Contact Page</Link>
      <Link to={"/basket"}>Basket {basket.length}</Link>
      <Link to={"/admin/employees"}>Admin Panel</Link>
    </div>
  )}</>

  )
}

export default Navbar