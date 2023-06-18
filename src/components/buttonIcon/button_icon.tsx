import classes from "./Mybutton_icon.module.css"
interface ButtonIconProps {
    
}
 
const ButtonIcon: React.FC<ButtonIconProps> = () => {
    return ( 

        <div className={classes.Mybutton_Icon}>
            <div className={classes.marginIcon}>
            <div className={classes.iconCube}></div>
            <div className={classes.iconCube}></div>
            <div className={classes.iconCube}></div>
            <div className={classes.iconCube}></div>
            </div>
        </div>
     );
}
 
export default ButtonIcon;