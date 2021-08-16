
import './styles/app.css';
import Header from "./component/Header"
import Sidebar from './component/Sidebar'
import Feed from "./component/Feed"
import Widgets from './component/Widgets'
import Login from './component/Login'


function App() {
  const user = null;
  return (
    //BEM nameing convention
    <div className="app">
    {!user ? (<Login/>):

      (<>
        <Header />
      <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      </>
    )
    }
    </div>

  );
}

export default App;
