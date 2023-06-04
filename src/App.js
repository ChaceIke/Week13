import './App.css';
import LoginForm from './Components/login-form';
import Navbar from './Components/navbar';

function App() {
  return (
    <div>
      <Navbar />
        <div className='container'>
          <LoginForm />
        </div>
    </div>
  );
}

export default App;
