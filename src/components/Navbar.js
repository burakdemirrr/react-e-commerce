import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Badge } from '@mui/material';
const Navbar = () => {
  const [active,setActive]=useState(false);
  const navigate=useNavigate();
  return (
    <div className='navbar'>
      <div className="logo" onClick={()=>navigate("/")}><h3>FLAW</h3></div>

      <nav>
        <ul >
          <li><a href="man">MAN</a></li>
          <li><a href="woman">WOMAN</a></li>
          <li><a href="kids">KIDS</a></li>
        </ul>
      </nav>


      <div className="right">
      <Badge badgeContent={4} color="warning">
        <ShoppingCartIcon className="icon"/>
      </Badge>
        <AccountBoxIcon className="icon"/>
      </div>

    </div>
  )
}

export default Navbar