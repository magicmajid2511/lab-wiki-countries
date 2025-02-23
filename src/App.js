import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CountriesList />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/:countryId" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;