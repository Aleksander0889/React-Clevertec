import classes from "./IconStroce.module.css"
interface BIconStroceProps {
    
}
 
const IconStroce: React.FC<BIconStroceProps> = () => {
    return ( 

        <div className={classes.MyIconStroce}>
            <div className={classes.marginIconSrtoce}>
            <div className={classes.IconStroce}></div>
            <div className={classes.IconStroce}></div>
            <div className={classes.IconStroce}></div>
            </div>
        </div>
     );
}
 
export default IconStroce