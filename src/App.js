import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <NavBar title="Textutils" abouttext="about us"/>
      <div className="container my-3"  >
      <Textarea textr="Enter the content"/>
      </div>
    </>
    );
}

export default App;
