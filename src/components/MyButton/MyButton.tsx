import classes from './Mybutton.module.css';

interface MyBottonProps {
    children: string,
}
 
const MyBotton: React.FC<MyBottonProps> = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.myBtn}>
        {children}
    </button> 
    );
}
 
export default MyBotton;