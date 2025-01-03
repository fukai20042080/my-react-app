import { useState, useEffect } from 'react';

const BASE_URL = 'https://railway.bulletinboard.techtrain.dev/';

const ThreadList = () => {
  const [threads, setThreads] = useState([]); // スレッドデータを格納するステート
  const [error, setError] = useState(null); // エラーを格納するステート

  // スレッド情報をAPIから取得
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch(`${BASE_URL}threads`);
        if (!response.ok) {
          throw new Error('スレッド情報の取得に失敗しました');
        }
        const data = await response.json();
        setThreads(data); // スレッドデータをステートに格納
      } catch (error) {
        setError(error.message || '不明なエラーが発生しました');
      }
    };

    fetchThreads(); // コンポーネントがマウントされたらデータをフェッチ
  }, []); // 空の依存配列で最初の1回のみ実行

  if (error) {
    return <div>Error: {error}</div>; // エラーがあればエラーメッセージを表示
  }

  return (
    <div>
      <h1>掲示板スレッド一覧</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <h2>{thread.title}</h2>
            <p>{thread.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;