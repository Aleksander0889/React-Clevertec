import Header from "../components/Header/header";
import MenuBar from "../components/NavBar/navbar";
import Footer from "../components/Footer/fotter";
import NavBar from "../components/Navigation/navigation"
import { display } from "@mui/system";
import Mycards from "../components/Mycard/Mycard";
import MyBotton from "../components/MyButton/MyButton";

function Home() {
  return (
    
    <>
    <div>
      <NavBar/>
      <Mycards/>
      </div>
    </>  
  
  )
}

export default Home;
