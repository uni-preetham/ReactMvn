import './App.css';
import CustomerList from './components/customer/CustomerList';
import { Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App ">
      
      <Routes >
        <Route path="/" element={<CustomerList />}/>
      </Routes>
    </div>
  );
}

export default App;
