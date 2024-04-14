

import BoxSystemProps from "./components/Box";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
import BasicButtons from "./components/Button";
import BoxImage from "./components/BoxImage";
import StackList from"@mui/material/Stack";





function App() {
  return(
  <div>

    <NavBar/>
    <StackList 
    direction='row' spacing={25}
    
    
    >
    <BoxSystemProps/>
    <ImageCard/>
    </StackList>
    <Footer/>
    


  </div>


  
  
 
  
)}

export default App;
