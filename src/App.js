import './App.css';
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['안녕하세요', '반가워요', '하이요']);
    let [like, setLike] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <div className="list">
                <h4>{title[0]} <span onClick={() => {
                    setLike(like + 1)
                }}>👍</span> {like}</h4>
                <button onClick={() => {
                    setTitle(['이렇게바뀜', '반가워요', '하이요'])
                }}>누르면 제목이 바껴요
                </button>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
