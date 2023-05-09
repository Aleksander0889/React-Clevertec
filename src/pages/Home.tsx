import Header from "../components/Header/header";
import MenuBar from "../components/NavBar/navbar";
import Footer from "../components/Footer/fotter";
import NavBar from "../components/Navigation/navigation"
import { display } from "@mui/system";

function Home() {
  return (
    <>
  <Header props={""}></Header>
  <div style={{display:"flex"}}>
    <MenuBar></MenuBar>
    <NavBar></NavBar>
  </div>
  
  <Footer></Footer>
  </>
  )
}

export default Home;
