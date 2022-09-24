import './App.css';
import Newnav from './NavBar/NavigationBar';
import Footer from './NavBar/Footer';
import { Outlet } from "react-router-dom";
//import Description from './Description1/Description';


function App() {
  return (
    <div className="App">
      <Newnav/>
      <div style={{ minHeight: "calc(100vh - 34px)"}} className="mt-5">
       
      <Outlet />

       </div>
       <Footer/>
    </div>
  );
}

export default App;