import Navvar from './Navbar'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navvar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
