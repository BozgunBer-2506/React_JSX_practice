import { useState } from 'react';

function LikeCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <p>Gefällt dir dieses Projekt?</p>
      <button onClick={() => setCount(count + 1)}>
        👍 Like ({count})
      </button>
      {count > 10 && <p>Wow, mehr als 10 Likes!</p>}
    </div>
  );
}

export default LikeCounter;