import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { SidebarData } from '../SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='nav-horizontal'>
            <span>
              <BsIcons.BsStarHalf />
            </span>
            StatusQ
            <span>Welcome</span>
            <span>
              <ul>
                <li><BiIcons.BiDotsVerticalRounded /></li>
                <li><CgIcons.CgProfile /></li>
                <li><GrIcons.GrMail /></li>
                <li><MdIcons.MdNotifications /></li>
              </ul>
            </span>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars' onClick={showSidebar}>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={sidebar ? 'temp-span-active' : 'temp-span-inactive'}>{item.title}</span>
                  </Link>

                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar