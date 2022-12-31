import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    // <div className="container mt-5">
      <div className='card text-center'>
        <div className='card-body'>
          <h1>How high can you count?</h1>
          <div className='my-5'>
            <h2 className='my-5 count'>{count}</h2>
            <button className='btn mx-3 up' onClick={() => setCount(count + 1)}>Count Up</button>
            <button className='btn mx-3 down' onClick={() => setCount(count - 1)}>Count Down</button>
            <button className='btn mx-3 reset' onClick={() => setCount(0)}>Back to start</button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default App;
