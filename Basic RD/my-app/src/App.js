import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TEST</div>
        <Card>
          <div>
            Title Card as props
          </div>
        </Card>
      </header>
    </div>
  );
}

export default App;
