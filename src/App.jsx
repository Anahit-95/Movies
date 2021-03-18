import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import Default from './views/HOC/Default';

function App() {
  return (
    <BrowserRouter>
      <Default>
        <Routes />
      </Default>  
    </BrowserRouter>
  );
}

export default App;
