import React from 'react';
import classes from './header.module.css';
import Logo from '../Logo/logo';
import { Link } from 'react-router-dom';


interface HeaderProps {
  props: string
}
 
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={classes.wrapperHeader}>
          <Link className={classes.wrapperLogo} to={''}>
            <Logo></Logo>
          </Link>
          <div>
            <span className={classes.title}>Библиотека</span>
          </div> 
          <div>
          <span>Привет, Иван</span>
          <img src="../../../img/avatar.jpg" alt="" />
          </div>      

        </div>
      );
}
 
export default Header;
