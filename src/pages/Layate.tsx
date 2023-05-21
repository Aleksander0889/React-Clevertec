import Footer from '../components/Footer/fotter';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header/header';
import NavBar from '../components/Navigation/navigation';
import MenuBar from '../components/NavBar/navbar';

function Layout() {
  return (
    <>
       <Header props={""}></Header>       
        
        <div style={{display:"flex"}}>
        
                <MenuBar></MenuBar>
            
        
       
    
  </div>
       <Outlet />
       <Footer></Footer>
    </>
  );
}

export default Layout;