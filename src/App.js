import logo from './logo.svg';
import './App.css';
import CustomerList from './components/customer/CustomerList';
import { Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App ">
      <img src={logo} className="App-logo" alt="react"></img>
      
      <Routes >
        <Route path="/customerlist" element={<CustomerList />}/>
      </Routes>
    </div>
  );
}

export default App;
