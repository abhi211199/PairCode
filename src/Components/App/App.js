import Editor from "../Editor/Editor";
import Terminal from "../Terminal/Terminal";
import Header from "../Header/Header";

import './App.css';


function App() {
  return (
    <div className="App1">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="editor">
          <Editor />
        </div>
        <div className="terminal">
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;
