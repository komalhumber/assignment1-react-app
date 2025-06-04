import { useState } from 'react';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Toggle Message</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a conditionally rendered message!</p>}
    </div>
  );
}
