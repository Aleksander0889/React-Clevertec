import MyButton from "../MyButton/MyButton";
import classes from './Mycard.module.css';

interface MycardsProps {
    
}
 
const Mycards: React.FC<MycardsProps> = () => {
    return (  
        <div className={classes.cardwrapper}>
            <div>
                <img src="./../../../img/image.png" alt="" />
             </div>
             <div>
                <img src="" alt="" />
             </div>
             <div>
                <span>Грокаем алгоритмы. Иллюстрированное пособие для </span>
             </div>
             <div>
                <span>Адитья Бхаргава, 2019</span>
             </div>
             <MyButton>Забронировать</MyButton>
        </div>
    );
}
 
export default Mycards;