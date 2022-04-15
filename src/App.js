import { useState, useEffect } from 'react';
import Child from './Child';

export default function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setLoad(true);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <div>Parent Component</div>
      {load && <Child />}
    </div>
  );
}

