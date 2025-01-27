import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ThreadList from './components/ThreadList'; // ThreadList コンポーネントをインポート
import NewThread from './components/NewThread'; 

const App = () => {
  return (
    <Router>
      <div>
        <h1>TechTrain 掲示板</h1>
        {/* スレッド一覧画面へ遷移するリンク */}
        <Link to="/threads">スレッド一覧へ</Link>
        
        <Routes>
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/threads/new" element={<NewThread />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
