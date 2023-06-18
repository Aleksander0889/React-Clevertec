import IconStroce from "../buttonIcon_Stroce/IconStroce";
import ButtonIcon from "../buttonIcon/button_icon";
import classes from "./navigation.module.css"
interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    return (  
        <><div className={classes.inputWrapper}>
            <div>
                <input type="text" placeholder="Поиск книги или автора" className={classes.Myinput} />
                <img className={classes.iconSerch} src="./../../../img/Icon_Action.png" alt="" />
            </div>
            <button className={classes.Mybutton}>По рейтенгу</button>
            <div >
                <ButtonIcon/>
            </div>
            <div>
                <IconStroce/>
            </div>
        </div>
        
        
        </>
    );
}
 
export default NavBar;

