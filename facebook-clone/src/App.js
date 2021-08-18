
import './styles/app.css';
import Header from "./component/Header"
import Sidebar from './component/Sidebar'
import Feed from "./component/Feed"
import Widgets from './component/Widgets'
import Login from './component/Login'
import {useStateValue} from "./Stateprovider"


function App() {
  const [{user},dispatch] = useStateValue();


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
