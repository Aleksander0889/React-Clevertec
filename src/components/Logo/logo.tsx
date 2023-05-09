import React from 'react';
import classes from './logo.module.css';
import { Image } from 'semantic-ui-react';

const Logo = () => <><Image
    className={classes.logo}
    src='../../../img/Vector.png' alt="Pic" />
    <Image
        className={classes.logoClever}
        src='.../../../img/Cleverland.png' /></>

Logo.propTypes = Image.propTypes

export default Logo
