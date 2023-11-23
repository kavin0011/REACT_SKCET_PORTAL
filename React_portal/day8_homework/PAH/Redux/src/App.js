import './App.css';
import Redux from './Components/Redux';
import {Provider} from 'react-redux'
import CakeShop from './Components/CakeShop';
import store from './Components/Store';

function App() {
  return (
    <div className="App">
      {/* <Redux/> */}
      <Provider store ={store}>
        <CakeShop/>
      </Provider>
    </div>
  );
}

export default App;
