import logo from './logo.svg';
import './App.css';
import "./scss/global.scss";

import Button from './components/Button';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <Button>Learn React</Button>
            </main>
        </div>
    );
}

export default App;
