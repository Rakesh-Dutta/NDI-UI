import React from 'react';
import './App.css';
// import TextInput from './TextInput.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard/Dashboard';
function App() {

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `You clicked ${count} times.`;
  // })

  return (
    <div className="App">
       <Dashboard />
      {/* <TextInput value={7}/>
      <button onClick = { () => setCount(count +1) }>Click me</button>
      <br/>
      the value of count : {count} */}
    </div>
  );
}

export default App;
