import logo from './logo.svg';
import './App.css';

function App() {
   let data = '하이';
    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그</h4>
                <p style={{color:'red',fontSize:'20px'}}>{data}</p>
            </div>
        </div>
    );
}

export default App;
