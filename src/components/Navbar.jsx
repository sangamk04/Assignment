import React from 'react'
import { Link, Button } from 'react-router-dom'
import styles from  "./navbar.module.css"

const Navbar = () => {
return (
  <>
<div className={styles.navdata}>
<Link to="/" className={styles.nav}>Rent</Link>
<Link to="/User" className={styles.nav}>Buy</Link>
<Link to="/Admin" className={styles.nav}>Sell</Link>
<Link to="/Hotels" className={styles.nav}>Manage</Link>
<Link to="/Hotels" className={styles.nav}>Property</Link>
<Link to="/Hotels" className={styles.nav}>Resource</Link>
<button className={styles.btn}>Login</button>
<button className={styles.btn}>Signup</button>
</div>


</>
  )
}
export default Navbar