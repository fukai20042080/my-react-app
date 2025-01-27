import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate フックをインポート

const BASE_URL = 'https://railway.bulletinboard.techtrain.dev/';

const NewThread = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // navigate フックを使用

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}threads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error('スレッド作成に失敗しました');
      }

      alert('スレッドが作成されました！');
      navigate('/threads'); // 作成後、スレッド一覧画面に遷移
    } catch (error) {
      setError(error.message || '不明なエラーが発生しました');
    }
  };

  return (
    <div>
      <h1>新規スレッド作成</h1>
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default NewThread;
