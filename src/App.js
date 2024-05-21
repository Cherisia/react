import './App.css';
import {useState} from "react";

function App() {
    let [글제목, b] = useState(['안녕하세요', '반가워요', '하이요']);
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <div className="list">
                <h4>{ 글제목[0] }</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{ 글제목[1] }</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{ 글제목[2] }</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    )
}

export default App;
