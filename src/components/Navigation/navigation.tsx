interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    return (  
        <div>
            <input type="text" placeholder="Поиск книги или автора"/>
            <button>По рейтенгу</button>
            <div></div>
            <div></div>
        </div>
    );
}
 
export default NavBar;

