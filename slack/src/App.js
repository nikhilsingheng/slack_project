
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/* <h1>Slack-clone</h1> */}
      <Header/>
      <div className="app_body">
        <Sidebar/>

      </div>
    </div>
  );
}

export default App;
