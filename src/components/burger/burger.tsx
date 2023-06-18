import classes from './Myburger.module.css';

interface MyburgerProps {
    children: string,
}
 
const Myburger: React.FC<MyburgerProps> = ({children, ...props}) => {
    return ( 
        <div className={classes.hamburgerButton}>
            <div className={classes.hamburgerButtonTop}></div>
            <div className={classes.hamburgerButtonMiddle}></div>
            <div className={classes.hamburgerButtonBottom}></div>
        </div>
    );
}
 
export default Myburger;