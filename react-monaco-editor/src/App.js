import React, { Component } from 'react'; 
import logo from './logo.svg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Editor from './components/Editor'
import Root from './routes/root';
// import Nav from './components/Nav';
// import CodeCard from './components/CodeCard';

// import Chat from './components/Chat';
import Chatnew from './components/Chatnew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Root/>
          <br />
          {/* <CodeCard/> */}
          <Chatnew/>
          <Editor />
        </main>
      </div>
    );
  }
}

export default App;

