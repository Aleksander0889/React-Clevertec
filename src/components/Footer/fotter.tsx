import classes from "./footer.module.css"

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return ( 

        <div>
            <hr />
            <div className={classes.footerWrapper}>
            <div>
                <span>2020-2023 Cleverland. Все права защищены.</span>
            </div>
            <div>
                <img src="./../../../img/F.png" alt="" />
                <img src="./../../../img/Ins.png" alt="" />
                <img src="./../../../img/VK.png" alt="" />
                <img src="./../../../img/In.png" alt="" />
            </div>
            </div>
        </div>
     );
}
 
export default Footer;

