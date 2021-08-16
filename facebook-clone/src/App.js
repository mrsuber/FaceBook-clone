
import './styles/app.css';
import Header from "./component/Header"
import Sidebar from './component/Sidebar'
import Feed from "./component/Feed"


function App() {
  return (
    //BEM nameing convention
    <div className="app">
      <Header />
      <div className='app__body'>
          <Sidebar />
          <Feed />
      </div>
    </div>
  );
}

export default App;
