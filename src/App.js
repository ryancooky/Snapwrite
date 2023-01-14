
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    // Only the Main component has content but the Header and Footer are included for organization
    <div className="App">
        < Main />
    </div>
  );
}

export default App;
