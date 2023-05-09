import React from 'react';
import classes from './header.module.css';
import Logo from '../Logo/logo'


interface HeaderProps {
  props: string
}
 
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={classes.wrapperHeader}>
          <div className={classes.wrapperLogo}>
            <Logo></Logo>
          </div>
          <div>
            <span>Библиотека</span>
          </div> 
          <div>
          <span>Привет, Иван</span>
          <img src="../../../img/avatar.jpg" alt="" />
          </div>      

        </div>
      );
}
 
export default Header;
