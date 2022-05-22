import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Badge } from '@mui/material';
import  {Power2 } from 'gsap';
const Navbar = ({timeline}) => {
  const [active,setActive]=useState(true);
  const [toggleIcon,setToggleIcon]=useState(true);
  const navigate=useNavigate();

  useEffect(()=>{
    timeline.from(".navbar",{
      opacity:0,
      duration:1.5,
      ease:Power2.easeInOut
    })

    timeline.fromTo(".nav__item",{
      y:"-100%",
      opacity: 0
  },{
      duration: 1.5,
      opacity: 1,
      y: "0%",
      stagger: 0.25
  });

  },[timeline])
  

  return (
    <div className='navbar'>
       <div className="logo" onClick={()=>navigate("/")}>
        <h3>Flaw</h3>
      </div>
      <div className={toggleIcon ? `nav__toggler` : `nav__toggler toggle`} onClick={() => { setActive(!active); setToggleIcon(!toggleIcon) }}>
        {
          toggleIcon ? <p>menu</p> : <p>close</p>
        }
      </div>
      <ul className={active ? `mobile-nav` : "mobile-nav nav__active"} onClick={() => { setActive(!active); setToggleIcon(!toggleIcon) }}>
        <li className='li1 nav__item'><a href="man">Man</a></li>
        <li className='li2 nav__item'><a href="woman">Woman</a></li>
        <li className='li3 nav__item'><a href="kids">Kids</a></li>
        <div className="bg1 bg"></div>
        <div className="bg2 bg"></div>
        <div className="bg3 bg"></div>

      </ul>
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