import './App.css';
import SearchBar from './components/SeachBar/SearchBar';
import Home from './components/SeachBar/Home';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/images' element={<SearchBar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
