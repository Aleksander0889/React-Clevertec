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
             <div className={classes.WraperStar}>
                <img src="./../../../img/Star 1.png" alt="" />
                <img src="./../../../img/Star 1.png" alt="" />
                <img src="./../../../img/Star 1.png" alt="" />
                <img src="./../../../img/Star 1.png" alt="" />
                <img src="./../../../img/Star 1.png" alt="" />
             </div>
             <div>
                <p className={classes.bookName}>Грокаем алгоритмы. Иллюстрированное пособие для </p>
             </div>
             <div>
                <p className={classes.bookAutor}>Адитья Бхаргава, 2019</p>
             </div>
             <MyButton>Забронировать</MyButton>
        </div>
    );
}
 
export default Mycards;