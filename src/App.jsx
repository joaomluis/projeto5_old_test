import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import useUserStore from "./store/useUserStore.jsx";
import Header from "./components/header/header.jsx";
import Sidebar from "./components/side-nav-bar/sidebar.jsx";



function App() {
 
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  return (
    <div className="App">
      <Header />
      {/*{isLoggedIn && <Sidebar />}*/}
      <Sidebar />
      
      
    </div>
  );
}

export default App;
