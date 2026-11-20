import './App.css';

import { useState } from 'react';

import Modal from './Modal';

​

function App() {

​

  const [title, setTitle] = useState(['경기도', '강원도', '제주도']);

  const [titlenum, setTitlenum] = useState(0);

  const [input, setInput] = useState('');

  const [modal, setModal] = useState(false);

​

  return (

    <div className="App">

      <div className="black-nav">

        <h4 style={{ color: 'red', fontSize: '20px' }}>React Blog</h4>

      </div>

​

      {

        title.map((tit, i) =>         

           <div className="list" key={i}>

             <h4 onClick={() => {

               setModal(true);

               setTitlenum(i);

             }}>{tit}</h4>

             <p>2월 17일 발행</p>

             <button onClick={() => {  //글 삭제

               const copy = [...title];

               copy.splice(i, 1);

               setTitle(copy);

             }}>글 삭제</button>

           </div>        

        )

      }

​

      <input type="text" onChange={e => {

        setInput(e.target.value);

      }} value={input}></input>

      <button onClick={() => {  //글 추가

        const copy = [...title];

        copy.unshift(input);

        setTitle(copy);

        setInput('');

      }}>글 추가</button>

​

      {

        modal == true ? <Modal title={title} setTitle={setTitle} setModal={setModal} titlenum={titlenum} /> : null

      }

​

    </div>

  );

}

​

export default App;