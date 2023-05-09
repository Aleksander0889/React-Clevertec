import React from "react";
import classes from "./navbar.module.css"


 
const MenuBar = () => {
    return ( 
      
        <div className={classes.menuwrapper} >
          <div>
            <span>Витрина книг</span>
            <hr></hr>
          </div>

            <div>
              <span>все книги</span>
            </div>
            <ul>
              <li>Бизнес-книги</li>
              <li>Детективы</li>
              <li>Дтские книги</li>
              <li>Зарубежная литература</li>
              <li>История</li>
              <li>Класическая литература</li>
              <li>Книги по психологии</li>
              <li>Компьютерная литература</li>
              <li>Культура и искуство</li>
              <li>Наука и образование</li>
              <li>Публицистическая литература</li>
              <li>Справочники</li>
              <li>Фантастика</li>
              <li>Юмористическая литература</li>
            </ul>
            <div>
              <span>Правила пользователя</span>
            </div>
            <div>
              <span>Договор оферты</span>
            </div>          

        </div>
        
     );
}
 
export default MenuBar;