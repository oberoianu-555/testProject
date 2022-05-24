
import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
<>
<Navbar title="Test App" about="Login" /> 
{/* <Navbar/> */}
<SignUp heading="Register"/>
{/* <SignIn/> */}

</>
  );
}

export default App;
