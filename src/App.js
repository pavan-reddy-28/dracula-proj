// const { default: NavigationBar } = require("./components/Navbar/NavigationBar");

import DashboardMainFrame from './components/Dashboard/DashboardMainFrame'
import NavigationBar from './components/Navbar/NavigationBar'
import TravelModeButton from './components/TravelMode/TravelModeButton'
function App() {
  return (<>
  <NavigationBar/>

    <div className="App">
  
   
     
      <DashboardMainFrame/>
      {/* <TravelModeButton/> */}
        </div>
        
        </>
  );
}

export default App;
