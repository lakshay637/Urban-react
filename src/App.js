import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    
    <>
      <Navbar title="Urban Clone Company" aboutText="About" />
      {/* <Navbar /> Uncomment to test defaultProps */}
      <div className="container my-3">
        <TextForm heading ="Enter text to analyze below" />
         <About />
      </div>
    </>
  );
}

export default App;
